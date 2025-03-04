<template>
    <form class="flex flex-col items-center space-y-4 border border-gray-500 rounded-[20px] w-[650px] h-[80vh] mr-[8%] pl-[20px]">
        <div class="self-start mt-4 ml-[10px]">
            <h2 class="text-4xl">Forgot password ? </h2>
            <h3 class="text-[18px]">Please enter your email</h3>
        </div>
        <input type="email" placeholder="Example@mail.com" class="bg-black border-2 border-solid border-white rounded-lg w-[350px] h-[40px] pl-[10px] mr-[23px]">
        <button type="submit" class="border border-white w-[350px] h-[50px] mr-[23px] rounded-lg bg-purple-300 text-[24px] text-black mt-[10px] hover:bg-purple-600">Reset password</button>
        <router-link to="/" class="text-[16px] hover:underline mr-[23px] relative -top-2">Back to login</router-link>
        <FooterLinks />
    </form>
</template>

<script>
import FooterLinks from './FooterLinks.vue'

export default {
  name: 'LoginForm',
  components: {
    FooterLinks
  }
}
</script>
