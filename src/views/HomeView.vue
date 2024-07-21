<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <SvgIcon /> -->
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
// import SvgIcon from '@/components/SvgIcon.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    // SvgIcon,
  },
};
</script>
