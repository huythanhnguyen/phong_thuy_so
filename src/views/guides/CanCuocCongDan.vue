<template>
    <div class="min-h-screen flex flex-col">
      <!-- Header -->
      <Header />
  
      <!-- Main Content -->
      <div class="container mx-auto px-4 py-8 flex-grow">
        <div class="max-w-4xl mx-auto">
          <!-- Breadcrumb -->
          <div class="flex items-center text-sm text-gray-500 mb-6">
            <router-link to="/" class="hover:text-primary">Trang chủ</router-link>
            <span class="mx-2">/</span>
            <span class="text-gray-700">Căn Cước Công Dân</span>
          </div>
          
          <!-- Title -->
          <h1 class="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Ý Nghĩa Căn Cước Công Dân</h1>
          
          <!-- Content -->
          <div class="prose prose-lg max-w-none">
            <p class="lead text-xl text-gray-600 mb-8">
              Căn cước công dân (CCCD) không chỉ là giấy tờ tùy thân mà còn là biểu tượng của quyền lợi và nghĩa vụ trong xã hội. 
              Sự hiện diện của CCCD đảm bảo rằng mỗi công dân đều được công nhận và tiếp cận các dịch vụ công một cách công bằng.
            </p>
            <p>
              Trên thực tế, CCCD đóng vai trò quan trọng trong việc xây dựng một hệ thống chính trị dân chủ, giúp quản lý hiệu quả các dịch vụ công, đảm bảo an ninh quốc gia và bảo vệ quyền lợi của người dân.
            </p>
            <p>
              Việc sở hữu CCCD không chỉ giúp xác minh danh tính mà còn tạo điều kiện thuận lợi cho việc thực hiện các giao dịch hành chính và tiếp cận các tiện ích xã hội.
            </p>
          </div>
          
          <!-- Call to action -->
          <div class="text-center my-12">
            <p class="text-lg font-medium mb-6">Bạn muốn phân tích số điện thoại của mình?</p>
            <button @click="navigateToLogin()" class="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-dark transition-colors">
              Bắt đầu ngay
            </button>
          </div>
        </div>
      </div>
  
      <!-- Footer -->
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  import Header from '@/components/layout/Header.vue'
  import Footer from '@/components/layout/Footer.vue'
  
  const router = useRouter()
  
  // Navigation method
  const navigateToLogin = () => {
    router.push({ name: 'login' })
  }
  </script>
  
  <style scoped>
  /* Các style bổ sung nếu cần */
  .text-primary {
    color: var(--primary-color, #4361ee);
  }
  
  .hover\:text-primary:hover {
    color: var(--primary-color, #4361ee);
  }
  
  .bg-primary {
    background-color: var(--primary-color, #4361ee);
  }
  
  .bg-primary-dark {
    background-color: var(--primary-dark, #3a56d4);
  }
  </style>