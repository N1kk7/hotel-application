import { defineStore } from 'pinia';

const useModalStore = defineStore('modal', {
  state: () => ({
    registerModal: false,
  }),
  actions: {
    registerModal(state) {
      this.registerModal = state;
    },
  },
});

export default useModalStore;
