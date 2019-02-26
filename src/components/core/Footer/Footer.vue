<template>
  <footer class="footer">
    <div class="container p-0">
      <FooterTop />
      <FooterBottom />
    </div>
  </footer>
</template>

<script>
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';

export default {
  components: {
    FooterTop,
    FooterBottom,
  },
};
</script>


<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';
  
  .footer {
    background: var(--white);
    padding: px-to-rem(30) 0;
  }
</style>
