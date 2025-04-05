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
          <span class="text-gray-700">Chọn Số Điện Thoại</span>
        </div>

        <!-- Title -->
        <h1 class="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Cách Chọn Số Điện Thoại Hợp Phong Thủy
        </h1>

        <!-- Content -->
        <div class="prose prose-lg max-w-none">
          <p class="lead text-xl text-gray-600 mb-8">
            Chọn số điện thoại hợp phong thủy không chỉ là việc tìm kiếm một dãy số đẹp mắt, mà còn là quá trình cân nhắc và lựa chọn sao cho phù hợp với con số may mắn của mỗi người. Hãy tham khảo các gợi ý và quy tắc sau đây để có được một số điện thoại mang lại may mắn và tài lộc.
          </p>
          <p>
            Mỗi con số đều có ý nghĩa riêng trong phong thủy. Ví dụ, con số 8 được xem là biểu tượng của sự thịnh vượng, trong khi con số 4 lại thường được liên kết với điều không may mắn. Vì vậy, việc chọn một số điện thoại cần dựa trên sự cân bằng của các yếu tố phong thủy.
          </p>
          <p>
            Ngoài ra, hãy lưu ý rằng vận may không chỉ đến từ con số điện thoại mà còn từ các yếu tố khác xung quanh bạn. Cân nhắc kỹ lưỡng vài bước và tham khảo ý kiến chuyên gia sẽ giúp bạn xây dựng một nền tảng vững chắc cho cuộc sống thịnh vượng.
          </p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-100 py-4">
      <div class="container mx-auto px-4 text-center text-gray-600">
        © 2023 Phong Thủy Số. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    navigateTo(page) {
      this.$router.push({ name: page });
    }
  }
};
</script>

<style scoped>
.auth-btn {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: background-color 0.2s;
}

.login-btn {
  background-color: #f0f0f0;
  color: #333;
}

.signup-btn {
  background-color: #007bff;
  color: #fff;
}
</style>