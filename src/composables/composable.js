// import { ref } from 'vue';

// export default function useToast() {
//   const toastMessage = ref('');
//   const toastType = ref('info');
//   const isToastVisible = ref(false);

//   const showToast = (message, type = 'info') => {
//     // Сначала скрываем тост (если он уже показывается)
//     isToastVisible.value = false;

//     // Используем небольшой таймер, чтобы сбросить состояние, и потом показать новый тост
//     setTimeout(() => {
//       toastMessage.value = message;
//       toastType.value = type;
//       isToastVisible.value = true;

//       setTimeout(() => {
//         isToastVisible.value = false;
//       }, 4000); // Показ тоста 4 секунды
//     }, 100); // Небольшая задержка перед повторным показом тоста
//   };

//   return {
//     toastMessage,
//     toastType,
//     isToastVisible,
//     showToast,
//   };
// }

// composables/useToast.js
import { ref } from 'vue';

export default function useToast() {
  const toastMessage = ref('');
  const toastType = ref('info');
  const isToastVisible = ref(false);
  let timeoutId;

  const showToast = (message, type = 'info') => {
    // Очищаем предыдущий таймер
    clearTimeout(timeoutId);

    // Обновляем сообщение и тип
    toastMessage.value = message;
    toastType.value = type;

    // Устанавливаем состояние видимости в true
    isToastVisible.value = true;

    // Устанавливаем таймер для автоматического скрытия тоста через 4 секунды
    timeoutId = setTimeout(() => {
      isToastVisible.value = false;
    }, 4000);
  };

  return {
    toastMessage,
    toastType,
    isToastVisible,
    showToast,
  };
}
