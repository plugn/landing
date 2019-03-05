<template>
  <footer>
    <div class="container">
      <FooterTop />
      <FooterBottom />
    </div>
  </footer>
</template>

<script>
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';

export default {
  name: 'FooterBig',
  components: {
    FooterTop,
    FooterBottom,
  },
};
</script>

<style lang="scss">

</style>
