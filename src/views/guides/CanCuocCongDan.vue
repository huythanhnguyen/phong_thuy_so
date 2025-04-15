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
              Căn cước công dân (CCCD) không chỉ là giấy tờ tùy thân mà còn ẩn chứa những ý nghĩa phong thủy 
              quan trọng thông qua các dãy số trên thẻ.
            </p>

            <div class="mb-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h2 class="text-2xl font-bold text-gray-800 mb-4">Cấu trúc số Căn cước công dân</h2>
              <p class="mb-4">Theo Thông tư 07/2016/TT-BCA, mỗi số trên thẻ căn cước công dân đều mang một ý nghĩa nhất định:</p>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-white p-4 rounded-lg shadow-sm">
                  <h3 class="font-semibold text-lg mb-2 flex items-center">
                    <span class="flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full text-sm mr-2">1</span>
                    Ba chữ số đầu tiên
                  </h3>
                  <p>Là mã tỉnh, thành phố trực thuộc trung ương hoặc mã quốc gia nơi công dân đăng ký khai sinh.</p>
                </div>
                
                <div class="bg-white p-4 rounded-lg shadow-sm">
                  <h3 class="font-semibold text-lg mb-2 flex items-center">
                    <span class="flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full text-sm mr-2">2</span>
                    Một chữ số tiếp theo
                  </h3>
                  <p>Là mã giới tính của công dân.</p>
                </div>
                
                <div class="bg-white p-4 rounded-lg shadow-sm">
                  <h3 class="font-semibold text-lg mb-2 flex items-center">
                    <span class="flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full text-sm mr-2">3</span>
                    Hai chữ số tiếp theo
                  </h3>
                  <p>Là mã năm sinh của công dân.</p>
                </div>
                
                <div class="bg-white p-4 rounded-lg shadow-sm">
                  <h3 class="font-semibold text-lg mb-2 flex items-center">
                    <span class="flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full text-sm mr-2">4</span>
                    Sáu chữ số cuối
                  </h3>
                  <p>Là dãy số ngẫu nhiên - đây là phần chúng ta sẽ phân tích theo phong thủy.</p>
                </div>
              </div>
            </div>

            <h2 class="text-2xl font-bold text-gray-800 mb-4">Phương pháp phân tích phong thủy</h2>
            
            <p class="mb-4">
              Trong phong thủy số học, chúng ta chỉ phân tích 6 số cuối của căn cước công dân vì đây là dãy số 
              ngẫu nhiên và có thể ảnh hưởng đến vận mệnh của người sở hữu.
            </p>
            
            <div class="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-8">
              <h3 class="font-semibold text-lg mb-3">Quy tắc phân tích:</h3>
              <ol class="list-decimal list-inside space-y-3">
                <li>Chỉ phân tích 6 chữ số cuối của căn cước công dân.</li>
                <li>Nếu gặp số 0, chúng ta sẽ sử dụng số kế trước bên tay trái.</li>
                <li>Nếu số kế trước cũng là 0, tiếp tục tiến về bên trái cho đến khi gặp số khác 0.</li>
                <li>Sau khi có dãy số đã được chuẩn hóa, chúng ta phân tích thành từng cặp số để xác định các cặp sao.</li>
                <li>Mỗi cặp sao sẽ được đánh giá là cát (tốt) hay hung (xấu) dựa trên nguyên lý Bát Cực Linh Số.</li>
              </ol>
            </div>
            
            <div class="bg-green-50 p-6 rounded-lg border border-green-200 mb-8">
              <h3 class="font-semibold text-lg mb-3">Ví dụ minh họa:</h3>
              <p class="mb-2">Giả sử 6 số cuối của CCCD là: <strong>120304</strong></p>
              <ul class="list-disc list-inside space-y-2 mb-4">
                <li>Các cặp số: <strong>12</strong>, <strong>03</strong>, <strong>04</strong></li>
                <li>Với cặp <strong>03</strong>: Gặp số 0 nên thay bằng số kế trước (3), thành <strong>33</strong></li>
                <li>Với cặp <strong>04</strong>: Gặp số 0 nên thay bằng số kế trước (4), thành <strong>44</strong></li>
                <li>Dãy số sau chuẩn hóa: <strong>12</strong>, <strong>33</strong>, <strong>44</strong></li>
              </ul>
              <p>Từ đây, chúng ta sẽ phân tích ý nghĩa phong thủy của các cặp số này tương tự như phân tích số điện thoại.</p>
            </div>
            
            <p class="mb-6">
              Việc phân tích số CCCD theo phong thủy có thể giúp bạn hiểu thêm về các yếu tố tác động đến vận mệnh 
              và ảnh hưởng tiềm ẩn của dãy số này đến các khía cạnh khác nhau trong cuộc sống như sự nghiệp, 
              tài lộc, sức khỏe hay các mối quan hệ.
            </p>
            
            <p>
              Tuy nhiên, cần lưu ý rằng phương pháp này chỉ mang tính chất tham khảo, dựa trên nguyên lý phong thủy cổ 
              truyền kết hợp với các phương pháp hiện đại.
            </p>
          </div>
          
          <!-- Call to action -->
          <div class="text-center my-12">
            <p class="text-lg font-medium mb-6">Bạn muốn phân tích số căn cước của mình?</p>
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