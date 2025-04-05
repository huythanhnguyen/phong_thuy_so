<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-white shadow-sm sticky top-0 z-10">
      <div class="container mx-auto px-4 py-3 flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <font-awesome-icon icon="phone-alt" class="text-primary text-xl" />
          <span class="font-semibold text-lg text-gray-800">Phong Thủy Số</span>
        </div>
        <div class="flex space-x-3">
          <button @click="navigateTo('login')" class="auth-btn login-btn hover:bg-black">
            Đăng nhập
          </button>
          <button @click="navigateTo('register')" class="auth-btn signup-btn hover:bg-gray-100">
            Đăng ký
          </button>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-primary-light to-blue-50 py-16">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center">
          <div class="lg:w-1/2 mb-8 lg:mb-0">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Khám phá ý nghĩa ẩn sau con số
            </h1>
            <p class="text-lg text-gray-700 mb-6">
              Phân tích số điện thoại, căn cước công dân, số tài khoản ngân hàng theo phương pháp Tứ Cát Tứ Hung, 
              giúp bạn tối ưu sự nghiệp, tài lộc và may mắn.
            </p>
            <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button @click="navigateTo('register')" class="btn-primary py-3 px-6 text-center">
                Đăng ký miễn phí
              </button>
              <button @click="scrollToChat" class="btn-outline py-3 px-6 text-center">
                Dùng thử ngay
              </button>
            </div>
          </div>
          <div class="lg:w-1/2">
            <img src="/img/numbers-illustration.svg" alt="Phong thủy số" class="w-full max-w-md mx-auto object-contain" 
            onerror="this.onerror=null; this.src='https://via.placeholder.com/500x400?text=Phong+Thuy+So'"/>
      </div>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Các tính năng nổi bật</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="feature-card">
            <div class="feature-icon">
              <font-awesome-icon icon="star" />
            </div>
            <h3 class="feature-title">Phân tích Tứ Cát Tứ Hung</h3>
            <p class="feature-description">Khám phá sự cân bằng giữa sao cát và sao hung trong dãy số của bạn, đánh giá mức độ may mắn và thuận lợi.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <font-awesome-icon icon="coins" />
            </div>
            <h3 class="feature-title">Ý nghĩa tài lộc</h3>
            <p class="feature-description">Phân tích khả năng thu hút tài lộc, thịnh vượng và cơ hội kinh doanh từ dãy số.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <font-awesome-icon icon="heart" />
            </div>
            <h3 class="feature-title">Tình duyên & Mối quan hệ</h3>
            <p class="feature-description">Khám phá ảnh hưởng của dãy số đến các mối quan hệ, tình duyên và khả năng kết nối với người khác.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <font-awesome-icon icon="briefcase" />
            </div>
            <h3 class="feature-title">Sự nghiệp & Mục tiêu</h3>
            <p class="feature-description">Hiểu rõ ảnh hưởng của dãy số đến con đường sự nghiệp và khả năng đạt được mục tiêu.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Demo Chat Section -->
    <section id="demo-chat" class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-4">Dùng thử ngay</h2>
        <p class="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Nhập số điện thoại để phân tích hoặc đặt câu hỏi về ý nghĩa của các con số. 
          Bạn sẽ được trải nghiệm phân tích cơ bản mà không cần đăng nhập.
        </p>
        
        <div class="max-w-2xl mx-auto">
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <!-- Chat Messages -->
            <div class="h-80 overflow-y-auto p-4 bg-gray-50">
              <div v-for="(message, index) in chatMessages" :key="index" 
                :class="['mb-4 max-w-[80%] rounded-lg p-3', 
                  message.type === 'bot' ? 'bg-white shadow-sm ml-0 mr-auto' : 'bg-primary-light mr-0 ml-auto'
                ]">
                {{ message.text }}
              </div>
              
              <div v-if="isTyping" class="flex space-x-1 ml-0 mr-auto bg-white rounded-lg p-3 w-16">
                <div class="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
                <div class="w-2 h-2 bg-gray-300 rounded-full animate-pulse delay-100"></div>
                <div class="w-2 h-2 bg-gray-300 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
            
            <!-- Chat Input -->
            <div class="border-t border-gray-200 p-4">
              <div class="flex">
                <input 
                  type="text" 
                  v-model="userInput" 
                  class="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                  placeholder="Nhập số điện thoại hoặc đặt câu hỏi..."
                  @keyup.enter="sendMessage"
                />
                <button 
                  @click="sendMessage" 
                  class="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary-dark"
                  :disabled="!userInput.trim()"
                >
                  <font-awesome-icon icon="paper-plane" />
                </button>
              </div>
              <p class="text-xs text-gray-500 mt-2">
                Nhập số điện thoại để phân tích hoặc đặt câu hỏi như "Số 8 mang ý nghĩa gì?"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

