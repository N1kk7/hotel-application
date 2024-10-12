<!-- components/Toast.vue
<template>
    <div
      v-show="isVisible"
      class="toast"
      :class="toastType"
      @click="closeToast"
      @keydown="none"
    >
      <p>{{ toastMessage }}</p>
    </div>
  </template>

<script>
import { ref, onMounted } from 'vue';

export default {
  props: {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'info',
    },
  },
  setup(props) {
    const isVisible = ref(false);

    const showToast = () => {
      isVisible.value = true;
      setTimeout(() => {
        isVisible.value = false;
      }, 4000); // Показ тоста 4 секунды
    };

    const closeToast = () => {
      isVisible.value = false;
    };

    onMounted(() => {
      showToast();
    });

    // Переименовываем возвращаемые свойства, чтобы избежать дублирования ключей
    return {
      isVisible,
      closeToast,
      toastMessage: props.message, // Переименовываем message в toastMessage
      toastType: props.type, // Переименовываем type в toastType
    };
  },
};
</script> -->

<template>
  <div v-show="isVisible" :class="['toast', toastType]">
    {{ toastMessage }}
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    message: String,
    type: String,
    isVisible: Boolean, // Проп для видимости тоста
  },
  setup(props) {
    return {
      toastMessage: computed(() => props.message),
      toastType: computed(() => props.type),
    };
  },
};
</script>

<style scoped>
  .toast {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #323232;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    opacity: 0.9;
    cursor: pointer;
    transition: opacity 0.5s ease-out;
    z-index: 9999;
  }
  .toast.info {
    background-color: #2196f3;
  }
  .toast.success {
    background-color: #4caf50;
  }
  .toast.error {
    background-color: #f44336;
  }
  .toast.warning {
    background-color: #ff9800;
  }
  </style>
