<template>
  <img
    class="icon"
    :src="getImg(src)"
    :style="{
      height: height,
      width: width,
    }"
    :alt="name"
  >
</template>

<script>
export default {
  name: 'Icon2',
  props: {
    name: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      default: '',
    },
    height: {
      type: [String, Number],
      default: '100%',
    },
    width: {
      type: [String, Number],
      default: '100%',
    },
  },
  created() {
    // es-lint-disable-next-line no-console
    console.log(' * Icon2 created src: ', this.src);
  },
  methods: {
    getImg(path) {
      // eslint-disable-next-line global-require, import/no-dynamic-require
      return require(path);
    },
  },
};
</script>
<style lang="scss">
  .icon {
    cursor: pointer;
    height: 1.5rem;
    width: 1.5rem;
  }
</style>
