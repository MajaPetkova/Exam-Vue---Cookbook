import { defineStore } from 'pinia';
import { ref } from 'vue';
import { authenticateUser } from '../services/auth';

export const useUserStore = defineStore('userStore', () => {
  const user = ref(null);

  async function registerUser(formData) {
    const profile = await authenticateUser(formData);

    if (!profile)
      return false;

    user.value = profile;
  }
  return {
    user,
    registerUser,
  };
});
