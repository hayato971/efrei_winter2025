<template>
  <div class="h-screen flex  items-center justify-center mt-[-350px] pb-[-50px] mb-[50px]">
    <UserCard/>
  </div>
  <div class="h-screen flex items-center justify-center mt-[-450px]">
    <TemplateTasks/>
  </div>
  <div class="h-screen flex items-center justify-center mt-[-200px]">
    <ProjectHistory/>
  </div>
</template>

<script>

import ProjectHistory from '@/components/ProjectHistory.vue'
import TemplateTasks from '@/components/TemplateTasks.vue'
import UserCard from '@/components/UserCard.vue'

export default {
  components: {
    TemplateTasks,
    ProjectHistory,
    UserCard
  }
}

</script>