<!-- Topics Section -->
<section class="py-16 bg-white">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12">Khám phá thêm</h2>
    
    <div class="grid md:grid-cols-2 gap-6">
      <!-- 1. Bát cục Linh số -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
        <div class="h-40 bg-blue-50 flex items-center justify-center">
          <font-awesome-icon icon="phone-alt" class="text-5xl text-primary" />
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-3">Bát cục Linh số là gì?</h3>
          <p class="text-gray-600 mb-4">Khám phá về phương pháp Tứ Cát Tứ Hung và cách thức phân loại số điện thoại theo bát cục linh số.</p>
          <router-link to="/guides/bat-cuc-linh-so" class="text-primary font-medium hover:underline inline-flex items-center">
            Tìm hiểu thêm <font-awesome-icon icon="arrow-right" class="ml-1" />
          </router-link>
        </div>
      </div>
      
      <!-- 2. Cách chọn số điện thoại tốt -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
        <div class="h-40 bg-green-50 flex items-center justify-center">
          <font-awesome-icon icon="mobile-alt" class="text-5xl text-green-500" />
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-3">Cách chọn số điện thoại tốt</h3>
          <p class="text-gray-600 mb-4">Hướng dẫn chi tiết cách chọn số điện thoại hợp với mệnh, tuổi và hòa hợp với các yếu tố phong thủy.</p>
          <router-link to="/guides/chon-so-dien-thoai" class="text-primary font-medium hover:underline inline-flex items-center">
            Tìm hiểu thêm <font-awesome-icon icon="arrow-right" class="ml-1" />
          </router-link>
        </div>
      </div>
      
      <!-- 3. Chọn số tài khoản ngân hàng -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
        <div class="h-40 bg-yellow-50 flex items-center justify-center">
          <font-awesome-icon icon="credit-card" class="text-5xl text-yellow-500" />
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-3">Chọn số tài khoản ngân hàng</h3>
          <p class="text-gray-600 mb-4">Cách chọn số tài khoản ngân hàng để thu hút tài lộc, thịnh vượng và may mắn trong tài chính.</p>
          <router-link to="/guides/chon-so-ngan-hang" class="text-primary font-medium hover:underline inline-flex items-center">
            Tìm hiểu thêm <font-awesome-icon icon="arrow-right" class="ml-1" />
          </router-link>
        </div>
      </div>
      
      <!-- 4. Ý nghĩa Căn cước công dân -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
        <div class="h-40 bg-red-50 flex items-center justify-center">
          <font-awesome-icon icon="id-card" class="text-5xl text-red-500" />
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-3">Ý nghĩa Căn cước công dân</h3>
          <p class="text-gray-600 mb-4">Phân tích ý nghĩa và ảnh hưởng của số căn cước công dân đối với vận mệnh và cuộc sống.</p>
          <router-link to="/guides/can-cuoc-cong-dan" class="text-primary font-medium hover:underline inline-flex items-center">
            Tìm hiểu thêm <font-awesome-icon icon="arrow-right" class="ml-1" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</section>

    <!-- FAQ Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Câu hỏi thường gặp</h2>
        
        <div class="max-w-3xl mx-auto space-y-4">
          <div v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-lg shadow-sm p-4">
            <div class="flex justify-between items-center cursor-pointer" @click="toggleFaq(index)">
              <h3 class="text-lg font-semibold">{{ faq.question }}</h3>
              <font-awesome-icon :icon="faq.open ? 'chevron-up' : 'chevron-down'" class="text-gray-500" />
            </div>
            <div v-if="faq.open" class="mt-4 text-gray-600">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-primary text-white text-center">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-6">Sẵn sàng khám phá vận mệnh qua con số?</h2>
        <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Đăng ký ngay hôm nay để trải nghiệm đầy đủ các tính năng phân tích số học.
        </p>
        <button @click="navigateTo('register')" class="bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
          Bắt đầu ngay
        </button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-gray-300 py-12">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">Phong Thủy Số</h3>
            <p class="text-sm opacity-75">
              Giải mã ý nghĩa con số trong cuộc sống của bạn. Chúng tôi giúp bạn hiểu và tận dụng năng lượng của các con số.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Liên kết</h3>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white">Trang chủ</a></li>
              <li><a href="#" class="hover:text-white">Dịch vụ</a></li>
              <li><a href="#" class="hover:text-white">Giới thiệu</a></li>
              <li><a href="#" class="hover:text-white">Điều khoản sử dụng</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Dịch vụ</h3>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white">Phân tích số điện thoại</a></li>
              <li><a href="#" class="hover:text-white">Tư vấn chọn số</a></li>
              <li><a href="#" class="hover:text-white">Phân tích căn cước công dân</a></li>
              <li><a href="#" class="hover:text-white">Phân tích số tài khoản</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Liên hệ</h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <font-awesome-icon icon="envelope" class="mr-2" />
                <a href="mailto:contact@phongthuyso.vn" class="hover:text-white">contact@phongthuyso.vn</a>
              </li>
              <li class="flex items-center">
                <font-awesome-icon icon="phone" class="mr-2" />
                <a href="tel:+84123456789" class="hover:text-white">0123 456 789</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-700 mt-10 pt-6 text-sm text-center">
          &copy; {{ currentYear }} Phong Thủy Số - Mọi quyền được bảo lưu
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

