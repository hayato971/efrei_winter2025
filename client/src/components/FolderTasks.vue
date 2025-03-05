<template>
  <!--Cards-->
    <div v-for="(folder, i) in projects" :key="i" class="text-black w-[200px] h-[220px] bg-white rounded-[5px] flex flex-col shadow-lg transition-all duration-300 hover:bg-[#d9d9d9] hover:scale-105">
      <!--Title-->
      <p class="text-[#000000] font-bold text-center mt-[20px]">{{ folder.name }}</p>
      <!--delete icone-->
      <img @click="deleteFolder(i)" class="w-[15px] h-[15px] absolute top-2 right-2 cursor-pointer" src="@/assets/delete.png"/>
      <!--description-->
      <div class="text-black text-center mt-[10px]">{{ folder.description }}</div>
      <div class="flex-grow text-black"></div>
      <!--Validation check box-->
        <input @click="taskCompleted(i)" type="checkbox" class="text-black w-3.5 h-3.5 border-5 color-black border-black my-3 mx-auto flex justify-center items-center hover:bg-[#d9d9d9] cursor-pointer">
    </div>
  </template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true
    },
    deleteFolder: {
      type: Function,
      required: true
    },
    taskCompleted: {
      type: Function,
      required: true
    }
  }
}
</script>
