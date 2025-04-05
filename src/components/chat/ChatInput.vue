<template>
  <div class="chat-input-container">
    <div class="chat-input">
      <textarea 
        ref="inputRef"
        v-model="inputText"
        placeholder="Nhập số điện thoại hoặc đặt câu hỏi..."
        @keydown.enter.prevent="handleEnterKey"
        @input="autoResize"
        rows="1"
      ></textarea>
      <button @click="sendMessage" :disabled="isDisabled || !inputText.trim()">
        <font-awesome-icon icon="paper-plane" />
      </button>
    </div>
    <div class="input-info">
      Nhập số điện thoại để phân tích hoặc đặt câu hỏi về ý nghĩa các con số
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
  isDisabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['send'])

const inputText = ref('')
const inputRef = ref(null)

// Watch for changes to automatically resize the textarea
watch(inputText, () => {
  autoResize()
})

// Methods
const sendMessage = () => {
  if (inputText.value.trim() && !props.isDisabled) {
    emit('send', inputText.value)
    inputText.value = ''
    autoResize()
    
    // Focus back on input after sending
    if (inputRef.value) {
      inputRef.value.focus()
    }
  }
}

const handleEnterKey = (event) => {
  // Send on Enter, unless Shift is pressed (for multiline)
  if (!event.shiftKey) {
    sendMessage()
  }
}

const autoResize = () => {
  if (!inputRef.value) return
  
  // Reset height to auto to properly calculate scrollHeight
  inputRef.value.style.height = 'auto'
  
  // Set new height based on content (with max height of 200px)
  const newHeight = Math.min(inputRef.value.scrollHeight, 200)
  inputRef.value.style.height = `${newHeight}px`
}

// Focus on input when mounted
onMounted(() => {
  if (inputRef.value) {
    inputRef.value.focus()
    autoResize()
  }
})
</script>

<style scoped>
.chat-input-container {
  padding: 16px 24px;
  border-top: 1px solid var(--border-color, #e0e0e0);
  background-color: white;
  position: relative;
  z-index: 5;
}

.chat-input {
  display: flex;
  align-items: flex-end;
  background-color: white;
  border: 1px solid var(--border-color, #e0e0e0);
  border-radius: 16px;
  padding: 10px 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  position: relative;
}

.chat-input textarea {
  flex: 1;
  border: none;
  outline: none;
  padding: 8px 40px 8px 8px;
  resize: none;
  font-size: 1rem;
  line-height: 1.5;
  max-height: 200px;
  background-color: transparent;
  font-family: inherit;
}

.chat-input button {
  position: absolute;
  right: 12px;
  bottom: 12px;
  width: 32px;
  height: 32px;
  background-color: var(--primary-color, #4361ee);
  color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.chat-input button:hover:not(:disabled) {
  background-color: var(--primary-dark, #3a56d4);
  transform: scale(1.05);
}

.chat-input button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.input-info {
  font-size: 0.8rem;
  color: var(--text-secondary, #6c757d);
  text-align: center;
  margin-top: 8px;
}

@media (max-width: 768px) {
  .chat-input-container {
    padding: 8px 12px;
  }
  
  .chat-input textarea {
    font-size: 16px; /* Prevent zoom on iOS */
  }
}
</style>