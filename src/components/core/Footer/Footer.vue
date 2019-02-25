<template>
  <footer class="footer">
    <div class="container">
      <FooterTop />
    </div>
  </footer>
</template>

<script>
import FooterTop from './FooterTop';

export default {
  components: {
    FooterTop,
  },
};
</script>


<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';
  
  .footer {
    background: var(--white);
    padding-top: px-to-rem(30);
  }
</style>
