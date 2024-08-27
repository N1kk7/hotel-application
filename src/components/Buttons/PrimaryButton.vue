<template>
    <button class="PrimaryButton" @click="buttonClick">
        <span>
            {{ buttonText }}
        </span>
    </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PrimaryButton',
  props: {
    buttonText: {
      type: String,
      required: true,
    },

  },
  components: {

  },
  methods: {
    // buttonClick() {
    //   console.log('button-clicked');
    // },
  },

});
</script>

<style scoped lang="scss">
    @import '@/style/mixins.scss';
    .PrimaryButton{
        background: #D7B154;
        padding: clamp(7px, 2vw, 16px) clamp(10px, 2vw, 32px);
        border: none;
        cursor: pointer;
        border-radius: 100px;
        transition: all ease 0.3s;
        span{
            @include text(var(--color-white), clamp(10px, 3vw, 16px), uppercase, 500);
            white-space: nowrap

        }
        @media (min-width: 1024px) {
          &:hover{
            background-color: black;
            transition: all ease 0.3s;
          }
        }
    };

</style>
