<template>
  <div>
    <h1 class="d-flex justify-content-center align-items-center mb-4">Edit Task</h1>
    <form class="d-flex flex-column justify-content-center align-items-center gap-2" @submit.prevent="editTask">
      <div class="form-group">
        <label class="form-label" for="title">Title:</label>
        <input type="text" v-model="task.title" class="form-control" />
      </div>
      <div class="form-group">
        <label class="form-label" for="description">Description:</label>
        <input type="text" v-model="task.description" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">Editar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  setup() {
    const task = ref({ title: '', description: '' });
    const route = useRoute();
    const router = useRouter();
    const taskId = route.params.id;

    const fetchTask = async () => {
      try {
        const response = await axios.get(`http://localhost:3333/tasks/${taskId}`);
        task.value = response.data;
      } catch (error) {
        console.error('Error fetching task:', error);
      }
    };

    const editTask = async () => {
      try {
        await axios.put(`http://localhost:3333/tasks/${taskId}`, task.value);
        router.push('/tasks');
      } catch (error) {
        console.error('Error editing task:', error);
      }
    };

    onMounted(fetchTask);

    return { task, editTask };
  }
};
</script>
