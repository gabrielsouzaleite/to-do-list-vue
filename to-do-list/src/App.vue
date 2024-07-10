<template>
  <div id="app">
    <nav>
      <router-link to="/tasks">Task List</router-link>
      <router-link to="/add">Add Task</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
nav {
  margin-bottom: 10px;
}
nav a {
  margin-right: 10px;
}
</style>
