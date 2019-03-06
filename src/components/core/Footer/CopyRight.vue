<template functional>
  <div class="copyright">
    <div>
      © {{ new Date().getFullYear() }} Alabom Shop Limited
    </div>
    <div>
      Маркетплейс товаров из Китая и не только
    </div>
  </div>
</template>

<style lang="scss">
  @import '~styles/functions/px-to-rem';

  .copyright {
    align-items: center;
    background: var(--body-background);
    color: var(--light-text);
    display: flex;
    flex-direction: column;
    height: px-to-rem(60);
    justify-content: center;
    line-height: 20px;
    font-size: 12px;
    // padding-bottom: px-to-rem(20);
  }
</style>
