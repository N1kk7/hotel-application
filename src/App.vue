<template>
    <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <BookingComponent/> -->

  <HeaderC/>
   <!-- <MainView/> -->
  <router-view/>

  <!-- <HelloWorld/> -->

  <FooterC/>

  <LibraryQ/>

  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
</template>

<script>
import { defineComponent } from 'vue';
// import BookingComponent from './components/BookingComponent.vue';
import FooterC from './components/FooterC.vue';
import HeaderC from './components/HeaderC.vue';
// import HelloWorld from './components/HelloWorld.vue';
import LibraryQ from './components/LibraryQ.vue';
// import MainView from './views/MainView.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderC,
    LibraryQ,
    // BookingComponent,
    FooterC,
    // MainView,
    // HelloWorld,
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
