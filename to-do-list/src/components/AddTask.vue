<template>
  <div>
    <h1>Add Task</h1>
    <form @submit.prevent="addTask">
      <div>
        <label for="title">Title:</label>
        <input type="text" v-model="task.title" />
      </div>
      <div>
        <label for="description">Description:</label>
        <input type="text" v-model="task.description" />
      </div>
      <button type="submit">Add Task</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      task: {
        title: '',
        description: ''
      }
    };
  },
  methods: {
    async addTask() {
      try {
        console.log(this.task)
        const response = await axios.post('http://localhost:3333/tasks', this.task);
        console.log('Task added:', response.data);
        this.$router.push('/tasks'); // Navega para a rota /tasks
      } catch (error) {
        console.error('Error adding task:', error);
      }
    }
  }
};
</script>
