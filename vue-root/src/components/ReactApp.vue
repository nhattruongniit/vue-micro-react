<template>
  <div id="root"></div>
</template>

<script>
export default {
  name: 'ReactApp',
  mounted() {
    this.loadReactApp();
  },
  methods: {
    loadReactApp() {
      // Load React app script
      const script = document.createElement('script');
      script.src = 'http://localhost:6001/react-app/assets/index.605fae51.js'; // Adjust if different
      script.onload = () => {
        this.mountReactApp();
      };

      //  <link rel="stylesheet" href="/react-app/assets/index.cd9c0392.css">
      // how to load css file
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'http://localhost:6001/react-app/assets/index.cd9c0392.css';
      document.head.appendChild(link);
      document.body.appendChild(script);
    },
    mountReactApp() {
      // Assume React app mounts to a global function, adjust if different
      if (window.ReactApp) {
        window.ReactApp.mount(document.getElementById('root'));
      } else {
        console.error('ReactApp is not defined');
      }
    },
  },
};
</script>

<style scoped>
/* Add any specific styling here */
</style>
