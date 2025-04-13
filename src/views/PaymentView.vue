<template>
  <div class="payment-page">
    <!-- Header -->
    <header class="payment-header bg-primary text-white py-4">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between">
          <router-link to="/" class="flex items-center">
            <img src="/vite.svg" alt="Logo" class="h-10 mr-2" />
            <span class="text-xl font-bold">Phong Thủy Số</span>
          </router-link>
          <div class="flex items-center space-x-4">
            <router-link to="/chat" class="payment-header-link">
              <font-awesome-icon icon="comment" />
              <span>Chat</span>
            </router-link>
            <div class="questions-indicator">
              <font-awesome-icon icon="question-circle" />
              <span>{{ remainingQuestions }} câu hỏi</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="payment-main container mx-auto px-4 py-8">
      <!-- Tabs -->
      <div class="flex border-b border-gray-200 mb-8">
        <button 
          class="tab-button" 
          :class="{ 'active': activeTab === 'packages' }"
          @click="activeTab = 'packages'"
        >
          <font-awesome-icon icon="shopping-cart" />
          <span>Gói câu hỏi</span>
        </button>
        <button 
          class="tab-button" 
          :class="{ 'active': activeTab === 'history' }"
          @click="activeTab = 'history'"
        >
          <font-awesome-icon icon="history" />
          <span>Lịch sử thanh toán</span>
        </button>
      </div>

      <!-- Packages -->
      <div v-if="activeTab === 'packages'">
        <h2 class="text-2xl font-bold mb-6 text-center">Chọn Gói Câu Hỏi</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="pkg in paymentPackages" :key="pkg.id" 
               class="package-card relative overflow-hidden" 
               :class="{ 'popular': pkg.popular }">
            <div v-if="pkg.popular" class="package-popular-tag">
              Phổ biến nhất
            </div>
            <div class="package-header">
              <h3 class="package-name">{{ pkg.name }}</h3>
              <div class="package-price">
                {{ formatCurrency(pkg.price) }}
              </div>
              <div v-if="pkg.discount > 0" class="package-discount">
                Tiết kiệm {{ pkg.discount }}%
              </div>
            </div>
            <div class="package-body">
              <div class="package-questions">
                <font-awesome-icon icon="question-circle" />
                <span>{{ pkg.questions }} câu hỏi</span>
              </div>
              <p class="package-description">{{ pkg.description }}</p>
            </div>
            <div class="package-footer">
              <button @click="openPaymentConfirm(pkg)" 
                      class="payment-button"
                      :class="{ 'payment-button-popular': pkg.popular }">
                Thanh toán ngay
              </button>
            </div>
          </div>
        </div>

        <!-- Payment Info -->
        <div class="payment-info bg-white rounded-lg shadow-md p-6 mt-8">
          <h3 class="text-xl font-semibold mb-4">Thông tin thanh toán</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-medium mb-2">Các bước thanh toán:</h4>
              <ol class="list-decimal list-inside space-y-2 text-gray-700">
                <li>Chọn gói câu hỏi phù hợp với nhu cầu của bạn</li>
                <li>Nhấn vào nút "Thanh toán ngay"</li>
                <li>Bạn sẽ được chuyển đến cổng thanh toán an toàn</li>
                <li>Hoàn thành thanh toán theo hướng dẫn</li>
                <li>Số câu hỏi sẽ được cộng vào tài khoản ngay sau khi thanh toán thành công</li>
              </ol>
            </div>
            <div>
              <h4 class="font-medium mb-2">Phương thức thanh toán:</h4>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-center">
                  <font-awesome-icon icon="credit-card" class="text-primary mr-2" />
                  Thẻ tín dụng / ghi nợ quốc tế
                </li>
                <li class="flex items-center">
                  <font-awesome-icon icon="money-bill" class="text-primary mr-2" />
                  Ví điện tử (MoMo, ZaloPay, VNPay)
                </li>
                <li class="flex items-center">
                  <font-awesome-icon icon="university" class="text-primary mr-2" />
                  Chuyển khoản ngân hàng
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- History Tab -->
      <div v-else-if="activeTab === 'history'">
        <PaymentHistory />
      </div>

      <!-- Payment Success View -->
      <div v-if="showSuccessView" class="success-overlay">
        <PaymentSuccess :transaction="paymentTransaction" />
      </div>
    </main>

    <!-- Footer -->
    <footer class="payment-footer bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <p>&copy; {{ new Date().getFullYear() }} Phong Thủy Số. Tất cả quyền được bảo lưu.</p>
          <div class="mt-4">
            <router-link to="/tc" class="text-gray-300 hover:text-white mx-2">Điều khoản sử dụng</router-link>
            <span class="text-gray-500">|</span>
            <router-link to="/privacy" class="text-gray-300 hover:text-white mx-2">Chính sách bảo mật</router-link>
          </div>
        </div>
      </div>
    </footer>

    <!-- Payment Confirm Modal -->
    <PaymentConfirmModal 
      :is-visible="showPaymentConfirm" 
      :package-info="selectedPackage"
      @close="closePaymentConfirm"
      @confirm="handlePaymentConfirm"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { usePaymentStore } from '@/stores/paymentStore';
