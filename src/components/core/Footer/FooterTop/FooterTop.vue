<i18n src="./footerTop.i18n.json"></i18n>

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
            src="/static/svg/icons/alabom-logo-beta.svg"
          >
        </router-link>
        <p
          v-t="'description'"
          class="footer-top__description"
        />
      </div>
    </div>
    <div class="col footer-top__column">
      <h5 class="footer-top__title">
        <strong
          v-t="'usefulLinks'"
        />
      </h5>
      <div class="footer-top__links">
        <a
          v-for="link in firstLinks"
          :key="link.name"
          :href="link.href"
          v-t="link.name"
          target="_blank"
          class="footer-top__link"
        />
      </div>
    </div>
    <div class="col footer-top__column">
      <h5 class="footer-top__title invisible">
        <strong
          v-t="'usefulLinks'"
        />
      </h5>
      <div class="footer-top__links">
        <a
          v-for="link in secondLinks"
          :key="link.name"
          :href="link.href"
          v-t="link.name"
          target="_blank"
          class="footer-top__link"
        />
      </div>
    </div>
    <div class="col footer-top__column">
      <h5 class="footer-top__title">
        <strong
          v-t="'contacts'"
        />
      </h5>
      <div class="footer-top__social-links">
        <a
          v-for="social in socialLinks"
          :key="social.id"
          :href="social.href"
          target="_blank"
          class="footer-top__social"
        >
          <img
            class="img-fluid"
            :src="social.icon"
          >
        </a>
      </div>
      <span
        v-t="'generalQuestions'"
        class="footer-top__email"
      />
      <span> info@alabom.com </span>
    </div>
  </div>
</template>

<script>

import imgSrc from 'components/base/Icon/imgSrc';

export default {
  name: 'FooterTop',
  data() {
    return {
      firstLinks: [
        {
          name: 'faq',
          href: 'https://alabom.com/help/',
        },
        {
          name: 'termsOfUse',
          href: 'https://alabom.com/documents/alabom-terms.pdf ',
        },
        // {
        //   name: 'promotions',
        // },
        {
          name: 'delivery',
          href: 'https://alabom.com/help/',
        },
        // {
        //   name: 'reviews',
        // },
      ],
      secondLinks: [
        // {
        //   name: 'privacyPolicy',
        // },
        // {
        //   name: 'news',
        // },
        {
          name: 'discounts',
          href: 'https://alabom.com/categories/?has_active_discount=true&page=1',
        },
        // {
        //   name: 'guarantees',
        // },
        {
          name: 'becomeSeller',
          href: 'https://merchant.alabom.com',
        },
      ],
      socialLinks: [
        {
          id: 0,
          icon: '/static/svg/brands/fb.svg',
          href: 'https://www.facebook.com/alabom.official/',
        },
        {
          id: 1,
          icon: '/static/svg/brands/vk.svg',
          href: 'https://vk.com/alabom.official',
        },
        // {
        //   id: 2,
        //   icon: '/static/svg/brands/youtube.svg',
        // },
        {
          id: 3,
          icon: '/static/svg/brands/instagram.svg',
          href: 'https://www.instagram.com/alabom.official/',
        },
        {
          id: 4,
          icon: '/static/svg/brands/ok.svg',
          href: 'https://www.ok.ru/group/54217230647493 ',
        },
      ],
    };
  },
  methods: {
    imgSrc,
  },
};
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';
  @import '~styles/variables';

  .footer-top {
    @include element(column) {
      padding: 0 px-to-rem(10);
      width: 25%;
    }

    @include element(title) {
      font-size: 18px;
      margin-bottom: px-to-rem(25);
      margin-top: 0.8rem;
    }

    @include element(link) {
      color: var(--body-font);
      display: block;
      line-height: 24px;
      margin-bottom: px-to-rem(12);
      text-decoration-line: underline;
    }

    @include element(logo) {
      display: inline-block;
      margin-bottom: px-to-rem(25);
      margin-left: -2rem;
    }

    @include element(description) {
      color: var(--light-gray);
      font-size: 12px;
      line-height: 20px;
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
