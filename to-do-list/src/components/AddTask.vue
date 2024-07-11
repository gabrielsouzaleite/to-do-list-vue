<template>
  <div>
    <h1 class="d-flex justify-content-center align-items-center mb-4">Add Task</h1>
    <form class="d-flex flex-column justify-content-center align-items-center gap-2" @submit.prevent="addTask">
      <div>
        <label for="title" class="form-label">Title:</label>
        <input type="text" class="form-control" v-model="task.title" />
      </div>
      <div>
        <label for="description" class="form-label">Description:</label>
        <input type="text" class="form-control" v-model="task.description" />
      </div>
      <button class="btn btn-success" type="submit">Add Task</button>
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
