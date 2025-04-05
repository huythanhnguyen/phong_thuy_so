import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import AppView from '../views/AppView.vue'

// Thêm import cho các trang con
import BatCucLinhSo from '../views/guides/BatCucLinhSo.vue'
import ChonSoDienThoai from '../views/guides/ChonSoDienThoai.vue'
import ChonSoNganHang from '../views/guides/ChonSoNganHang.vue'
import CanCuocCongDan from '../views/guides/CanCuocCongDan.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/app',
      name: 'app',
      component: AppView,
      meta: { requiresAuth: true }
    },
    // Thêm các route mới
    {
      path: '/guides/bat-cuc-linh-so',
      name: 'batCucLinhSo',
      component: BatCucLinhSo
    },
    {
      path: '/guides/chon-so-dien-thoai',
      name: 'chonSoDienThoai',
      component: ChonSoDienThoai
    },
    {
      path: '/guides/chon-so-ngan-hang',
      name: 'chonSoNganHang',
      component: ChonSoNganHang
    },
    {
      path: '/guides/can-cuoc-cong-dan',
      name: 'canCuocCongDan',
      component: CanCuocCongDan
    }
  ]
})

// Bảo vệ các trang yêu cầu đăng nhập
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('phone_analysis_token')
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !isAuthenticated) {
    next({ name: 'login' })
  } else if (to.name === 'login' && isAuthenticated) {
    next({ name: 'app' })
  } else {
    next()
  }
})

export default router