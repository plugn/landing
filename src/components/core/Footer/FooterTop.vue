<template>
  <div class="row">
    <div class="col footer-top__column">
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
          Alabom – это маркетплейс выгодных покупок. Экономьте, заказывая товары напрямую
          у производителей,а мы гарантируем качество и скорость доставки. Покупайте уверенно!
        </p>
      </div>
    </div>
    <div class="col footer-top__column">
      <h5 class="footer-top__title">
        <strong>
          Полезные ссылки
        </strong>
      </h5>
      <div class="footer-top__links">
        <div
          v-for="link in firstLinks"
          :key="link"
          class="footer-top__link"
        >
          {{ link }}
        </div>
      </div>
    </div>
    <div class="col footer-top__column">
      <h5 class="footer-top__title invisible">
        <strong>
          Полезные ссылки
        </strong>
      </h5>
      <div class="footer-top__links">
        <div
          v-for="link in secondLinks"
          :key="link"
          class="footer-top__link"
        >
          {{ link }}
        </div>
      </div>
    </div>
    <div class="col footer-top__column">
      <h5 class="footer-top__title">
        <strong>
          Контакты
        </strong>
      </h5>
      <div class="footer-top__social-links">
        <div
          v-for="social in socialLinks"
          :key="social.id"
          class="footer-top__social"
        >
          <img
            class="img-fluid"
            :src="social.icon"
          >
        </div>
      </div>
      <span class="footer-top__email">
        Общие вопросы:
      </span> info@alabom.com
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterTop',
  data() {
    return {
      firstLinks: [
        'FAQ',
        'Пользовательское соглашение',
        'Акции',
        'Доставка',
        'Отзывы',
      ],
      secondLinks: [
        'Политика конфиденциальности',
        'Журнал',
        'Скидки',
        'Гарантии',
        'ОтзСтать продавцом',
      ],
      socialLinks: [
        {
          id: 0,
          icon: 'assets/svg/brands/facebook.svg',
        },
        {
          id: 1,
          icon: 'assets/svg/brands/vk.svg',
        },
        {
          id: 2,
          icon: 'assets/svg/brands/youtube.svg',
        },
        {
          id: 3,
          icon: 'assets/svg/brands/instagram.svg',
        },
        {
          id: 4,
          icon: 'assets/svg/brands/ok.svg',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';
  @import '~styles/variables';

  .footer-top {
    @include element(column) {
      padding: 0 0.71429rem;
      width: 25%;
    }

    @include element(title) {
      margin-bottom: 2.5rem;
    }

    @include element(link) {
      line-height: 24px;
      text-decoration-line: underline;
    }

    @include element(logo) {
      display: inline-block;
      margin-bottom: px-to-rem(35);
      margin-left: -2rem;
    }

    @include element(description) {
      color: var(--light-gray);
      font-size: 12px;
    }

    @include element(social-links) {
      display: flex;
      justify-content: flex-start;
      margin-bottom: px-to-rem(25);
    }

    @include element(social) {
      align-items: center;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      margin-right: px-to-rem(12);
      @include size(px-to-rem(32));
    }

    @include element(email) {
      font-weight: 500;
    }
  }
</style>
