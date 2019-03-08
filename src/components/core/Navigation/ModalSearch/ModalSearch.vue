<i18n src="./modalSearch.i18n.json"></i18n>

<template>
  <div class="modal-search">
    <img
      class="modal-search__icon"
      src="/static/svg/icons/search-black.svg"
      @click="handleClick"
    >
    <Modal
      no-container
      :is-open="isOpened"
      @on-close="handleClick"
    >
      <div class="modal-search__container">
        <div
          class="modal-search__search-close"
          @click="handleClick"
        >
          <img
            style="margin-right: 10px;"
            src="/static/svg/icons/x-white.svg"
          >
          {{ $t('close') }}
        </div>
        <div class="modal-search__wrapper">
          <InputSearch />
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from 'components/shared/Modal';
import InputSearch from 'components/base/InputSearch';

export default {
  name: 'ModalSearch',
  components: {
    Modal,
    InputSearch,
  },
  data() {
    return {
      isOpened: false,
    };
  },
  methods: {
    handleClick() {
      this.isOpened = !this.isOpened;
    },
  },
};
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';
  @import '~styles/variables';

  .modal-search {
    display: flex;
    @include media($lg) {
      display: none;
    }

    @include element(container) {
      display: flex;
      flex-direction: column;
    }

    @include element(wrapper) {
      background: var(--white);
      margin-top: px-to-rem(56);
      padding: px-to-rem(16);
    }

    @include element(search-close) {
      display: flex;
      padding: 30px;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
    }

    @include element(icon) {
      opacity: .3;
      margin-right: 0.4rem;
      @include size(px-to-rem(24));
      width: px-to-rem(34);
    }
  }

</style>
