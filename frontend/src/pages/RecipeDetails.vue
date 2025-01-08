<script setup>
import { useRoute } from 'vue-router';
import Spinner from '../components/Spinner.vue';
import { useFetch } from '../composables/useFetch';

const route = useRoute();

const id = route.params.id;
const { data, isLoading, hasError } = useFetch(`http://localhost:3030/data/recipes/${id}`);
</script>

<template>
  <div class="recipe-container">
    <Spinner v-if="isLoading" />
    <p v-if="hasError">
      Something went wrong
    </p>
    <div class="recipes" v-else-if="data">
      <article class="card">
        <h2 class="title">{{ data.title }}</h2>
        <div class="card-container">
          <div>
            <img :src="data.img" alt="">
          </div>
          <div>
            <div class="items">
              <ul v-for="el in data.ingredients" :key="el" class="list">
                <li>{{ el }}</li>
              </ul>
            </div>
          </div>
        </div>
        <p>Prepare: {{ data.description }}</p>
        <p>Preparing Time: {{ data.prepTime }} min</p>
        <p>Cooking Time: {{ data.cookTime }} min</p>
        <div class="btns">

          <button class="btn-details"> Update</button>
          <button class="btn-details">Delete</button>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.recipe-container {
  margin: 1rem auto;
  width: 1040px;
  border: 1px solid #830c0b;
}

.card {
  width: 95%;
  margin: 1rem auto;
}

.card-container {
  display: flex;
}

.recipes {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1rem;
}

.title {
  text-align: center;
  margin-bottom: 1rem;
}

article {
  width: 450px;
}

h3,
h4 {
  text-align: center;
  color: #830c0b;
  font-weight: 400;
  margin-bottom: 0.5rem;
}

p {
  margin-top:1rem;
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
  grid-template-columns: 1fr 1fr;
  margin-top: 1rem;
  padding: 0.5rem;
}

li {
  font-size: 0.75rem;
}

.btn-details {
  margin: 1rem 6.3rem;
  padding: 0.3rem 1rem;
  width: 150px;
  background-color: #830c0b;
  border: none;
}
.btns{
  display: flex;
  align-items: center;
  justify-content: center;
  gap:0rem;
  margin-top: 1rem;
}
</style>
