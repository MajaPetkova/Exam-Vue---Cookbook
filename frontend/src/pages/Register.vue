<script setup>
import { useVuelidate } from '@vuelidate/core';
import { minLength, required } from '@vuelidate/validators';
import { computed, ref } from 'vue';
import { useUserStore } from '../stores/useUserStore';

const userStore = useUserStore();

const formData = ref({
  username: 'maja',
  email: '',
  password: '',
});

const rules = computed(() => ({
  formData: {
    username: { required, minLengthValue: minLength(3) },
    email: { required },
    password: { required, minLengthValue: minLength(3) },
  },
}));
const v$ = useVuelidate(rules, { formData });

async function onRegister() {
  const isValid = await v$.value.$validate();
  if (!isValid) {
    return;
  }
  else {
    await userStore.registerUser(formData.value);
    // await userStore.loginUser(form.value);
  }
}
</script>

<template>
  <h2> Register Page</h2>
  <form class="register-container" @submit.prevent="onRegister">
    <label for="username">Username</label>
    <input id="username" v-model="formData.username" type="text" @blur="v$.formData.username.$touch">
    <div v-for="error of v$.formData.username.$errors" :key="error.$uid" class="input-errors">
      <div class="error-msg">
        {{ error.$message }}
      </div>
    </div>
    <label for="email">Email</label>
    <input id="email" v-model="v$.formData.email.$model" type="email">
    <div v-for="error of v$.formData.email.$errors" :key="error.$uid" class="input-errors">
      <div class="error-msg">
        {{ error.$message }}
      </div>
    </div>
    <label for="password">Password</label>
    <input id="password" v-model="v$.formData.password.$model" type="password">
    <div v-for="error of v$.formData.password.$errors" :key="error.$uid" class="input-errors">
      <div class="error-msg">
        {{ error.$message }}
      </div>
    </div>
    <!-- <div>
      <label for="repass">Repeat Password</label>
      <input id="repass" type="password">
    </div> -->
    <button class="btn">Submit</button>
  </form>
</template>

<style scoped>
h2{
    text-align: center;
    margin: 1.5rem;
}
.register-container{
    padding: 1rem;
    margin-bottom: 1.5rem;
    margin: 3rem auto;
    max-width: 640px;
    box-shadow: 4px -5px 24px -7px rgba(0,0,0,0.75);
}
input{
    height: 2rem;
}
.btn{
    background-color: rgb(105, 9, 9);
    border: none;
}
.error-msg{
color: red;
}
</style>
