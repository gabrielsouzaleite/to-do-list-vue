import { createRouter, createWebHistory } from 'vue-router';
import TaskList from '../components/TaskList.vue';
import AddTask from '../components/AddTask.vue';

const routes = [
  { path: '/tasks', component: TaskList }, // Adicione esta linha para a rota /tasks
  { path: '/add', component: AddTask }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
