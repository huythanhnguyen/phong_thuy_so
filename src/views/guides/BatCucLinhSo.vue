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
      <div class="container mx-auto px-4 py-8">
        <div class="max-w-4xl mx-auto">
          <!-- Breadcrumb -->
          <div class="flex items-center text-sm text-gray-500 mb-6">
            <router-link to="/" class="hover:text-primary">Trang chủ</router-link>
            <span class="mx-2">/</span>
            <span class="text-gray-700">Bát Cục Linh Số</span>
          </div>
          
          <!-- Title -->
          <h1 class="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Bát Cục Linh Số Là Gì?</h1>
          
          <!-- Content -->
          <div class="prose prose-lg max-w-none">
            <p class="lead text-xl text-gray-600 mb-8">
              Bát Cục Linh Số là phương pháp phân tích các con số dựa trên nguyên lý Tứ Cát Tứ Hung, giúp giải mã ý nghĩa ẩn sau những dãy số trong cuộc sống, như số điện thoại, căn cước công dân hay số tài khoản ngân hàng.
            </p>
            
            <h2 class="text-2xl font-semibold mt-10 mb-4">Nguồn gốc của Bát Cục Linh Số</h2>
            <p>
              Phương pháp này có nguồn gốc từ phong thủy cổ đại, được phát triển và hoàn thiện qua nhiều thế hệ. Bát Cục Linh Số kết hợp giữa các nguyên lý âm dương, ngũ hành và sự cân bằng năng lượng để đánh giá tác động của các con số.
            </p>
            
            <div class="bg-gray-50 p-6 rounded-lg my-8 border-l-4 border-primary">
              <h3 class="text-xl font-semibold mb-3 text-gray-800">Ý Nghĩa "Bát Cục"</h3>
              <p class="mb-0">
                "Bát Cục" có nghĩa là 8 nhóm, ám chỉ 8 loại sao (4 cát tinh và 4 hung tinh) được sử dụng để phân tích dãy số. Mỗi con số hoặc cặp số đều mang một năng lượng riêng biệt, ảnh hưởng đến các khía cạnh khác nhau trong cuộc sống.
              </p>
            </div>
            
            <h2 class="text-2xl font-semibold mt-10 mb-4">Tứ Cát - Bốn Sao Tốt</h2>
            <p>Bốn nhóm sao mang lại may mắn và năng lượng tích cực:</p>
            
            <div class="grid md:grid-cols-2 gap-6 my-6">
              <div class="bg-green-50 p-5 rounded-lg">
                <h3 class="text-lg font-semibold text-green-700">Thiên Đức</h3>
                <p class="text-green-800">Đại diện cho phúc đức, nguyên tắc đạo đức và các giá trị tốt đẹp. Mang lại may mắn và sự hỗ trợ từ quý nhân.</p>
              </div>
              <div class="bg-green-50 p-5 rounded-lg">
                <h3 class="text-lg font-semibold text-green-700">Nguyệt Đức</h3>
                <p class="text-green-800">Tượng trưng cho sự dịu dàng, tinh tế và những ảnh hưởng tích cực đến các mối quan hệ và cuộc sống tinh thần.</p>
              </div>
              <div class="bg-green-50 p-5 rounded-lg">
                <h3 class="text-lg font-semibold text-green-700">Thiên Hỷ</h3>
                <p class="text-green-800">Biểu tượng của niềm vui, hạnh phúc và sự hoan hỷ. Mang đến các cơ hội tốt và sự hài lòng trong cuộc sống.</p>
              </div>
              <div class="bg-green-50 p-5 rounded-lg">
                <h3 class="text-lg font-semibold text-green-700">Thiên Quý</h3>
                <p class="text-green-800">Tượng trưng cho sự cao quý, tôn trọng và thành công. Giúp nâng cao vị thế và danh tiếng.</p>
              </div>
            </div>
            
            <h2 class="text-2xl font-semibold mt-10 mb-4">Tứ Hung - Bốn Sao Xấu</h2>
            <p>Bốn nhóm sao mang năng lượng thách thức cần được cân nhắc:</p>
            
            <div class="grid md:grid-cols-2 gap-6 my-6">
              <div class="bg-red-50 p-5 rounded-lg">
                <h3 class="text-lg font-semibold text-red-700">Bạch Hổ</h3>
                <p class="text-red-800">Tượng trưng cho sự hung dữ, xung đột và cạnh tranh. Có thể mang đến tranh chấp và khó khăn trong các mối quan hệ.</p>
              </div>
              <div class="bg-red-50 p-5 rounded-lg">
                <h3 class="text-lg font-semibold text-red-700">Thiên Cương</h3>
                <p class="text-red-800">Đại diện cho tính cứng rắn, bướng bỉnh và các trở ngại. Có thể gây ra xung đột và khó khăn trong việc thích nghi.</p>
              </div>
              <div class="bg-red-50 p-5 rounded-lg">
                <h3 class="text-lg font-semibold text-red-700">Đại Hao</h3>
                <p class="text-red-800">Liên quan đến sự hao tổn, mất mát đặc biệt là về tài chính và tài sản. Cần thận trọng trong chi tiêu và đầu tư.</p>
              </div>
              <div class="bg-red-50 p-5 rounded-lg">
                <h3 class="text-lg font-semibold text-red-700">Thọ Tử</h3>
                <p class="text-red-800">Tượng trưng cho những thay đổi lớn, có thể là kết thúc hoặc bắt đầu mới. Đòi hỏi sự thích nghi và chấp nhận sự thay đổi.</p>
              </div>
            </div>
            
            <h2 class="text-2xl font-semibold mt-10 mb-4">Cách Phân Tích Dãy Số Theo Bát Cục Linh Số</h2>
            <p>
              Phương pháp phân tích gồm các bước cơ bản sau:
            </p>
            
            <ol class="list-decimal pl-5 mb-8">
              <li class="mb-2">Chia dãy số thành các cặp số liền kề</li>
              <li class="mb-2">Xác định mỗi cặp số thuộc vào sao nào trong 8 loại sao</li>
              <li class="mb-2">Đánh giá tỷ lệ cát/hung trong dãy số</li>
              <li class="mb-2">Phân tích vị trí và tầm ảnh hưởng của từng sao</li>
              <li class="mb-2">Đưa ra kết luận tổng thể về năng lượng của dãy số</li>
            </ol>
            
            <div class="bg-blue-50 p-6 rounded-lg my-8">
              <h3 class="text-xl font-semibold mb-3 text-blue-800">Ví dụ phân tích</h3>
              <p>
                Với số điện thoại <strong>0912 345 678</strong>, chúng ta có các cặp số:
              </p>
              <ul class="pl-5 mb-4">
                <li>09 - Thiên Đức (Cát)</li>
                <li>91 - Bạch Hổ (Hung)</li>
                <li>12 - Thiên Hỷ (Cát)</li>
                <li>23 - Thiên Quý (Cát)</li>
                <li>34 - Đại Hao (Hung)</li>
                <li>45 - Thiên Đức (Cát)</li>
                <li>56 - Nguyệt Đức (Cát)</li>
                <li>67 - Thiên Cương (Hung)</li>
                <li>78 - Thiên Quý (Cát)</li>
              </ul>
              <p class="mb-0">
                Dãy số này có 6 cát tinh và 3 hung tinh, nhìn chung là một số điện thoại tốt với năng lượng tích cực chiếm ưu thế.
              </p>
            </div>
            
            <h2 class="text-2xl font-semibold mt-10 mb-4">Các Yếu Tố Quan Trọng Khác</h2>
            <p>
              Ngoài sự phân chia cát-hung, các yếu tố khác cũng được xem xét:
            </p>
            
            <ul class="list-disc pl-5 mb-8">
              <li class="mb-2">
                <strong>Vị trí số</strong>: Ba số cuối và số cuối cùng có tầm ảnh hưởng lớn nhất
              </li>
              <li class="mb-2">
                <strong>Tổ hợp đặc biệt</strong>: Một số tổ hợp có ý nghĩa đặc biệt như số thần tài (39, 79), số lộc (38, 78)
              </li>
              <li class="mb-2">
                <strong>Hài hòa Âm Dương</strong>: Cân bằng giữa số chẵn (Âm) và số lẻ (Dương)
              </li>
              <li class="mb-2">
                <strong>Tương hợp với bản mệnh</strong>: Mối quan hệ giữa dãy số với ngày sinh và bản mệnh của người sử dụng
              </li>
            </ul>
            <!-- call to action -->            
            <div class="text-center my-12">
              <p class="text-lg font-medium mb-6">Bạn muốn phân tích số điện thoại của mình?</p>
              <button @click="navigateTo('login')" class="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-dark transition-colors">
                Bắt đầu ngay
              </button>
            </div>
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
  
  <script setup>
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const currentYear = computed(() => new Date().getFullYear())
  
  const navigateTo = (target) => {
    if (target === 'register') {
      router.push({ name: 'login', query: { tab: 'register' } })
    } else {
      router.push({ name: target })
    }
  }
  </script>
  
  <style scoped>
  /* Thêm animation và các tùy chỉnh khác */
  h1, h2 {
    position: relative;
  }
  
  h1::after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 100px;
    height: 4px;
    background: linear-gradient(to right, #4361ee, #a5b4fc);
    border-radius: 2px;
  }
  
  .lead {
    line-height: 1.7;
  }
  
  /* Animation cho các thẻ khi xuất hiện */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .prose > * {
    animation: fadeIn 0.5s ease-out forwards;
  }
  
  /* Delay cho từng phần tử */
  .prose > *:nth-child(1) { animation-delay: 0.1s; }
  .prose > *:nth-child(2) { animation-delay: 0.2s; }
  .prose > *:nth-child(3) { animation-delay: 0.3s; }
  /* ... và tiếp tục cho các phần tử khác */
  
  /* Styling cho các card */
  .bg-green-50, .bg-red-50, .bg-blue-50 {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .bg-green-50:hover, .bg-red-50:hover, .bg-blue-50:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  }
  </style>