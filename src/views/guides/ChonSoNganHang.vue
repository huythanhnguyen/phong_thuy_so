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
          <span class="text-gray-700">Chọn Số Ngân Hàng</span>
        </div>

        <!-- Title -->
        <h1 class="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Cách Chọn Số Tài Khoản Ngân Hàng Hợp Phong Thủy
        </h1>

        <!-- Content -->
        <div class="prose prose-lg max-w-none">
          <p class="lead text-xl text-gray-600 mb-8">
            Số tài khoản ngân hàng cũng là một dãy số quan trọng, ảnh hưởng đến nhiều khía cạnh của cuộc sống tài chính của bạn. Việc chọn số tài khoản phù hợp có thể mang lại may mắn và thuận lợi trong các giao dịch.
          </p>
          <p>
            Theo quan niệm phong thủy, một số tài khoản ngân hàng hợp phong thủy sẽ giúp tăng cường năng lượng tích cực và thu hút sự giàu có. Bạn có thể dựa vào các yếu tố như màu sắc, số lượng chữ số, và các con số mang tính biểu tượng để lựa chọn số hợp mệnh.
          </p>
          <p>
            Hãy tham khảo ý kiến của chuyên gia tư vấn để có những lựa chọn phù hợp nhất với tình hình tài chính và phong thủy của bản thân.
          </p>
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
</script>

<style scoped>
/* Các style bổ sung nếu cần */
.text-primary {
  color: var(--primary-color, #4361ee);
}

.hover\:text-primary:hover {
  color: var(--primary-color, #4361ee);
}
</style>