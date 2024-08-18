<template>
<!-- <div>
  v-if="showTransition"

</div> -->
  <HeaderC/>
  <PageTransition v-if="showTransition"/>
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
  setup() {
    const showTransition = ref(false);
    const router = useRouter();

    router.beforeEach((to, from, next) => {
      showTransition.value = true; // Показываем анимацию перехода
      setTimeout(() => {
        next(); // Переход к следующему маршруту
      }, 1000);

      setTimeout(() => {
        showTransition.value = false; // Скрываем анимацию после перехода
      }, 3500); // Устанавливаем длительность анимации
    });

    return { showTransition };
    // router.beforeEach((to, from, next) => {
    //   showTransition.value = true;
    //   next(); // Сразу переходим к следующему маршруту
    // });

    // const startTransition = () => {
    //   setTimeout(() => {
    //     showTransition.value = false;
    //   }, 3500); // Длительность анимации
    // };

    // return { showTransition, startTransition };
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
