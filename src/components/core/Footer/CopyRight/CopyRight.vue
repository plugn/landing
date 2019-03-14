<i18n src="./copyRight.i18n.json"></i18n>

<template>
  <div class="copyright">
    <div>
      © {{ year }} Alabom Shop Limited
    </div>
    <div v-t="'marketplaceGoodsFromChina'" />
  </div>
</template>

<script>
export default {
  name: 'CopyRight',
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>


<style lang="scss">
  @import '~styles/functions/px-to-rem';

  .copyright {
    align-items: center;
    background: var(--body-background);
    color: var(--black-06);
    display: flex;
    flex-direction: column;
    height: px-to-rem(60);
    justify-content: center;
    line-height: 20px;
    font-size: 12px;
    // padding-bottom: px-to-rem(20);
  }
</style>
