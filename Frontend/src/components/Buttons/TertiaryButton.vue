<template>
    <button
      class="TertiaryButton"
      :style="{ background: bgColor}"
      @click="buttonClick">
        <span :style="{
          color: textColor

          }"
          >
            {{ buttonText }}
        </span>
    </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TertiaryButton',
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    textColor: {
      type: String,
      default: '#171717',
    },
    bgColor: {
      type: String,
      default: 'transparent',

    },
    hoverBg: {
      type: String,
    },
    hoverColor: {
      type: String,
      default: 'red',

    },
  },
  // setup(props) {
  //   const buttonProps = computed(() => {
  //   })
  // },
  components: {

  },
  methods: {
    buttonClick() {
      console.log('button-clicked');
    },
  },
  // mounted() {
  //   console.log(this.bgColor);
  // },

});
</script>

<style scoped lang="scss">
    .TertiaryButton{
        padding: 16px 32px;
        border: none;
        cursor: pointer;
        transition: all ease 0.3s;
        border: 1px solid rgba(23, 23, 23, 0.20);
        // background: transparent;

        span{
            // color: #171717;
            font-size: 14px;
            text-align: right;
            // font-family: "HvDTrial Brandon Text";
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 150%; /* 24px */
            text-transform: uppercase;
            white-space: nowrap

        }
    };
    .TertiaryButton:hover{
        border: 1px solid #171717;
        transition: all ease 0.3s;

    }

</style>
