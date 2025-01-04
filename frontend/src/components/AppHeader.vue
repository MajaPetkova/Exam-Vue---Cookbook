<script setup>
// import { useRouter } from 'vue-router';

import { ref } from 'vue';

const LINKS = [{
  label: 'Home',
  name: 'home',
}, {
  label: 'About',
  name: 'about',
}, {
  label: 'Recipes',
  name: 'recipes',
}, {
  label: 'Register',
  name: 'register',
}, {
  label: 'Login',
  name: 'login',
}];
const isActive = ref(false);

function onSelect(name) {
  isActive.value = isActive.value === name ? '' : name;
}
// const router = useRouter();
</script>

<template>
  <div class="container">
    <img src="../assets/images/logo.jpg" alt="logo" class="logo">
    <div class="nav-links">
      <ul v-for="link in LINKS" :key="link.path">
        <router-link :to="link.name">
          <li :class="[link.name === isActive ? 'active' : ''] " @click="onSelect(link.name)">
            {{ link.label }}
          </li>
        </router-link>
      </ul>
    </div>
  </div>
  <div class="br"></div>
</template>

<style scoped>
.container{
  max-width: 1440px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-links{
  display: flex;
  justify-content:right;
  align-items: center;
  gap:1.5rem;
  text-decoration: none;
}
ul li{
  text-decoration: none;
  color: #830c0b;
  list-style: none;
}
.br{
  width: 80%;
  margin: 0 auto;
  height: 2px;
  background-color:#840e0b
}
.active{
  background-color:#840e0b ;
  color:white;
  padding: 0.4rem 0.65rem;
  border-radius: 10%;
  text-decoration: none;
}
.logo{
  height: 100px;
  width: 100px;
}
</style>
