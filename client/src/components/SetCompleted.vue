<template>
    <div class="my-[20px] items-center justify-center flex flex-col">
      <button class="w-[126px] h-[50px] absolute bg-[#791919] rounded-[10px]">
        Set as completed ({{ completed_tasks }}/{{ total_project }})
      </button>
      <img class="w-[13px] h-[13px] left-[10px] top-[6px] absolute" src="../assets/locker.png" />
    </div>
  </template>

<script>
export default {
  props: {
    completed_tasks: Number,
    total_project: Number
  }
}
</script>