// Computed
const currentYear = computed(() => new Date().getFullYear())

// Chat component
const userInput = ref('')
const isTyping = ref(false)
const chatMessages = ref([
  { type: 'bot', text: 'Xin chào! Tôi là trợ lý phân tích số Phong Thủy. Bạn có thể nhập số điện thoại để phân tích hoặc đặt câu hỏi về ý nghĩa các con số.' }
])

// FAQ data
const faqs = ref([
  {
    question: 'Phương pháp Tứ Cát Tứ Hung là gì?',
    answer: 'Phương pháp Tứ Cát Tứ Hung là cách phân tích số học dựa trên các cặp số và sự tương tác của chúng, phân chia thành 4 cát tinh (mang lại điều tốt đẹp) và 4 hung tinh (mang lại thách thức). Mỗi cặp số sẽ mang một năng lượng khác nhau ảnh hưởng đến vận mệnh của bạn.',
    open: false
  },
  {
    question: 'Làm thế nào để chọn số điện thoại hợp phong thủy?',
    answer: 'Để chọn số điện thoại hợp phong thủy, bạn cần xem xét ngày sinh, mệnh, và mục tiêu cá nhân. Nên chọn số có nhiều cát tinh, cân bằng năng lượng âm dương, và phù hợp với bản mệnh. Ứng dụng của chúng tôi sẽ giúp bạn phân tích và chọn số phù hợp nhất.',
    open: false
  },
  {
    question: 'Số điện thoại có thực sự ảnh hưởng đến cuộc sống?',
    answer: 'Theo quan niệm phong thủy, số điện thoại bạn sử dụng hàng ngày sẽ tạo ra một trường năng lượng riêng. Các con số mang những rung động khác nhau, và khi được kết hợp đúng cách, có thể tăng cường năng lượng tích cực, hỗ trợ cho các mục tiêu cá nhân và nghề nghiệp.',
    open: false
  },
  {
    question: 'Cách phân biệt số đẹp và số xấu?',
    answer: 'Không có số tuyệt đối xấu hay đẹp, mà quan trọng là sự phù hợp với từng người. Tuy nhiên, số có nhiều cát tinh thường mang năng lượng tích cực, số có nhiều hung tinh cần cân nhắc. Số phù hợp cần cân bằng, hòa hợp với mệnh, tuổi và mục tiêu cá nhân.',
    open: false
  },
  {
    question: 'Tôi có thể thay đổi số điện thoại nếu không phù hợp không?',
    answer: 'Chắc chắn rồi! Nếu bạn cảm thấy số điện thoại hiện tại mang lại nhiều thách thức hơn thuận lợi, việc thay đổi là hoàn toàn nên cân nhắc. Chúng tôi cung cấp công cụ phân tích và đề xuất số mới phù hợp hơn với năng lượng cá nhân của bạn.',
    open: false
  }
])

// Methods
const navigateTo = (target) => {
  if (target === 'register') {
    router.push({ name: 'login', query: { tab: 'register' } })
  } else {
    router.push({ name: target })
  }
}

const scrollToChat = () => {
  const element = document.getElementById('demo-chat')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open
}

