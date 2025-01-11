<script setup>
import { useVuelidate } from '@vuelidate/core';
import { minLength, minValue, required } from '@vuelidate/validators';
import axios from 'axios';
import { computed, ref } from 'vue';
import router from '../config/router';

const formData = ref({
  title: '',
  ingredients: [],
  description: '',
  prepTime: 0,
  cookTime: 0,
  difficulty: '',
  img: '',
});
function createHandler() {
  try {
    const res = axios.post ('http://localhost:3030/data/recipes', formData.value);
    if (res) {
      router.push('/home');
    }
  }
  catch (err) {
    console.error(err);
  }
}

const rules = computed(() => ({
  formData: {
    title: { required, minLengthValue: minLength(4) },
    ingredients: { required },
    description: { required, minLengthValue: minLength(10) },
    prepTime: { required, minValueValue: minValue(5) },
    cookTime: { required, minValueValue: minValue(5) },
    difficulty: { required },
    img: { required },
  },
}));
const v$ = useVuelidate(rules, { formData });
</script>

<template>
  <h2>Create Recipe</h2>
  <form class="register-container" @submit.prevent="createHandler">
    <label for="title">Title</label>
    <input id="title" v-model="formData.title" type="text" @blur="v$.formData.title.$touch">
    <div v-for="error of v$.formData.title.$errors" :key="error.$uid" class="input-errors">
      <div class="error-msg">
        {{ error.$message }}
      </div>
    </div>
    <label for="ingredients">Ingredients</label>
    <input id="ingredients" v-model="v$.formData.ingredients.$model" type="text">
    <div v-for="error of v$.formData.ingredients.$errors" :key="error.$uid" class="input-errors">
      <div class="error-msg">
        {{ error.$message }}
      </div>
    </div>
    <label for="desc">Description</label>
    <input id="desc" v-model="v$.formData.description.$model" type="text">
    <div v-for="error of v$.formData.description.$errors" :key="error.$uid" class="input-errors">
      <div class="error-msg">
        {{ error.$message }}
      </div>
    </div>
    <label for="prepTime">Prepare Time</label>
    <input id="prepTime" v-model="v$.formData.prepTime.$model" type="number">
    <div v-for="error of v$.formData.prepTime.$errors" :key="error.$uid" class="input-errors">
      <div class="error-msg">
        {{ error.$message }}
      </div>
    </div>
    <label for="cookTime">Cook Time</label>
    <input id="cookTime" v-model="v$.formData.cookTime.$model" type="number">
    <div v-for="error of v$.formData.cookTime.$errors" :key="error.$uid" class="input-errors">
      <div class="error-msg">
        {{ error.$message }}
      </div>
    </div>
    <select for="desc" v-model="v$.formData.difficulty.$model">Difficulty
      <option disabled value="">
        Please select one
      </option>
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </select>
    <div v-for="error of v$.formData.difficulty.$errors" :key="error.$uid" class="input-errors">
      <div class="error-msg">
        {{ error.$message }}
      </div>
    </div>
    <label for="img">Image</label>
    <input id="img" v-model="v$.formData.img.$model" type="text">
    <div v-for="error of v$.formData.img.$errors" :key="error.$uid" class="input-errors">
      <div class="error-msg">
        {{ error.$message }}
      </div>
    </div>
    <button class="btn">Submit</button>
  </form>
</template>

<style scoped>
h2 {
  text-align: center;
  margin: 1.5rem;
}

.register-container {
  padding: 1rem;
  margin-bottom: 1.5rem;
  margin: 3rem auto;
  max-width: 640px;
  box-shadow: 4px -5px 24px -7px rgba(0, 0, 0, 0.75);
}

input {
  height: 2rem;
}

.btn {
  background-color: rgb(105, 9, 9);
  border: none;
}

.error-msg {
  color: red;
}
</style>
