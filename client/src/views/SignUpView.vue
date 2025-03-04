<template>
  <div class="h-screen flex items-center justify-center">

  <h1 class="text-[82px] w-full ml-[50px] border-b-4 border-dashed border-gray-500 mr-[12px] w-[3200px]">Start your new life !</h1>
  
  <router-link to="/" class="text-[36px] text-center border border-white h-[42] absolute -left-0 ml-12 transform translate-y-4 w-96 rounded-lg bg-purple-300 text-black hover:bg-purple-600 hover:text-white">Login</router-link>

   <SignUpForm/>
  </div>
</template>

<script>
import SignUpForm from '@/components/SignUpForm.vue'

export default {
  components: {
    SignUpForm
  }
}
</script>
