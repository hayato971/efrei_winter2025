<template>
    <div class="h-screen flex items-center justify-center">
        <h1 class="text-[82px] w-full ml-[50px] mb-[200px] border-b-4 border-dashed border-gray-500 mr-[12px]">Don't worry !</h1>
        <ForgotPwForm/>
    </div>
</template>

<script>
import ForgotPwForm from '@/components/ForgotPwForm.vue'

export default {
  components: {
    ForgotPwForm
  }
}
</script>
