<template>
    <form @submit="submitForm" class="flex flex-col justify-center items-center space-y-4 border border-gray-500 m-auto rounded-[20px] w-[650px] h-[80vh] pl-[20px]">
      <label for="name">project name :</label>
      <input type="text" id="name" v-model="name" placeholder="Entrez le nom du projet" class="text-black">
      <label for="description">Description :</label>
      <input type="text" id="description" v-model="description" placeholder="Entrez la description" class="text-black">
      <button type="submit">Submit</button>
      <button @click="Close">Cancel</button>
    </form>
  </template>
<script>
export default {
  props: {
    AddProject: Function,
    Close: Function
  },
  data () {
    return {
      name: '',
      description: ''
    }
  },
  methods: {
    submitForm () {
      this.AddProject({ name: this.name, description: this.description })
      // Reset the form
      this.name = ''
      this.description = ''
    }
  }
}
</script>
