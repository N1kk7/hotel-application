<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul> -->
  </div>
  <!-- <div v-html="getSvgIcon('iconHome')"></div>
  <SvgIconLibrary ref="svgLibrary"></SvgIconLibrary> -->
  <SvgIcon name="tradmil" size="large"/>
  <div class="itemsWrapper">
    <LibraryQ/>
    <PrimaryButton buttonText="Check rates"/>
    <SecondaryButton buttonText="Check rates"/>
    <TertiaryButton buttonText="Details"/>
    <AdditionalBtn buttonText="Ololo"/>
    <Additional2 buttonText="3d tour"/>
    <Additional3 buttonText="3d tour"/>
    <Tabs tabText="view all"/>
    <HeaderC/>
    <SwitchComponent/>

  </div>
</template>

<script>
// import SvgIconLibrary from './SvgIconLibrary.vue';
import { defineComponent } from 'vue';
import SvgIcon from './SvgIcon.vue';
import LibraryQ from './LibraryQ.vue';
import PrimaryButton from './Buttons/PrimaryButton.vue';
import SecondaryButton from './Buttons/SecondaryButton.vue';
import TertiaryButton from './Buttons/TertiaryButton.vue';
import AdditionalBtn from './Buttons/AdditionalBtn.vue';
import Additional2 from './Buttons/Additional2.vue';
import Additional3 from './Buttons/Additional3.vue';
import Tabs from './Tabs/Tabs.vue';
import SwitchComponent from './Switch/SwitchComponent.vue';
import HeaderC from './HeaderC.vue';

// export default defineComponent({
//   name: 'HelloWorld',
//   components: {
//     SvgIcon,
//   },
//   // props: {
//   //   msg: String,
//   // },
//   // data() {
//   //   return {
//   //     msg: 'Welcome to Your Vue.js App',
//   //   };
//   // },
//   // mounted() {
//   //   // Access DOM elements here
//   //   const element = this.$el.querySelector('.hello h1');
// console.log(element); // Ensure the element is available before performing operations on it
//   //   if (element) {
//   //     element.style.color = 'blue';
//   //   }
//   // },
// });
export default defineComponent({
  name: 'HelloWorld',
  components: {
    SvgIcon,
    LibraryQ,
    PrimaryButton,
    SecondaryButton,
    TertiaryButton,
    AdditionalBtn,
    Additional2,
    Additional3,
    Tabs,
    SwitchComponent,
    HeaderC,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      svgLibrary: null,
    };
  },
  // mounted() {
  //   this.svgLibrary = this.$refs.svgLibrary;
  // },
  // methods: {
  //   getSvgIcon(iconName) {
  //     return this.svgLibrary ? this.svgLibrary.getSvg(iconName) : '';
  //   },
  // },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.itemsWrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

</style>
<!-- <template>
   <div v-html="svg" v-bind="svgProps" v-if="svg"></div>
  <svg class="svg-icon" :width="width" :height="size">
     <use :xlink:href="`#icon-bath`"></use>
  </svg>
</template> -->
