<template>
  <div id="landing-page">
    <div class="landing-header">
      <div class="brand">
        <font-awesome-icon icon="phone-alt" />
        <span>Phân Tích Số Điện Thoại</span>
      </div>
      <div class="auth-buttons">
        <button class="auth-btn login-btn" @click="navigateTo('login')">Đăng nhập</button>
        <button class="auth-btn signup-btn" @click="navigateTo('register')">Đăng ký</button>
      </div>
    </div>
    
    <div class="landing-main">
      <div class="welcome-text">
        <h1>Khám phá ý nghĩa ẩn sau con số</h1>
        <p>Phân tích số điện thoại theo phương pháp Tứ Cát Tứ Hung giúp bạn tối ưu sự nghiệp, tài lộc và may mắn.</p>
      </div>
      
      <div class="landing-demo">
        <div class="demo-messages">
          <div class="demo-message demo-bot">Xin chào! Tôi là trợ lý phân tích số điện thoại theo phương pháp Tứ Cát Tứ Hung. Bạn có thể nhập số điện thoại để tôi phân tích hoặc đặt câu hỏi về ý nghĩa các con số.</div>
          <div class="demo-message demo-user">0931328208</div>
          <div class="demo-message demo-bot">Phân tích số 0931328208: Đây là dãy số cân bằng giữa sao cát và hung, với tổ hợp số thể hiện sự thịnh vượng và phát triển trong sự nghiệp.</div>
        </div>
        <div class="demo-input">
          <input type="text" placeholder="Đăng nhập để trải nghiệm..." @click="navigateTo('login')">
          <button @click="navigateTo('login')">
            <font-awesome-icon icon="paper-plane" />
          </button>
        </div>
      </div>
      
      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <font-awesome-icon icon="star" />
          </div>
          <h3 class="feature-title">Phân tích Tứ Cát Tứ Hung</h3>
          <p class="feature-description">Khám phá sự cân bằng giữa sao cát và sao hung trong dãy số của bạn, đánh giá mức độ may mắn và thuận lợi.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <font-awesome-icon icon="coins" />
          </div>
          <h3 class="feature-title">Ý nghĩa tài lộc</h3>
          <p class="feature-description">Phân tích khả năng thu hút tài lộc, thịnh vượng và cơ hội kinh doanh từ dãy số điện thoại của bạn.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <font-awesome-icon icon="heart" />
          </div>
          <h3 class="feature-title">Tình duyên & Mối quan hệ</h3>
          <p class="feature-description">Khám phá ảnh hưởng của dãy số đến các mối quan hệ, tình duyên và khả năng kết nối với người khác.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <font-awesome-icon icon="briefcase" />
          </div>
          <h3 class="feature-title">Sự nghiệp & Mục tiêu</h3>
          <p class="feature-description">Hiểu rõ ảnh hưởng của dãy số điện thoại đến con đường sự nghiệp và khả năng đạt được mục tiêu.</p>
        </div>
      </div>
    </div>
    
    <div class="landing-footer">
      &copy; {{ currentYear }} Phân Tích Số Điện Thoại - Giải mã ý nghĩa con số trong cuộc sống của bạn
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

// Computed
const currentYear = computed(() => new Date().getFullYear())

// Methods
const navigateTo = (target) => {
  if (target === 'register') {
    router.push({ name: 'login', query: { tab: 'register' } })
  } else {
    router.push({ name: 'login' })
  }
}

// Redirect to app if already logged in
onMounted(() => {
  if (authStore.isAuthenticated) {
    router.push({ name: 'app' })
  }
})
</script>

<style scoped>
#landing-page {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f8;
}

.landing-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  background-color: white;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 1.2rem;
  color: var(--text-primary, #212529);
}

.brand svg {
  color: var(--primary-color, #4361ee);
}

.auth-buttons {
  display: flex;
  gap: 10px;
}

.auth-btn {
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
}

.login-btn {
  background-color: #2d2d2d;
  color: white;
  border: none;
}

.signup-btn {
  background-color: white;
  color: #2d2d2d;
  border: 1px solid rgba(0,0,0,0.2);
}

.login-btn:hover {
  background-color: #000000;
}

.signup-btn:hover {
  background-color: #f5f5f5;
}

.landing-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
}

.welcome-text {
  max-width: 600px;
  margin-bottom: 40px;
}

.welcome-text h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: var(--text-primary, #212529);
  font-weight: 600;
}

.welcome-text p {
  font-size: 1.2rem;
  color: var(--text-secondary, #6c757d);
  line-height: 1.6;
}

.landing-demo {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 600px;
  height: 300px;
  margin: 0 auto 40px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.demo-messages {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  background-color: #f7f7f8;
}

.demo-message {
  margin-bottom: 16px;
  max-width: 80%;
  padding: 12px 16px;
  border-radius: 8px;
  line-height: 1.5;
}

.demo-bot {
  background-color: white;
  align-self: flex-start;
  margin-right: auto;
}

.demo-user {
  background-color: var(--primary-light, #e7ecfd);
  color: var(--text-primary, #212529);
  align-self: flex-end;
  margin-left: auto;
}

.demo-input {
  display: flex;
  padding: 12px 16px;
  border-top: 1px solid rgba(0,0,0,0.1);
}

.demo-input input {
  flex: 1;
  padding: 10px 12px;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 4px;
  font-size: 0.95rem;
}

.demo-input button {
  margin-left: 8px;
  background-color: var(--primary-color, #4361ee);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0 15px;
  cursor: pointer;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1000px;
  width: 100%;
  margin-top: 20px;
}

.feature-card {
  background-color: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  text-align: left;
}

.feature-icon {
  width: 40px;
  height: 40px;
  background-color: var(--primary-light, #e7ecfd);
  color: var(--primary-color, #4361ee);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.feature-title {
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: var(--text-primary, #212529);
}

.feature-description {
  color: var(--text-secondary, #6c757d);
  font-size: 0.95rem;
  line-height: 1.5;
}

.landing-footer {
  padding: 16px 24px;
  border-top: 1px solid rgba(0,0,0,0.1);
  background-color: white;
  font-size: 0.9rem;
  color: var(--text-secondary, #6c757d);
}

/* Responsive */
@media (max-width: 768px) {
  .welcome-text h1 {
    font-size: 2rem;
  }
  
  .welcome-text p {
    font-size: 1rem;
  }
  
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>