import { useChatStore } from '@/stores/chat';
import PaymentConfirmModal from '@/components/payment/PaymentConfirmModal.vue';
import PaymentHistory from '@/components/payment/PaymentHistory.vue';
import PaymentSuccess from '@/components/payment/PaymentSuccess.vue';

const router = useRouter();
const route = useRoute();
const paymentStore = usePaymentStore();
const chatStore = useChatStore();

// State
const activeTab = ref('packages');
const showPaymentConfirm = ref(false);
const selectedPackage = ref(null);
const showSuccessView = ref(false);
const paymentTransaction = ref({});

// Computed properties
const paymentPackages = computed(() => paymentStore.paymentPackages);
const remainingQuestions = computed(() => chatStore.remainingQuestions);

// Check for payment status from URL (when redirected back from payment gateway)
onMounted(() => {
  // Kiểm tra query params để xác định trạng thái thanh toán
  const paymentStatus = route.query.status;
  const transactionId = route.query.transaction_id;
  
  if (paymentStatus === 'success' && transactionId) {
    // Lấy thông tin giao dịch từ server
    fetchTransactionDetails(transactionId);
  }
  
  // Lấy danh sách gói thanh toán từ server nếu cần
  paymentStore.fetchPaymentPackages();
});

// Methods
const openPaymentConfirm = (pkg) => {
  selectedPackage.value = pkg;
  showPaymentConfirm.value = true;
};

const closePaymentConfirm = () => {
  showPaymentConfirm.value = false;
};

const handlePaymentConfirm = async (pkg) => {
  try {
    const result = await paymentStore.createPayment(pkg.id);
    if (!result.success) {
      alert(result.error || 'Không thể tạo giao dịch thanh toán');
    }
    // Redirect sẽ được xử lý trong action createPayment
    closePaymentConfirm();
  } catch (error) {
    console.error('Payment error:', error);
    alert('Đã xảy ra lỗi khi xử lý thanh toán');
  }
};

const fetchTransactionDetails = async (transactionId) => {
  try {
    const result = await paymentStore.getTransactionDetails(transactionId);
    if (result.success) {
      // Hiển thị màn hình thanh toán thành công
      paymentTransaction.value = result.transaction;
      showSuccessView.value = true;
      
      // Cập nhật số câu hỏi trong chatStore
      chatStore.updateRemainingQuestions(result.transaction.newTotal);
      
      // Xóa query params khỏi URL để tránh reload lại trang hiển thị thông báo thành công
      router.replace({ path: route.path });
      
      // Chuyển hướng đến trang app sau 3 giây
      setTimeout(() => {
        router.push('/app');
      }, 3000);
    }
  } catch (error) {
    console.error('Error fetching transaction details:', error);
  }
};

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
  }).format(amount);
};

// Đóng màn hình success sau khi người dùng xem
watch(showSuccessView, (newVal) => {
  if (newVal) {
    // Tự động chuyển đến tab lịch sử thanh toán sau khi hiển thị thành công
    setTimeout(() => {
      activeTab.value = 'history';
    }, 500);
  }
});
</script>

<style scoped>
.payment-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color, #f8f9fa);
}

.payment-header {
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.payment-header-link {
  display: flex;
  align-items: center;
  gap: 6px;
  color: white;
  font-weight: 500;
  transition: all 0.2s;
}

.payment-header-link:hover {
  opacity: 0.9;
}

.questions-indicator {
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: 500;
}

.payment-main {
  flex: 1;
}

.tab-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  font-weight: 500;
  color: var(--text-secondary, #6c757d);
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
}

.tab-button:hover {
  color: var(--primary-color, #4361ee);
}

.tab-button.active {
  color: var(--primary-color, #4361ee);
  border-bottom-color: var(--primary-color, #4361ee);
}

.package-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  padding: 20px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  border: 2px solid transparent;
}

.package-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.package-card.popular {
  border-color: var(--primary-color, #4361ee);
}

.package-popular-tag {
  position: absolute;
  top: 12px;
  right: -30px;
  background-color: var(--primary-color, #4361ee);
  color: white;
  padding: 5px 30px;
  font-size: 0.8rem;
  font-weight: 500;
  transform: rotate(45deg);
}

.package-header {
  text-align: center;
  margin-bottom: 20px;
}

.package-name {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text-primary, #212529);
}

.package-price {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--primary-color, #4361ee);
}

.package-discount {
  display: inline-block;
  background-color: var(--success-color, #4caf50);
  color: white;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  margin-top: 6px;
}

.package-body {
  flex: 1;
  margin-bottom: 20px;
}

.package-questions {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--primary-color, #4361ee);
}

.package-description {
  color: var(--text-secondary, #6c757d);
  font-size: 0.95rem;
}

.package-footer {
  text-align: center;
}

.payment-button {
  width: 100%;
  padding: 12px 20px;
  background-color: var(--primary-color, #4361ee);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.payment-button:hover {
  background-color: var(--primary-dark, #3a56d4);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.payment-button-popular {
  background-color: var(--primary-color, #4361ee);
  box-shadow: 0 4px 10px rgba(67, 97, 238, 0.3);
}

.success-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.96);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .tab-button {
    padding: 10px 16px;
    font-size: 0.9rem;
  }
  
  .payment-header-link span,
  .questions-indicator span {
    display: none;
  }
}
</style> 