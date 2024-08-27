<template>
    <span
    :class="{'Tab': true, 'TabActive': isActive}"
    @click="tabClick"
    @keydown.enter="tabClick">
        {{ tabText }}
    </span>

</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AdditionalButton3',
  props: {
    tabText: {
      type: String,
      required: true,
    },

  },
  components: {

  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    tabClick() {
      this.isActive = !this.isActive;
      console.log('button-clicked');
    },
  },

});
</script>

<style scoped lang="scss">
    .Tab{
        color: rgba(23, 23, 23, 0.40);
        // font-family: "HvDTrial Brandon Text";
        background: #FFF;
        transition: all ease 0.3s;
        font-size: 14px;
        padding: 6px 16px;
        border-radius: 100px;
        cursor: pointer;
    }
    .Tab:hover{
        color: #D7B154;
        transition: all ease 0.3s;

    }
    .TabActive{
        color: #FFF;
        background: #D7B154;
        transition: all ease 0.3s;

        // font-family: "HvDTrial Brandon Text";

    }
    .TabActive:hover{
        background: #FFF;
        transition: all ease 0.3s;

    }

</style>
