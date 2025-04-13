<template>
  <div>
    <!-- Thêm QuotaAlert nếu là tin nhắn cuối cùng từ bot và hết câu hỏi -->
    <quota-alert v-if="isBot && isLastMessage && showQuotaAlert" 
                @close="handleCloseAlert" 
                :show="showQuotaAlert" />
                
    <div class="message" :class="messageClass" :id="message.id">
      <!-- Nội dung tin nhắn -->
      <div class="message-content" v-html="formattedContent"></div>
      
      <!-- Phần phân tích (nếu có) -->
      <div v-if="hasAnalysisData" class="analysis-container">
        <analysis-result :data="message.analysisData" />
      </div>
      
      <!-- Phần gợi ý câu hỏi (nếu là tin nhắn bot có phân tích) -->
      <div v-if="isBot && hasAnalysisData" class="suggestion-section">
        <div class="suggestion-text">
          <p>Bạn có thể hỏi thêm về:</p>
        </div>
        <div class="question-examples">
          <button 
            v-for="(question, index) in questionExamples" 
            :key="index" 
            class="example-question-btn"
            @click="onQuestionSelect(question)"
          >
            {{ question }}
          </button>
        </div>
        
        <!-- Suggestion chips -->
        <div class="suggestion-chips">
          <button 
            v-for="(category, index) in categories" 
            :key="index"
            class="category-btn" 
            :data-category="category.value"
            @click="onCategorySelect(category)"
          >
            <font-awesome-icon :icon="category.icon" /> {{ category.label }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import { formatBotMessage } from '@/utils'
import AnalysisResult from '@/components/analysis/AnalysisResult.vue'
import QuotaAlert from '@/components/payment/QuotaAlert.vue'
import { useChatStore } from '@/stores/chat'

const props = defineProps({
  message: {
    type: Object,
    required: true
  },
  isLastMessage: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['question-select', 'category-select'])
const chatStore = useChatStore()

// Computed
const isBot = computed(() => props.message.role === 'assistant')
const isUser = computed(() => props.message.role === 'user')
const showQuotaAlert = computed(() => chatStore.showQuotaAlert && props.isLastMessage)

const messageClass = computed(() => {
  return {
    'bot-message': isBot.value,
    'user-message': isUser.value
  }
})

const hasAnalysisData = computed(() => {
  return isBot.value && !!props.message.analysisData
})

const formattedContent = computed(() => {
  if (isBot.value) {
    return formatBotMessage(props.message.content)
  }
  return props.message.content
})

// Categories for suggestion chips
const categories = [
  { label: 'Kinh doanh', icon: 'briefcase', value: 'business' },
  { label: 'Tình duyên', icon: 'heart', value: 'love' },
  { label: 'Tài lộc', icon: 'coins', value: 'wealth' },
  { label: 'Sức khỏe', icon: 'heartbeat', value: 'health' }
]

// Question examples
const questionExamples = computed(() => {
  const examples = [
    "Số này ảnh hưởng thế nào đến sự nghiệp của tôi?",
    "Mối quan hệ với người khác có tốt không?", 
    "Số này có phải là số may mắn không?",
    "Tôi có nên giữ số điện thoại này không?",
    "Cặp sao cuối thể hiện gì?",
    "Số nào ảnh hưởng nhiều nhất đến tình duyên?"
  ]
  
  // Thêm câu hỏi động dựa vào dữ liệu phân tích
  if (hasAnalysisData.value) {
    const data = props.message.analysisData.result || props.message.analysisData
    
    if (data.balance === 'HUNG_HEAVY') {
      examples.push("Làm thế nào để hóa giải sao hung?")
    }
  }
  
  return examples
})

// Methods
const onQuestionSelect = (question) => {
  emit('question-select', question)
}

const onCategorySelect = (category) => {
  let question = ''
  switch (category.value) {
    case 'business':
      question = 'Số điện thoại này ảnh hưởng thế nào đến công việc kinh doanh?'
      break
    case 'love':
      question = 'Số điện thoại này có ý nghĩa gì về tình duyên của tôi?'
      break
    case 'wealth':
      question = 'Số điện thoại này ảnh hưởng thế nào đến tài chính của tôi?'
      break
    case 'health':
      question = 'Số điện thoại này có liên quan đến sức khỏe của tôi không?'
      break
    default:
      question = 'Hãy phân tích thêm về ' + category.value
  }
  
  emit('category-select', question)
}

const handleCloseAlert = () => {
  chatStore.setShowQuotaAlert(false)
  // Lưu thời điểm đóng thông báo để không hiển thị lại trong 7 ngày
  localStorage.setItem('quota_alert_shown_time', new Date().getTime().toString())
}
</script>

<style scoped>
.message {
  width: 100%;
  max-width: 100%;
  padding: 16px 24px;
  border-radius: 0;
  border: none;
  margin: 0;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.user-message {
  background-color: #f7f7f8;
  align-self: stretch;
}

.bot-message {
  background-color: white;
  align-self: stretch;
}

.message-content {
  font-size: 1rem;
  line-height: 1.6;
  white-space: pre-wrap;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.message-content :deep(p) {
  margin-bottom: 10px;
}

.message-content :deep(.section-title) {
  display: block;
  margin-bottom: 6px;
  color: var(--primary-color, #4361ee);
  font-weight: 600;
}

.message-content :deep(.section-paragraph) {
  margin-top: 16px;
  border-top: 1px solid rgba(0,0,0,0.05);
  padding-top: 12px;
}

.message-content :deep(p:first-child.section-paragraph) {
  border-top: none;
  padding-top: 0;
}

.message-content :deep(p + p) {
  margin-top: 10px;
}

.message-content :deep(ul) {
  margin: 8px 0 16px 16px;
  padding-left: 5px;
}

.message-content :deep(li) {
  margin-bottom: 8px;
  position: relative;
  list-style-type: none;
  padding-left: 15px;
}

.message-content :deep(li:before) {
  content: "•";
  color: var(--primary-color, #4361ee);
  position: absolute;
  left: 0;
  font-weight: bold;
}

.message-content :deep(strong) {
  color: var(--primary-color, #4361ee);
  font-weight: 600;
}

/* Analysis container */
.analysis-container {
  width: 100%;
  max-width: 800px;
  margin: 16px auto 0;
}

/* Suggestion section */
.suggestion-section {
  width: 100%;
  max-width: 800px;
  margin: 16px auto 0;
}

.suggestion-text {
  margin-top: 16px;
  font-size: 0.9rem;
  color: #666;
}

.question-examples {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
  margin-bottom: 12px;
  width: 100%;
}

.example-question-btn {
  background-color: var(--primary-light, #e7ecfd);
  color: var(--primary-color, #4361ee);
  border: 1px solid var(--border-color, #e0e0e0);
  border-radius: 12px;
  padding: 6px 12px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.example-question-btn:hover {
  background-color: var(--primary-color, #4361ee);
  color: white;
  border-color: var(--primary-color, #4361ee);
}

/* Suggestion Chips */
.suggestion-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
  width: 100%;
}

.category-btn {
  background-color: #f0f2f5;
  color: var(--primary-color, #4361ee);
  border: 1px solid #e0e0e0;
  border-radius: 18px;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.category-btn:hover {
  background-color: #e3f2fd;
  border-color: var(--primary-color, #4361ee);
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.category-btn:active {
  transform: translateY(0);
}

.category-btn svg {
  margin-right: 4px;
  font-size: 14px;
}

/* Responsive styles */
@media (max-width: 768px) {
  .message {
    padding: 12px 16px;
  }
  
  .message-content {
    font-size: 0.95rem;
  }
  
  .example-question-btn {
    font-size: 0.8rem;
    padding: 5px 10px;
  }
  
  .category-btn {
    font-size: 13px;
    padding: 5px 10px;
  }
}
</style>