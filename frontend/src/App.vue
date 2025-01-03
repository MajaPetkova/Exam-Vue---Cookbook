<script setup>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
</script>

<template>
  <AppHeader />
  <main>
    <router-view />
  </main>
  <AppFooter />
</template>
