<template>
    <form class="flex flex-col items-center space-y-4 border border-gray-500 rounded-[20px] w-[650px] h-[80vh] mr-[8%] pl-[20px]">
        <div class="self-start mt-4 ml-[10px]">
            <h2 class="text-4xl">Sign Up</h2>
            <h3 class="text-[18px]">Just some details to get you in</h3>
        </div>
        <input type="text" placeholder="Username" class="bg-black border-2 border-solid border-white rounded-lg w-[350px] h-[40px] pl-[10px] mr-[23px]">
        <input type="text" placeholder="Email/Phone" class="bg-black border-2 border-solid border-white rounded-lg w-[350px] h-[40px] pl-[10px] mr-[23px]">
        <input type="password" placeholder="Password" class="bg-black border-2 border-solid border-white rounded-lg w-[350px] h-[40px] pl-[10px] mr-[23px]">
        <input type="password" placeholder="Confirm password" class="bg-black border-2 border-solid border-white rounded-lg w-[350px] h-[40px] pl-[10px] mr-[23px]">
        <label class="self-start relative -top-2"></label>
        <button type="submit" class="border border-white w-[350px] h-[50px] mr-[23px] rounded-lg bg-purple-300 text-[24px] text-black mt-[10px] hover:bg-purple-600 hover:text-white">Sign up</button>
        <SocialLogin />
    <FooterLinks :hide-sign-up-link="true" />
</form>
</template>

<script>
import SocialLogin from './SocialLogin.vue'
import FooterLinks from './FooterLinks.vue'

export default {
  name: 'SignUpForm',
  components: {
    SocialLogin,
    FooterLinks
  }
}
</script>
