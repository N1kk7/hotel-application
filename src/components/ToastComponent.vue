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
    isVisible: Boolean,
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
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
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
