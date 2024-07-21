<!-- <template>
    <component :is="svg" v-bind="svgProps" v-if="svg" />
  </template>
<script>
import { defineComponent, computed } from 'vue';
import SvgIconLibrary from './SvgIconLibrary.vue';

export default defineComponent({
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 24,
    },
    width: {
      type: Number,
      default: null,
    },
  },
  setup(props) {
    const svgProps = computed(() => ({
      width: props.width || props.size,
      height: props.size,
    }));

    const svg = computed(() => {
      const svgId = `#${props.name}`;
      const svgElement = SvgIconLibrary.template.querySelector(svgId);
      return svgElement ? svgElement.outerHTML : null;
    });

    return {
      svg,
      svgProps,
    };
  },
});
</script> -->

<template>
    <!-- <div v-html="svg" v-bind="svgProps" v-if="svg"></div> -->
    <!-- <svg :width="svgProps.width" :height="svgProps.height" v-html="svg"></svg> -->
    <svg
      class="svg-icon"
      :width="svgProps.width"
      :height="svgProps.width"
      :fill="svgProps.fill"
      :stroke="svgProps.stroke"
      :stroke-width="svgProps.strokeWidth"
    >
        <use :xlink:href="`#${svgProps.name}`"></use>
    </svg>
</template>

<script >
import { defineComponent, computed } from 'vue';
// import SvgIconLibrary from '../SvgIconLibrary';
import LibraryQ from './LibraryQ.vue';

export default defineComponent({
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
    //   type: Number,
    //   default: 24,
      type: String,
      default: 'medium',
    },
    width: {
      type: Number,
      default: null,
    },
    stroke: {
      type: String,
      default: '#FFF',
    },
    fill: {
      type: String,
      default: '#FFF',
    },
    strokeWidth: {
      type: String,
    },
  },
  setup(props) {
    const sizeMapping = {
      micro: 16,
      small: 24,
      medium: 32,
      large: 48,
    };
    const interpretedSize = computed(() => {
      if (typeof props.size === 'string') {
        return sizeMapping[props.size] || 24;
      }
      return props.size;
    });
    const svgProps = computed(() => ({
      name: props.name,
      width: props.width || interpretedSize.value,
      height: interpretedSize.value,
      fill: props.fill,
      stroke: props.stroke,
      strokeWidth: +props.strokeWidth,
    }));
    const svg = computed(() => LibraryQ[props.name] || null);

    return {
      svg,
      svgProps,
    };
  },
});
</script>

  <style scoped>
  /* Add any necessary styles */
  </style>
