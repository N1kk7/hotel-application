<template>
    <button class="AdditionalButton3" @click="buttonClick">
        <span>
            {{ buttonText }}
        </span>
        <SvgIcon name="showAround" size="small"/>

    </button>
</template>

<script>
import { defineComponent } from 'vue';
import SvgIcon from '../SvgIcon.vue';

export default defineComponent({
  name: 'AdditionalButton3',
  props: {
    buttonText: {
      type: String,
      required: true,
    },

  },
  components: {
    SvgIcon,

  },
  methods: {
    buttonClick() {
      console.log('button-clicked');
    },
  },

});
</script>

<style scoped lang="scss">
    .AdditionalButton3{
        padding: 16px 32px;
        border: none;
        cursor: pointer;
        transition: all ease 0.3s;
        border-radius: 100px;
        border: 1.5px solid #D7B154;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        span{
            color: #D7B154;

            // font-family: "HvDTrial Brandon Text";
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 150%; /* 24px */
            text-transform: uppercase;

        }
        svg{
            stroke: #D7B154;
        }
    };
    .AdditionalButton3:hover{
        border: 1px solid #171717;
        background: #D7B154;
        transition: all ease 0.3s;
        border: 1.5px solid transparent;

        span{
            color: #FFF;
        }
        svg{
            stroke: white;

        }

    }

</style>