const sendMessage = () => {
  if (!userInput.value.trim()) return

  // Add user message
  chatMessages.value.push({ type: 'user', text: userInput.value })
  
  // Clear input
  const input = userInput.value
  userInput.value = ''
  
  // Show typing indicator
  isTyping.value = true
  
  // Simulate bot response after a delay
  setTimeout(() => {
    isTyping.value = false
    
    let response
    
    // Check if input is a phone number
    if (/^\d{9,11}$/.test(input.replace(/\D/g, ''))) {
      response = `Phân tích sơ bộ cho số ${input}: 
      
Đây là số có năng lượng ${Math.random() > 0.5 ? 'cát' : 'trung bình'}, phù hợp cho mục đích ${Math.random() > 0.5 ? 'kinh doanh và tài lộc' : 'công việc và sự nghiệp'}. 
      
Đăng nhập để xem phân tích chi tiết và ý nghĩa từng cặp số.`
    } else {
      // Handle as a question
      response = getSimulatedResponse(input)
    }
    
    chatMessages.value.push({ type: 'bot', text: response })
  }, 1500)
}

const getSimulatedResponse = (question) => {
  const lowerQuestion = question.toLowerCase()
  
  if (lowerQuestion.includes('số 8') || lowerQuestion.includes('so 8')) {
    return 'Số 8 được xem là con số may mắn trong phong thủy, tượng trưng cho sự thịnh vượng và dồi dào. Nó mang năng lượng của sự giàu có, thành công trong kinh doanh và tài chính. Trong dãy số điện thoại, số 8 xuất hiện nhiều lần có thể tăng cường năng lượng tích cực cho tài lộc.'
  }
  
  if (lowerQuestion.includes('cát') || lowerQuestion.includes('hung')) {
    return 'Trong phương pháp Tứ Cát Tứ Hung, cát tinh (sao tốt) gồm có: Thiên Đức, Nguyệt Đức, Thiên Hỷ và Thiên Quý. Hung tinh (sao xấu) gồm có: Bạch Hổ, Thiên Cương, Đại Hao và Thọ Tử. Mỗi sao được tạo thành từ các cặp số khác nhau và mang năng lượng riêng biệt.'
  }
  
  if (lowerQuestion.includes('chọn số') || lowerQuestion.includes('chon so')) {
    return 'Để chọn số điện thoại tốt, bạn nên ưu tiên những số có nhiều cát tinh, phù hợp với bản mệnh và ngày sinh. Nên cân bằng giữa âm dương, tránh quá nhiều số chẵn hoặc lẻ. Số cuối cùng và ba số cuối có ý nghĩa quan trọng đặc biệt, nên chọn những số mang năng lượng hỗ trợ mục tiêu của bạn.'
  }
  
  return 'Đây là một câu hỏi thú vị về phong thủy số. Để có câu trả lời đầy đủ và chính xác, bạn có thể đăng nhập và trải nghiệm dịch vụ phân tích chuyên sâu của chúng tôi. Chúng tôi có thể giúp bạn hiểu rõ hơn về ý nghĩa của các con số và ảnh hưởng của chúng đến cuộc sống.'
}

// Redirect to app if already logged in
onMounted(() => {
  if (authStore.isAuthenticated) {
    router.push({ name: 'app' })
  }
})
</script>
<style scoped>
/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0% { transform: scale(0.95); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.5; }
}

/* Custom styling - complement Tailwind */
.animate-pulse {
  animation: pulse 1.5s infinite;
}

.delay-100 {
  animation-delay: 0.1s;
}

.delay-200 {
  animation-delay: 0.2s;
}

/* Hero section appears with animation */
section:first-of-type {
  animation: fadeIn 0.8s ease-out;
}

/* Card hover effects */
.feature-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  transition: transform 0.3s ease;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1);
}

/* Chat animation */
.chat-messages > div {
  animation: fadeIn 0.3s ease-out;
}

/* Enhanced button styling */
button {
  transition: all 0.2s ease;
}

button:active {
  transform: scale(0.98);
}

/* FAQ transitions */
.faq-answer-enter-active, .faq-answer-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
  max-height: 1000px;
  overflow: hidden;
}

.faq-answer-enter-from, .faq-answer-leave-to {
  max-height: 0;
  opacity: 0;
}

/* Custom scrollbar for chat */
.chat-messages::-webkit-scrollbar {
  width: 6px;
}

.chat-messages::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.chat-messages::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 10px;
}

.chat-messages::-webkit-scrollbar-thumb:hover {
  background: #4361ee;
}

/* Custom gradient backgrounds */
.bg-gradient-primary {
  background: linear-gradient(135deg, var(--primary-light) 0%, #e0e7ff 100%);
}

/* Hero image shadow effects */
.hero-image {
  filter: drop-shadow(0 10px 15px rgba(67, 97, 238, 0.2));
}

/* Responsive adjustments */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem !important;
  }
  
  .feature-card {
    padding: 1.5rem !important;
  }
}
</style>