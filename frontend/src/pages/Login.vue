<script setup>
import { useVuelidate } from '@vuelidate/core';
import { minLength, required } from '@vuelidate/validators';
import { computed, ref } from 'vue';
import { useUserStore } from '../stores/useUserStore';

const userStore = useUserStore();

const formData = ref({
  email: '',
  password: '',
});
const rules = computed(() => ({
  formData: {
    email: { required },
    password: { required, minLengthValue: minLength(3) },
  },
}));
const v$ = useVuelidate(rules, { formData });

async function onLogin() {
  const isValid = await v$.value.$validate();
  if (!isValid) {
    return;
  }
  else {
    await userStore.loginUser(formData.value);
    // console.log(formData.value.username)
    // localStorage.setItem('token', formData.value.accessToken);
  }
}
</script>

<template>
  <h2> Login Page</h2>
  <form class="login-container" @submit.prevent="onLogin">
    <label for="email">Email</label>
    <input v-model="v$.formData.email.$model" type="email">
    <div v-for="error of v$.formData.email.$errors" :key="error.$uid" class="input-errors">
      <div class="error-msg">
        {{ error.$message }}
      </div>
    </div>
    <label for="password">Password</label>
    <input v-model="v$.formData.password.$model" type="password">
    <div v-for="error of v$.formData.password.$errors" :key="error.$uid" class="input-errors">
      <div class="error-msg">
        {{ error.$message }}
      </div>
    </div>

    <button class="btn">
      Submit
    </button>
  </form>
</template>

<style scoped>
h2 {
  text-align: center;
  margin: 1.5rem;
}

.login-container {
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
