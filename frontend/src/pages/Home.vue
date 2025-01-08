<script setup>
import { useRouter } from 'vue-router';
import { useFetch } from '../composables/useFetch';
import Spinner from '../components/Spinner.vue';
// import { useUserStore } from '../stores/useUserStore';
// const userStore = useUserStore();

const baseUrl = 'http://localhost:3030/data/recipes';
const { data, isLoading, hasError } = useFetch(baseUrl);

// const username = computed (() => userStore.user?.data?.username ?? '');
const router = useRouter();
// function singleProductHandler(id) {
//   router.push({ path: `/recipes/${id}` });
// }
</script>

<template>
  <div class="recipe-container">
    <Spinner v-if="isLoading"/>
    <p v-if="hasError">
      Something went wrong
    </p>
    <div class="recipes" v-if="data">
      <article v-for="recipe in data" :key="recipe.id">
        <h3>{{ recipe.title }}</h3>
        <img :src="recipe.img" alt="">
        <!-- <h4>Recipe by: {{ username }}</h4> -->
        <router-link :to="{ name: 'recipeDetails', params: { id: recipe._id } }">
           <button class="btn-details" @click="singleProductHandler(recipe._id)">See more</button>
         </router-link>
      </article>
    </div>
  </div>
</template>

<style scoped>
.recipe-container {
  margin: 1rem auto;
  max-width: 1540px;
}

.recipes {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1rem;
}

article {
  width: 450px;
}

h3, h4{
  text-align: center;
  color: #830c0b;
  font-weight: 400;
  margin-bottom: 0.5rem;
}
p {
  text-align: center;
  color: #830c0b;
  font-size: 0.9rem;
}

img {
  width: 400px;
  height: 350px;
}

.items {
  display: grid;
  grid-template-columns: 1fr 1fr ;
  margin-top: 1rem;
  padding: 0.5rem;
}

li {
  font-size: 0.75rem;
}
.btn-details{
margin: 1rem 6.3rem;
padding: 0.3rem 1rem;
width: 150px;
background-color: #830c0b;
border: none;
}
</style>
