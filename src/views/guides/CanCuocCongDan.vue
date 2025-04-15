<template>
    <div class="min-h-screen flex flex-col">
  
      <!-- Header -->
      <Header />
  
      <!-- Main Content -->
      <div class="container mx-auto px-4 py-8 flex-grow max-w-4xl">
        <!-- Analysis Input Section -->
        <div class="mb-8">
            <!-- Title -->
            <h1 class="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Phân Tích Căn Cước Công Dân</h1>
          
            <!-- CCCD Input -->
            <div class="mb-4">
              <label for="cccd" class="block text-gray-700 text-sm font-bold mb-2">Nhập số Căn Cước Công Dân (12 số):</label>
              <input type="text" id="cccd" v-model="cccd" 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Nhập 12 số CCCD" maxlength="12">
              <p v-if="cccdError" class="text-red-500 text-xs italic">{{ cccdError }}</p>
           </div>
        
            <!-- Analyze Button -->
            <div class="mb-4">
              <button @click="analyzeCCCD" :disabled="loading"
                      class="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                {{ loading ? 'Đang phân tích...' : 'Phân tích CCCD' }}
              </button>
            </div>

          <!-- Breadcrumb -->
          <div class="flex items-center text-sm text-gray-500 mb-6">
            <router-link to="/" class="hover:text-primary">Trang chủ</router-link>
            <span class="mx-2">/</span>
            <span class="text-gray-700">Căn Cước Công Dân</span>
          </div>
          
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

          <!-- Analysis Result Section -->
          <div v-if="displayAnalysis">
            <h3 class="font-bold text-xl">Kết quả phân tích</h3>
            <p>Số gốc: {{ displayAnalysis.originalNumber }}</p>
            <p>Sáu số cuối: {{ displayAnalysis.lastSixDigits }}</p>
            <p>Chuỗi chuẩn hóa: {{ displayAnalysis.normalizedSequence }}</p>
            <p>Các cặp số: {{ displayAnalysis.pairs.join(', ') }}</p>

            <h4 class="font-bold">Các cặp số chi tiết</h4>
            <ul class="list-disc pl-5">
              <li v-for="pair in displayAnalysis.analysis.individualPairs" :key="pair.pairNumber">
                <span class="font-bold">Cặp {{ pair.digits }}</span>: {{ pair.star }} ({{ pair.starKey }}), {{ pair.meaning }}
              </li>
            </ul>

            <h4 class="font-bold">Các tổ hợp sao</h4>
            <ul class="list-disc pl-5">
              <li v-for="combination in displayAnalysis.analysis.starCombinations" :key="combination.combinationNumber">
                <span class="font-bold">{{ combination.stars }}</span>: {{ combination.meaning }}
                <ul class="list-disc pl-5">
                  <li v-for="detail in combination.details" :key="detail">{{ detail }}</li>
                </ul>
              </li>
            </ul>

            <p>Tổng quan: {{ displayAnalysis.analysis.overallSummary }}</p>
          </div>

        </div>

      </div>

    


  
      <!-- Footer -->
      <Footer />
    </div>
  </template>
  
  <script setup>

  import { ref, reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import Header from '@/components/layout/Header.vue';
  import Footer from '@/components/layout/Footer.vue';
  import DetailedAnalysis from '@/components/analysis/DetailedAnalysis.vue';
  
  const router = useRouter();
  
  const cccd = ref('');
  const cccdError = ref('');
  const analysisResults = ref(null);
  const loading = ref(false);
  const displayAnalysis = ref(null);
  
  const validateCCCD = () => {
      cccdError.value = '';
      const cccdValue = cccd.value.trim();
      const isValid = /^\d{12}$/.test(cccdValue);
      if (!isValid) cccdError.value = 'Số CCCD phải là 12 chữ số.';
      return isValid;
  };
  
  const analyzeCCCD = async () => {
    if (!validateCCCD()) {
      return;
    }
  
    loading.value = true;
    analysisResults.value = null; 
    displayAnalysis.value = null;
  
    try {
      const response = await fetch('https://chatbotsdtapi.onrender.com/api/cccd/analyze-cccd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cccdNumber: cccd.value })
      });
  
      if (!response.ok) {
        const data = await response.json(); // Parse error response
        throw new Error('Failed to analyze CCCD: ' + data.message);
      }
  
      const data = await response.json();
      displayAnalysis.value = data.data;
    } catch (error) {
        cccdError.value = error.message
    } finally {
      loading.value = false;
    }
  }
  
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