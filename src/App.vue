<template>
  <div class="app-container">
    <router-view ></router-view>
    <router-link class="page-link" to="/">  Home Page</router-link>
    <router-link class="page-link" to="/notification-page">Notification Page</router-link>
  </div>
</template>

<script>
  export default {
    name: 'App',
    
  }
</script>

<style>
  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    text-align: center;
  }
  .app-container{
    height: 400px;
  }
  .page-link{
    margin: 10px;
    text-decoration: underline;
  }
</style>
