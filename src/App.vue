<template>
<!-- <div>
  v-if="showTransition"

</div> -->
  <HeaderC/>
  <PageTransition v-if="showTransition" :isFirstLoad="isFirstLoad"/>
  <router-view/>
  <!-- <router-view v-slot="{ Component }">
    <component :is="Component" />
    <PageTransition />
  </router-view> -->

  <!-- <router-view>
      <p>Test Content</p>
    </router-view> -->
  <FooterC/>

  <LibraryQ/>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import FooterC from './components/FooterC.vue';
import HeaderC from './components/HeaderC.vue';
import LibraryQ from './components/LibraryQ.vue';
// import PageTransition from './components/PageTransition.vue';
import PageTransition from './components/PageTransition.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderC,
    LibraryQ,
    FooterC,
    PageTransition,
  },
  // data() {
  //   return {
  //     isFirstLoad: false,
  //   };
  // },
  setup() {
    const showTransition = ref(false);
    const isFirstLoad = ref(true);
    const router = useRouter();

    // router.beforeEach((to, from, next) => {
    //   showTransition.value = true;
    //   setTimeout(() => {
    //     next();
    //   }, 1000);

    //   setTimeout(() => {
    //     showTransition.value = false;
    //   }, 5000);
    // });

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

    return { showTransition, isFirstLoad };
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
