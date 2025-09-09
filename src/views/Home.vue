<script setup lang="ts">
  import { useTaskStore } from '../store/taskStore';
  import { ref, onMounted } from 'vue';
  const store = useTaskStore()
  const newTask = ref('')

  onMounted(() => {
  console.log("Home mounted")
})

  function add(params:number){
    alert(params)
    if(newTask.value.trim()){
      store.addTask(newTask.value.trim())
      newTask.value = ''
    }
  }
</script>
<template>
  <h1>Task Manager</h1>
  <input v-model="newTask" placeholder="Enter Text"/>
  <button @click="add(1)">Add</button>

  <ul>
    <li v-for="task in store.tasks">
      <router-link :to="'/task/'+task.id">{{ task.title }}</router-link>
      <input type="checkbox" v-model="task.done"/>
      <button @click="store.deleteTask(task.id)">❌</button>
    </li>
  </ul>
</template>
