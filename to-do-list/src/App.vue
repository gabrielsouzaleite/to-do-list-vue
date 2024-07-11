<template>
  <div id="app">
    <nav class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link class="nav-link" to="/tasks">Task List</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/add">Add Task</router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
