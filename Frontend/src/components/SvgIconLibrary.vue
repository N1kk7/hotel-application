<!-- eslint-disable max-len -->
<!-- <template>
  <div></div>
</template>

<script>
export default {
  name: 'SvgIconLibrary',
  data() {
    return {
      svgs: {
        iconHome: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>`,
        iconUser: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 12c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4zm0-2c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
            </svg>`,
        iconSettings: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19.14 12.936l1.412-1.412-1.847-1.848c.121-.389.193-.798.193-1.226s-.072-.837-.193-1.225l1.848-1.849-1.413-1.412-1.847 1.848c-.388-.121-.797-.193-1.225-.193s-.837.072-1.226.193L12.936 2.86 11.524 4.272l1.848 1.847c-.121.389-.193.798-.193 1.226s.072.837.193 1.225l-1.848 1.848 1.413 1.412 1.847-1.848c.389.121.798.193 1.226.193s.837-.072 1.225-.193l1.848 1.848zm-7.14.564c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2z"/>
            </svg>`,
      },
    };
  },
  methods: {
    getSvg(iconName) {
      return this.svgs[iconName] || '';
    },
  },
};
</script>

<style></style> -->

<template>
  <div v-if="false">
    <!-- This div is hidden and is only here to hold the SVGs -->

            <svg xmlns="http://www.w3.org/2000/svg" id="home" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>`,

            <svg xmlns="http://www.w3.org/2000/svg" id="user" viewBox="0 0 24 24">
                <path d="M12 12c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4zm0-2c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
            </svg>`,

            <svg xmlns="http://www.w3.org/2000/svg" id="settings" viewBox="0 0 24 24">
                <path d="M19.14 12.936l1.412-1.412-1.847-1.848c.121-.389.193-.798.193-1.226s-.072-.837-.193-1.225l1.848-1.849-1.413-1.412-1.847 1.848c-.388-.121-.797-.193-1.225-.193s-.837.072-1.226.193L12.936 2.86 11.524 4.272l1.848 1.847c-.121.389-.193.798-.193 1.226s.072.837.193 1.225l-1.848 1.848 1.413 1.412 1.847-1.848c.389.121.798.193 1.226.193s.837-.072 1.225-.193l1.848 1.848zm-7.14.564c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2z"/>
            </svg>`,
  </div>
</template>
