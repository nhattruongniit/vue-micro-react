// src/router.js
import Vue from 'vue';
import {Router} from 'vue-router';
import HelloWorld from './components/HelloWorld.vue'; // Example component
import ReactApp from './components/ReactApp.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/react-app',
      name: 'ReactApp',
      component: ReactApp,
    },
  ],
});