<script setup>
// import { useRouter } from 'vue-router';

import { computed, ref } from 'vue';
import { useUserStore } from '../stores/useUserStore';

const LINKS = [{
  label: 'Home',
  name: 'home',
}, {
  label: 'About',
  name: 'about',
}, {
  label: 'Create',
  name: 'create',
}, {
  label: 'Register',
  name: 'register',
}, {
  label: 'Login',
  name: 'login',
}];
const isActive = ref(false);
const userStore = useUserStore();
// console.log(userStore.user.data.username);
const username = computed (() => userStore.user?.data?.username ?? '');

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
        <!-- <p>{{ userName }}</p> -->
      </ul>
      <div class="user" v-if="username">
        <p>Hello, {{ username }}</p>
        <button class="btn" >Logout</button>
      </div>
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
.btn{
  background-color: #840e0b;
  padding: 0.4rem 0.75rem;
}
p{
  color: #830c0b;
}
.user{
  display: flex;
  align-items: center;
  gap:1rem
}
</style>
