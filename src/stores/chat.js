import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useAnalysisStore } from './analysis'

export const useChatStore = defineStore('chat', () => {
  // State
  const messages = ref([])
  const isTyping = ref(false)
  const context = ref({
    lastInputType: null,  // 'phone', 'question', 'followup', 'general'
    lastPhoneNumber: null,
    questionCount: 0
  })
  
  // Actions
  function addUserMessage(text) {
    const messageId = `msg_user_${Date.now()}`
    messages.value.push({
      id: messageId,
      role: 'user',
      content: text,
      timestamp: new Date().toISOString()
    })
    return messageId
  }
  
  function addBotMessage(text, analysisData = null) {
    const messageId = `msg_bot_${Date.now()}`
    messages.value.push({
      id: messageId,
      role: 'assistant',
      content: text,
      analysisData,
      timestamp: new Date().toISOString()
    })
    return messageId
  }
  
  function clearChat() {
    messages.value = []
    context.value = {
      lastInputType: null,
      lastPhoneNumber: null,
      questionCount: 0
    }
    
    // Thêm tin nhắn chào mừng khi xóa chat
    addBotMessage('Xin chào! Tôi là trợ lý phân tích số điện thoại theo phương pháp Tứ Cát Tứ Hung. Bạn có thể nhập số điện thoại để tôi phân tích hoặc đặt câu hỏi về ý nghĩa các con số.')
  }
  
  async function processUserInput(input) {
    if (isTyping.value) return
    
    // Thêm tin nhắn người dùng
    addUserMessage(input)
    
    // Phát hiện loại đầu vào
    const inputType = detectInputType(input)
    
    // Hiển thị trạng thái đang nhập
    isTyping.value = true
    
    try {
      const analysisStore = useAnalysisStore()
      
      // Xử lý dựa vào loại input
      switch(inputType) {
        case 'phone':
          // Cập nhật context
          context.value.lastInputType = 'phone'
          context.value.lastPhoneNumber = input.replace(/\D/g, '')
          context.value.questionCount = 0
          
          // Phân tích số điện thoại
          const result = await analysisStore.analyzePhoneNumber(input)
          
          if (result.success) {
            let interpretation = ''
            const data = result.data
            
            if (data.geminiResponse) {
              interpretation = data.geminiResponse
            } else if (typeof data === 'string') {
              interpretation = data
            } else if (data.answer) {
              interpretation = data.answer
            } else {
              interpretation = `Đã phân tích số điện thoại ${input}.`
            }
            
            // Thêm tin nhắn bot với dữ liệu phân tích
            addBotMessage(interpretation, data)
          } else {
            addBotMessage(result.error || 'Không thể phân tích số điện thoại. Vui lòng thử lại sau.')
          }
          break
          
  case 'followup':
  case 'question':
  case 'general':
  case 'compare':
    // Cập nhật context
    if (inputType === 'question' || inputType === 'followup') {
      context.value.questionCount++
    }
    context.value.lastInputType = inputType
    
    // Tạo payload cho câu hỏi
    const questionPayload = {
      question: input,
      phoneNumber: context.value.lastPhoneNumber || '',
      type: inputType,
      questionNumber: context.value.questionCount
    }
    
    try {
      // Gọi API để xử lý câu hỏi
      const questionResult = await analysisStore.askQuestion(questionPayload)
      
      if (questionResult.success && questionResult.data) {
        // Xác định nội dung phản hồi từ API
        let response = ''
        const data = questionResult.data
        
        if (data.geminiResponse) {
          response = data.geminiResponse
        } else if (data.answer) {
          response = data.answer
        } else if (typeof data === 'string') {
          response = data
        } else {
          response = 'Đã xử lý câu hỏi của bạn.'
        }
        
        // Thêm tin nhắn bot với dữ liệu phân tích nếu có
        addBotMessage(response, data.analysis || null)
      } else {
        // Hiển thị lỗi từ API
        addBotMessage(questionResult.error || 'Không thể xử lý câu hỏi của bạn. Vui lòng thử lại sau.')
      }
    } catch (error) {
      console.error('Error processing question:', error)
      addBotMessage('Đã xảy ra lỗi khi xử lý câu hỏi. Vui lòng thử lại sau.')
    }
    break
        }
      } catch (error) {
        console.error('Error processing input:', error)
        addBotMessage('Xin lỗi, đã xảy ra lỗi khi xử lý yêu cầu của bạn. Vui lòng thử lại sau.')
      } finally {
        isTyping.value = false
      }
  }
  
  function detectInputType(input) {
    // Chuẩn hóa đầu vào
    const cleanInput = input.trim().toLowerCase()
    
    // Kiểm tra nếu là số điện thoại
    const phonePattern = /^[0-9\s\.\-\+\(\)]{8,15}$/
    if (phonePattern.test(cleanInput.replace(/\D/g, ''))) {
      return 'phone'
    }
    
    // Chi tiết xử lý các loại đầu vào khác, sẽ cập nhật sau
    // Các regex và logic phát hiện loại câu hỏi
    
    // Mặc định dựa vào ngữ cảnh
    return context.value.lastInputType ? 'followup' : 'general'
  }
  
  // Khởi tạo chat với tin nhắn chào mừng
  function initChat() {
    if (messages.value.length === 0) {
      addBotMessage('Xin chào! Tôi là trợ lý phân tích số điện thoại theo phương pháp Tứ Cát Tứ Hung. Bạn có thể nhập số điện thoại để tôi phân tích hoặc đặt câu hỏi về ý nghĩa các con số.')
    }
  }

  return {
    messages,
    isTyping,
    context,
    addUserMessage,
    addBotMessage,
    clearChat,
    processUserInput,
    initChat
  }
})