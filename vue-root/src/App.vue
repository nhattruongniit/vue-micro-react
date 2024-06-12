<template>
  <div id="app">
    <h1> This is Vue</h1>
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <br /><br />
    <h1>This is react</h1>
    <ReactApp />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ReactApp from './components/ReactApp.vue'
export default {
  name: 'App',
  components: {
    ReactApp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
