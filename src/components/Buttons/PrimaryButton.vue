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
    buttonClick() {
      console.log('button-clicked');
    },
  },

});
</script>

<style scoped lang="scss">
    .PrimaryButton{
        background: #D7B154;
        // padding: 16px 32px;
        padding: clamp(7px, 3vw, 16px) clamp(10px, 3vw, 32px);
        border: none;
        cursor: pointer;
        border-radius: 100px;
        transition: all ease 0.3s;

        span{
            color: white;
            font-size: 14px;
            color: #FFF;
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
    .PrimaryButton:hover{
        background-color: black;
        transition: all ease 0.3s;

    }

</style>
