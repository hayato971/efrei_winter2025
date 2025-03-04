<template>
<div class="h-screen flex items-center justify-center">
<h1 class="text-[82px] w-full ml-[50px] mb-[200px] border-b-4 border-dashed border-gray-500 mr-[12px]">You again...</h1>
<LoginForm/>
</div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
  components: {
    LoginForm
  }
}
</script>
