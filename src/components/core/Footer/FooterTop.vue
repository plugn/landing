<template>
  <div class="row">
    <div class="col-10 col-sm-10 col-md-4 col-lg-4 col-xl-4">
      <div>
        <router-link
          class="footer-top__logo"
          to="/"
        >
          <img
            height="30"
            class="logo__img"
            src="assets/svg/icons/alabom-logo-beta.svg"
          >
        </router-link>
        <p class="footer-top__description">
          Alabom – это маркетплейс выгодных покупок. Экономьте, заказывая товары напрямую у производителей, а мы гарантируем качество и скорость доставки. Покупайте уверенно! 
        </p>
      </div>
    </div>
    <div class="col-10 col-sm-10 col-md-4 col-lg-4 col-xl-4">

    </div>
    <div class="col-10 col-sm-10 col-md-4 col-lg-4 col-xl-4">

    </div>
    <div class="col-10 col-sm-10 col-md-4 col-lg-4 col-xl-4">

    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';

  .footer-top {
    @include element(logo) {
      display: inline-block;
      margin-bottom: px-to-rem(35);
      margin-left: -2rem;
    }

    @include element(description) {
      color: var(--light-gray);
      font-size: 12px;
    }
  }
</style>
