import { createRouter, createWebHistory } from 'vue-router';
import About from '../pages/About.vue';
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import Recipes from '../pages/Recipes.vue';
import Register from '../pages/Register.vue';

const routes = [{
  path: '/',
  component: Home,
}, {
  path: '/about',
  component: About,
}, {
  path: '/recipes',
  component: Recipes,
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
