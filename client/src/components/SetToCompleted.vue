<template>
    <div class="my-[20px] items-center justify-center flex flex-col">
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-blue-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Set as completed ({{ completed_tasks }}/{{ total_project }})
        </span>
        </button>
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
