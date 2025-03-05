<template>
    <form @submit.prevent="toLogin" class="flex flex-col items-center space-y-4 border border-gray-500 rounded-[20px] w-[650px] h-[80vh] mr-[8%] pl-[20px]">
        <div class="self-start mt-4 ml-[10px]">
            <h2 class="text-4xl">Login</h2>
            <h3 class="text-[18px]">Glad you're back !</h3>
        </div>
        <input v-model="email" type="text" placeholder="Username or Email" class="bg-black border-2 border-solid border-white rounded-lg w-[350px] h-[40px] pl-[10px] mr-[23px]" required>
        <input v-model="password" type="password" placeholder="Password" class="bg-black border-2 border-solid border-white rounded-lg w-[350px] h-[40px] pl-[10px] mr-[23px]" required>
        <label class="self-start relative -top-2">
            <input type="checkbox" class="ml-[10px] accent-purple-300">
            <span class="text-[15px] ml-2">Remember me</span>
        </label>
        <button type="submit" class="border border-white w-[350px] h-[50px] mr-[23px] rounded-lg bg-purple-300 text-[24px] text-black mt-[10px] hover:bg-purple-600">Login</button>
        <p v-if="errorMessage" class="text-red-500 mt-4 text-center">{{ errorMessage }}</p>
        <router-link to="/ForgotPw" class="text-[16px] mr-[23px] relative -top-2 hover:underline">Forgot password ?</router-link>
        <div class="h-[22px] items-center gap-5 inline-flex ml-[-18px] relative top-6">
                <div class="w-[150px] h-[0px] border border-gray-500"></div>
                <div class="text-gray-500 text-base">Or</div>
                <div class="w-[150px] h-[0px] border border-gray-500"></div>
        </div>
        <SocialLogin />
        <FooterLinks />
    </form>
</template>

<script>
import SocialLogin from './SocialLogin.vue'
import FooterLinks from './FooterLinks.vue'

export default {
  data () {
    return {
      email: '',
      password: '',
      errorMessage: ''
    }
  },
  components: {
    SocialLogin,
    FooterLinks
  },
  methods: {
    toLogin () {
      const testUser = {
        email: 'test@gmail.com',
        password: 'azerty'
      }
      if (this.email === testUser.email && this.password === testUser.password) {
        this.$router.push('/HomePage')
      } else {
        this.errorMessage = 'Email ou mot de passe incorrect'
      }
    }
  }
}
</script>
