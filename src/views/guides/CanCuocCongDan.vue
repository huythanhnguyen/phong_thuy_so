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
                    <!-- call to action -->            
                    <div class="text-center my-12">
              <p class="text-lg font-medium mb-6">Bạn muốn phân tích số điện thoại của mình?</p>
              <button @click="navigateTo('login')" class="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-dark transition-colors">
                Bắt đầu ngay
              </button>
            </div>
      </div>
    </div>

      <!-- Footer -->
      <footer class="bg-gray-800 text-gray-300 py-12 mt-auto">
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
                <li><router-link to="/" class="hover:text-white">Trang chủ</router-link></li>
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

<script>
export default {
  name: 'CitizenIDInfo',
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
  border: none;
  border-radius: 0.375rem;
  transition: background-color 0.3s;
}

.login-btn {
  background-color: transparent;
  color: #1a202c;
}

.signup-btn {
  background-color: transparent;
  color: #1a202c;
}
</style>