<template>
  <footer class="footer">
    <div class="container p-0">
      <div class="footer__wrapper">
        <div class="footer__left">
          <router-link
            class="footer__logo"
            to="/"
          >
            <img
              height="30"
              src="assets/svg/icons/alabom-logo-beta.svg"
            >
          </router-link>
          <a
            target="_blank"
            href="/documents/alabom-terms.pdf"
            class="footer__link"
          >
            Terms of Use
          </a>
          <a
            href="/help/" 
            class="footer__link"
          >
            FAQ
          </a>
        </div>
        <div class="footer__rigth">
          <a
            target="_blank"
            href="https://vk.com/alabom.official"
            class="footer__link m-0"
          >
            <img
              height="30"
              class="logo__img"
              src="assets/svg/icons/vk-black.svg"
            >
          </a>
        </div>
      </div>
      <div class="footer__divider" />
      <p class="footer__copyright m-0">
        © {{ new Date().getFullYear() }} Alabom Shop Limited - Маркетплейс товаров из Китая и не только    All rights   reserved info@alabom.com
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';

  .footer {
    background: var(--white);
    border-top: 1px solid rgba(0,0,0,.1);
    padding-bottom: px-to-rem(20);
    padding-top: px-to-rem(40);

    @include element(logo) {
      margin-right: px-to-rem(30);
    }

    @include element(wrapper) {
      @include flex($justify-content: space-between);
    }

    @include element(left) {
      align-items: center;
      @include flex($justify-content: flex-start);
    }

    @include element(right) {

    }

    @include element(link) {
      color: var(--light-gray);
      cursor: pointer;
      display: inline-block;
      font-size: 14px;
      line-height: 30px;
      margin-right: px-to-rem(20);
      text-decoration: none !important;
      transition: all .1s ease;
      &:hover {
        color: var(--body-font);
      }
    }

    @include element(divider) {
      background-color: var(--body-font);
      height: 1px;
      margin: px-to-rem(20) 0;
      opacity: .1;
      width: 100%;
    }

    @include element(copyright) {
      color: var(--light-gray);
    }
  }
</style>
