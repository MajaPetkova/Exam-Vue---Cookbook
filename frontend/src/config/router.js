import { createRouter, createWebHistory } from 'vue-router';
import RecipeDetails from '../components/RecipeDetails.vue';
import About from '../pages/About.vue';
import CreateRecipe from '../pages/CreateRecipe.vue';
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';

const routes = [{
  path: '/home',
  component: Home,
}, {
  path: '/about',
  component: About,
}, {
  path: '/create',
  component: CreateRecipe,
}, {
  path: '/register',
  component: Register,
}, {
  path: '/login',
  component: Login,
}, {
  path: '/recipes/:id',
  component: RecipeDetails,
}];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
