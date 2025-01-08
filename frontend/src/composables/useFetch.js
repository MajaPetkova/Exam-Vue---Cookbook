import { onMounted, ref } from 'vue';

export function useFetch(apiUrl) {
  const data = ref(null);
  const isLoading = ref(false);
  const hasError = ref(false);

  const fetchRecipes = async () => {
    isLoading.value = true;
    try {
      const res = await fetch(apiUrl);
      data.value = await res.json();
      isLoading.value = false;
    }
    catch (err) {
      console.error('Error fetching products', err);
      hasError.value = true;
      return null;
    }
    finally {
      isLoading.value = false;
    }
  };
  onMounted(async () => await fetchRecipes());
  return { data, isLoading, hasError };
}
