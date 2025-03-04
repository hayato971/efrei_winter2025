import { createMemoryHistory, createRouter } from 'vue-router'
import LoginView from '../views/LoginView'
import ForgotPwView from '../views/ForgotPwView.vue'
import SignUpView from '../views/SignUpView.vue'
import HomePageView from '../views/HomePageView.vue'

const routes = [

  {
    path: '/',
    component: LoginView
  },

  {
    path: '/ForgotPw',
    component: ForgotPwView
  },

  {
    path: '/SignUp',
    component: SignUpView
  },

  {
    path: '/HomePage',
    component: HomePageView
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
}
)

export default router
