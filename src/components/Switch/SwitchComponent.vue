<template>
    <div
    :class="{'Switch': true, 'SwitchActive': isSwitchActive}"
    @click="toggleSwitch"
    @keydown="none"
    >
        <div class="bounce"></div>
    </div>

</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SwitchComponent',
  data() {
    return {
      isSwitchActive: false,
    };
  },
  methods: {
    toggleSwitch() {
      this.isSwitchActive = !this.isSwitchActive;
    },
  },
});

</script>

<style scoped lang="scss">
    .Switch{
        width: 60px;
        height: 32px;
        position: relative;
        border-radius: 50px;
        border: 2px solid #BFBFBF;
        background: #F1F1F1;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        .bounce{
            width: 25px;
            height: 25px;
            background-color: #BFBFBF;
            transition: all ease 0.3s;
            position: absolute;
            border-radius: 50%;
            left: 3px;

        }
    }
    .SwitchActive{
        background: #F1E4C4;
        border: 2px solid #D7B154;
        .bounce{
            left: 32px;
            background: #D7B154;
            transition: all ease 0.3s;

        }
    }
</style>
