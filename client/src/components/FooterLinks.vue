<template>
    <div v-if="!hideSignUpLink"  class="relative top-10">
        <router-link to="/SignUp" class="text-[16px] mr-[23px] hover:underline">Don't have an account ? Sign up</router-link>
    </div>

    <div class="flex items-center inline-flex gap-7 text-[12px] mr-[23px] relative top-[35px]">
        <router-link to="login" class="hover:underline">Terms and conditions</router-link>
        <router-link to="/" class="hover:underline">Support</router-link>
        <router-link to="/" class="hover:underline">Customer care</router-link>
    </div>
</template>

<script>
export default {
  props: {
    hideSignUpLink: {
      type: Boolean,
      default: false
    }
  }
}
</script>
