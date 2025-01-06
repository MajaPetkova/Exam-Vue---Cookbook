import { defineStore } from 'pinia';
import { ref } from 'vue';
import router from '../config/router';
import { accessUser, authenticateUser } from '../services/auth';

export const useUserStore = defineStore('userStore', () => {
  const user = ref(null);
  // const router = useRouter();

  async function registerUser(formData) {
    const profile = await authenticateUser(formData);

    if (!profile)
      return false;

    user.value = profile;
    localStorage.setItem('authToken', profile.data.accessToken);
    router.push('/home');
  }
  
  async function loginUser(formData) {
    const profile = await accessUser(formData);
    if (!profile)
      return false;
    user.value = profile;
    localStorage.setItem('authToken', profile.data.accessToken);
    router.push('/home');
    // console.log(profile.data.accessToken);
  }
  async function logout() {
    user.value = null;
    localStorage.removeItem ('authToken');
  }

  return {
    user,
    registerUser,
    loginUser,
    logout
  };
});
