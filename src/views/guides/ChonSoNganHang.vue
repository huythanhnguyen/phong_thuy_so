<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-white shadow-sm sticky top-0 z-10">
      <div class="container mx-auto px-4 py-3 flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <router-link to="/" class="flex items-center space-x-2">
            <font-awesome-icon icon="phone-alt" class="text-primary text-xl" />
            <span class="font-semibold text-lg text-gray-800">Phong Thủy Số</span>
          </router-link>
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
    <footer class="bg-gray-100 py-4">
      <div class="container mx-auto px-4 text-center text-gray-600">
        &copy; 2023 Phong Thủy Số. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "BankAccount",
  methods: {
    navigateTo(route) {
      this.$router.push({ name: route });
    }
  }
}
</script>

<style scoped>
.auth-btn {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 600;
}

.login-btn {
  background-color: #ffffff;
  border: 1px solid #d1d5db;
  color: #1f2937;
}

.signup-btn {
  background-color: #1f2937;
  border: 1px solid transparent;
  color: #ffffff;
}
</style>