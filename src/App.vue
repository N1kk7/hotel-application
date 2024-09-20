<template>
  <HeaderC/>
  <PageTransition v-if="showTransition" :isFirstLoad="isFirstLoad"/>
  <RegistrationModal v-if="registerModal"/>
  <BookingModal v-if="bookingModal"/>
  <router-view/>
  <FooterC/>

  <LibraryQ/>
</template>

<script>
import { computed, defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import useModalStore from '@/store/useModalStore';
import FooterC from './components/FooterC.vue';
import HeaderC from './components/HeaderC.vue';
import LibraryQ from './components/LibraryQ.vue';
import PageTransition from './components/PageTransition.vue';
// Modals
import RegistrationModal from './components/Modals/RegistrationModal.vue';
import BookingModal from './components/Modals/BookingModal.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderC,
    LibraryQ,
    FooterC,
    PageTransition,
    RegistrationModal,
    BookingModal,
  },
  setup() {
    const showTransition = ref(false);
    const isFirstLoad = ref(true);
    const router = useRouter();
    const modalStore = useModalStore();

    const modalHandler = (modal, state) => {
      switch (modal) {
        case 'register':
          modalStore.registerModal = state;
          break;
        default:
      }
    };

    router.beforeEach((to, from, next) => {
      showTransition.value = true;
      setTimeout(() => {
        next();
      }, 900);
      if (!isFirstLoad.value) {
        isFirstLoad.value = true;
      }
      setTimeout(() => {
        showTransition.value = false;
      }, 3200);
    });

    // const registerModalState = computed(() => modalStore.registerModal);
    // const bookingModalState = computed(() => modalStore.bookingModal);
    // console.log('register', registerModalState);

    // console.log('booking', bookingModalState);

    return {
      showTransition,
      isFirstLoad,
      registerModal: computed(() => modalStore.registerModal),
      bookingModal: computed(() => modalStore.bookingModal),
      modalHandler,
      // registerModalState,
      // bookingModalState,

    };
  },
});
</script>

<style lang="scss">
@import url('./style/main.scss');
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #F7F3EC;
  min-height: 100%;
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
