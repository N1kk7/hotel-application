import { defineStore } from 'pinia';

const useModalStore = defineStore('modal', {
  state: () => ({
    registerModal: false,
    bookingModal: false,
  }),
  actions: {
    setRegisterModal(state) {
      this.registerModal = state;
      console.log(this.registerModal);
    },
    setBookingModal(state) {
      // console.log('booking from store');
      this.bookingModal = state;
      console.log(this.bookingModal);
    },
  },
});

export default useModalStore;
