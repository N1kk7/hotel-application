import { ref } from 'vue';

export default function useToast() {
  const toastMessage = ref('');
  const toastType = ref('info');
  const isToastVisible = ref(false);
  let timeoutId;

  const showToast = (message, type = 'info') => {
    clearTimeout(timeoutId);

    toastMessage.value = message;
    toastType.value = type;

    isToastVisible.value = true;

    timeoutId = setTimeout(() => {
      isToastVisible.value = false;
    }, 3000);
  };

  return {
    toastMessage,
    toastType,
    isToastVisible,
    showToast,
  };
}
