<template>
  <footer class="footer-big">
    <div class="container">
      <FooterTop />
      <FooterBottom />
    </div>
    <CopyRight />
  </footer>
</template>

<script>
import CopyRight from './CopyRight';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';

export default {
  name: 'FooterBig',
  components: {
    CopyRight,
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
    border-top: 1px solid rgba(0,0,0,.1);
    display: none;
    padding-top: px-to-rem(40);

    @include media($md) {
      display: block;
    }
  }

</style>
