<script setup>
import { useFetch } from '../composables/useFetch';

const { data, isLoading, hasError } = useFetch('http://localhost:3030/data/recipes');
</script>

<template>
  <div class="recipe-container">
    <progress v-if="isLoading" />
    <p v-if="hasError">
      Something went wrong
    </p>
    <div class="recipes" v-if="data">
      <article v-for="recipe in data" :key="recipe.id">
        <h3>{{ recipe.title }}</h3>
        <img :src="recipe.img" alt="">
        <div class="items">
          <ul v-for="el in recipe.ingredients" :key="el" class="list">
            <li>{{ el }}</li>
          </ul>
        </div>
        <!-- <p>Prepare: {{ recipe.description }}</p> -->
        <p>Preparing Time: {{ recipe.prepTime }} min</p>
        <p>Cooking Time: {{ recipe.cookTime }} min</p>
        <button class="btn-details">See more</button>
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

h3{
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
