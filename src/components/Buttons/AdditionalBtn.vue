<template>
    <button class="AdditionalButton" @click="buttonClick">
        <span>
            {{ buttonText }}
        </span>
        <div class="defaultArrow">
            <SvgIcon name="whiteArrow" size="small"/>

        </div>
        <div class="hoverArrow">
            <SvgIcon name="goldArrow" size="small"/>
        </div>

    </button>
</template>

<script>
import { defineComponent } from 'vue';
// import LibraryQVue from '../LibraryQ.vue';
import SvgIcon from '../SvgIcon.vue';
// import LibraryQ from '../LibraryQ.vue'

export default defineComponent({
  name: 'AdditionalButton',
  props: {
    buttonText: {
      type: String,
      required: true,
    },

  },
  components: {
    // LibraryQ,
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
    .AdditionalButton{
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
        .defaultArrow{
            display: none;
        }
        .hoverArrow{
            display: block;
        }
    };
    .AdditionalButton:hover{
        border: 1px solid #171717;
        background: #D7B154;
        transition: all ease 0.3s;
        border: 1.5px solid transparent;

        span{
            color: #FFF;
        }
        .defaultArrow{
            display: block;
        }
        .hoverArrow{
            display: none;
        }

    }

</style>
