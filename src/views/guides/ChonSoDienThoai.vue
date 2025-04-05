<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <!-- Header -->
    <div class="bg-primary-color text-white py-10 text-center">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl md:text-4xl font-semibold mb-2">Chọn Số Điện Thoại Hợp Mệnh</h1>
        <p class="text-lg opacity-90 max-w-2xl mx-auto">
          Hãy chọn số điện thoại phù hợp với bản mệnh để thu hút tài lộc và may mắn
        </p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 py-10">
      <div class="container mx-auto px-4">
        <!-- Form chọn mệnh -->
        <div class="bg-white rounded-lg p-6 shadow mb-8">
          <h2 class="text-2xl font-semibold mb-5 text-gray-800">Thông tin cá nhân</h2>
          
          <div class="mb-5">
            <label for="name" class="block font-medium mb-2 text-gray-700">Họ và tên</label>
            <input 
              type="text" 
              id="name" 
              v-model="formData.name" 
              placeholder="Nhập họ và tên của bạn"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-color focus:ring-2 focus:ring-primary-color/20"
            >
          </div>
          
          <div class="mb-5">
            <label for="birthdate" class="block font-medium mb-2 text-gray-700">Ngày sinh</label>
            <input 
              type="date" 
              id="birthdate" 
              v-model="formData.birthdate"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-color focus:ring-2 focus:ring-primary-color/20"
            >
          </div>
          
          <div class="mb-5">
            <label for="menh" class="block font-medium mb-2 text-gray-700">Ngũ hành bản mệnh</label>
            <select 
              id="menh" 
              v-model="formData.menh"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-color focus:ring-2 focus:ring-primary-color/20"
            >
              <option value="">-- Chọn bản mệnh --</option>
              <option value="kim">Kim</option>
              <option value="moc">Mộc</option>
              <option value="thuy">Thủy</option>
              <option value="hoa">Hỏa</option>
              <option value="tho">Thổ</option>
            </select>
          </div>
          
          <div class="mb-5">
            <label for="prefix" class="block font-medium mb-2 text-gray-700">Đầu số mong muốn</label>
            <select 
              id="prefix" 
              v-model="formData.prefix"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-color focus:ring-2 focus:ring-primary-color/20"
            >
              <option value="">-- Chọn đầu số --</option>
              <option value="086">086</option>
              <option value="088">088</option>
              <option value="089">089</option>
              <option value="090">090</option>
              <option value="091">091</option>
              <option value="094">094</option>
              <option value="097">097</option>
              <option value="098">098</option>
            </select>
          </div>
          
          <button 
            @click="searchNumbers"
            class="bg-primary-color text-white py-3 px-5 rounded-md font-semibold hover:bg-primary-dark transition duration-200"
          >
            Tìm Số Phù Hợp
          </button>
        </div>
        
        <!-- Recommended numbers -->
        <div v-if="recommendedNumbers.length > 0" class="mt-8">
          <h2 class="text-2xl font-semibold mb-5 text-gray-800">Các số điện thoại phù hợp</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <div 
              v-for="(number, index) in recommendedNumbers" 
              :key="index"
              class="bg-white rounded-lg shadow overflow-hidden flex flex-col"
            >
              <div class="text-2xl font-bold text-primary-color text-center py-4 border-b">
                {{ number.value }}
              </div>
              <div class="p-4 flex-1">
                <div class="flex justify-between mb-3">
                  <span class="font-medium">Điểm tương hợp:</span>
                  <span class="font-bold text-green-600">{{ number.score }}/10</span>
                </div>
                <div class="mb-3">
                  <div class="mb-1">
                    <span class="font-medium">Ngũ hành:</span>
                    <span class="ml-1">{{ number.element }}</span>
                  </div>
                  <div>
                    <span class="font-medium">Ý nghĩa:</span>
                    <span class="ml-1">{{ number.meaning }}</span>
                  </div>
                </div>
              </div>
              <button class="bg-gray-100 hover:bg-primary-light text-primary-color font-semibold py-2 w-full border-t border-gray-200 hover:border-primary-color transition duration-200">
                Chọn số này
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Footer from '@/components/layout/Footer.vue'

// Form data
const formData = reactive({
  name: '',
  birthdate: '',
  menh: '',
  prefix: ''
})

// Recommended numbers
const recommendedNumbers = ref([])

// Search for compatible numbers
const searchNumbers = () => {
  // Đây là nơi bạn sẽ gọi API hoặc xử lý logic để tìm số phù hợp
  // Ví dụ dữ liệu giả lập:
  recommendedNumbers.value = [
    {
      value: '0981 234 567',
      score: 8.5,
      element: 'Thủy',
      meaning: 'Phát tài phát lộc, thăng tiến trong sự nghiệp'
    },
    {
      value: '0981 456 789',
      score: 7.8,
      element: 'Hỏa',
      meaning: 'Mang đến nhiều cơ hội trong kinh doanh'
    },
    {
      value: '0981 111 999',
      score: 9.2,
      element: 'Kim',
      meaning: 'Thu hút tài lộc, hỗ trợ các mối quan hệ'
    },
    {
      value: '0981 888 333',
      score: 8.9,
      element: 'Thổ',
      meaning: 'Vững vàng, ổn định trong cuộc sống'
    }
  ]
}
</script>

<style scoped>
/* Nếu cần CSS tùy chỉnh bổ sung, thêm vào đây */
/* Các màu từ biến CSS sử dụng trong dự án */
:root {
  --primary-color: #4361ee;
  --primary-dark: #3a56d4;
  --primary-light: #e7ecfd;
}

/* Tailwind CSS không tự động nhận biết CSS variables, nên chúng ta cần thêm một số class tùy chỉnh */
.bg-primary-color {
  background-color: var(--primary-color, #4361ee);
}

.bg-primary-dark {
  background-color: var(--primary-dark, #3a56d4);
}

.bg-primary-light {
  background-color: var(--primary-light, #e7ecfd);
}

.text-primary-color {
  color: var(--primary-color, #4361ee);
}
</style>