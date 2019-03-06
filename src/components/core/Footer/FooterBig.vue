<template>
  <footer class="footer-big">
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
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';
  @import '~styles/variables';

  .footer-big {
    background: var(--white);
    border-top: 1px solid rgba(0,0,0,.1);
    display: none;
    padding-bottom: px-to-rem(20);
    padding-top: px-to-rem(40);

    @include media($md) {
      display: block;
    }
  }

</style>
