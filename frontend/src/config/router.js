import { createRouter, createWebHistory } from 'vue-router';
import About from '../pages/About.vue';
import CreateRecipe from '../pages/CreateRecipe.vue';
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import NotFound from '../pages/NotFound.vue'
import RecipeDetails from '../pages/RecipeDetails.vue';
import Register from '../pages/Register.vue';

const routes = [{
  path: '/home',
  name: 'home',
  component: Home,
}, {
  path: '/about',
  name: 'about',
  component: About,
}, {
  path: '/create',
  name: '/create',
  component: CreateRecipe,
}, {
  path: '/register',
  name: 'register',
  component: Register,
}, {
  path: '/login',
  name: 'login',
  component: Login,
}, {
  path: '/recipes/:id',
  name: 'recipeDetails',
  component: RecipeDetails,
}, {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: NotFound,
}];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const user = localStorage.getItem('authToken');

  if (to.path === '/create' && !user) {
    next('/login');
  }
  else {
    next();
  }
});
export default router;
