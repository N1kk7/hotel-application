import { defineStore } from 'pinia';

const useModalStore = defineStore('modal', {
  state: () => ({
    registerModal: false,
  }),
  actions: {
    registerModal(func) {
      this.registerModal = func;
    },
  },
});

export default useModalStore;
