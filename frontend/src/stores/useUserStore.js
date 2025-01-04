import { defineStore } from 'pinia';
import { ref } from 'vue';
// import { useRouter } from 'vue-router';
import { accessUser, authenticateUser } from '../services/auth';

export const useUserStore = defineStore('userStore', () => {
  const user = ref(null);
  // const router = useRouter();

  async function registerUser(formData) {
    const profile = await authenticateUser(formData);

    if (!profile)
      return false;

    user.value = profile;
    // router.push({ component: 'Home' });
  }

  async function loginUser(formData) {
    const profile = await accessUser(formData);
    if (!profile)
      return false;
    user.value = profile;
    // router.push({ path: '/' });
  }
  // async function logout(){
  //   // 
  // }

  return {
    user,
    registerUser,
    loginUser,
  };
});
