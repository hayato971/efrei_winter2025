<template>
  <div class="w-[900px] h-[700px] bg-black rounded-[5px] shadow-[0px_0px_9px_3px_rgba(255,255,255,0.35)] flex flex-col items-center justify-between p-4">
    <div class="text-center text-red-500 font-bold text-4xl">
      <h2>
        Monthly Tasks
      </h2>
    </div>
    <div class="my-[10px] text-center text-red-500 font-bold text-4xl">
      <button @click="showForm" class="bg-green-500 text-white  px-6 py-2 my-2 rounded-md hover:bg-green-600 transition-colors text-sm"
      > Add project </button>
    </div>
    <FolderField v-if="toggleBar" :AddProject="AddProject" :Close="closeForm"/>
    <div class="grid grid-cols-3 gap-10 p-10 ml-10 w-full h-full overflow-y-scroll rounded-[5px]" >
      <FolderTasks :projects="projects" :deleteFolder="deleteFolder" :taskCompleted="taskCompleted"/>
    </div>
    <SetNoCompleted v-if="":completed_tasks="completed_tasks" :total_project="total_project" />
    <SetToCompleted 
</div>
</template>

<script>
import FolderField from './FolderField.vue'
import FolderTasks from './FolderTasks.vue'
import SetNoCompleted from './SetNoCompleted.vue'
import SetToCompleted from './SetToCompleted.vue'

export default {
  components: {
    FolderTasks,
    FolderField,
    SetNoCompleted
  },
  data () {
    return {
      projects: [],
      toggleBar: false,
      total_project: 0,
      completed_tasks: 0,
      check_box: false
    }
  },
  methods: {
    showForm () {
      this.toggleBar = true
    },
    AddProject (newProject) {
      this.projects.push(newProject)
      this.closeForm()
      this.countProject()
    },
    closeForm () {
      this.toggleBar = false
    },
    deleteFolder (i) {
      // Check the status of project (true/false)
      if (this.projects[i].completed) {
        this.completed_tasks-- // if the project is mark as completed, decrease completed_tasks
      }
      this.projects.splice(i, 1)
      this.countProject()
    },
    countProject () {
      this.total_project = this.projects.length
    },
    taskCompleted (index) {
      const isChecked = this.projects[index].completed // get the current state of the task
      if (isChecked) {
        this.completed_tasks--
      } else {
        this.completed_tasks++
      }
      this.projects[index].completed = !isChecked
    },
    folderVerfication () {
      if (this.total_project === this.countProject){
        return true
      }
    }
  }
}
</script>
