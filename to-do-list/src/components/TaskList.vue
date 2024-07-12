<template>
  <div>
    <h1 class="d-flex justify-content-center align-items-center mb-4">Task List</h1>
    <div class="d-flex flex-column justify-content-center align-items-right col-md-4 offset-md-4">
      <ul class="list-group">
        <li 
          class="list-group-item d-flex justify-content-between align-items-center" 
          v-for="task in tasks" 
          :key="task.id"
          :class="{ 'completed-task': task.completed }"
        >
          {{ task.title }}
          <div>
            <button class="btn btn-success me-1" @click="toggleCompleteTask(task.id)" v-if="!task.completed">Completar</button>
            <button class="btn btn-warning me-1" @click="toggleCompleteTask(task.id)" v-if="task.completed">Descompletar</button>
            <button class="btn btn-primary me-1" @click="editTask(task.id)" v-if="!task.completed">Editar</button>
            <button class="btn btn-danger" @click="deleteTask(task.id)" v-if="!task.completed">Excluir</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      tasks: []
    };
  },
  created() {
    this.fetchTasks();
  },
  methods: {
    async fetchTasks() {
      try {
        const response = await axios.get('http://localhost:3333/tasks');
        this.tasks = response.data;
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    },
    async deleteTask(id) {
      try {
        await axios.delete(`http://localhost:3333/tasks/${id}`);
        this.fetchTasks();
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    },
    async toggleCompleteTask(id) {
      try {
        await axios.patch(`http://localhost:3333/tasks/${id}/complete`);
        this.fetchTasks(); 
      } catch (error) {
        console.error('Error completing task:', error);
      }
    },
    editTask(id) {
      this.$router.push(`/tasks/edit/${id}`);
    }
  }
};
</script>

<style>
.completed-task {
  text-decoration: line-through;
}
</style>
