import { createRouter, createWebHistory } from 'vue-router';
import About from '../pages/About.vue';
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';

const routes = [{
  path: '/',
  component: Home,
}, {
  path: '/about',
  component: About,
}, {
  path: '/register',
  component: Register,
}, {
  path: '/login',
  component: Login,
}];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
