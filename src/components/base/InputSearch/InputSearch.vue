<template>
  <div class="input-search">
    <input
      type="text"
      name="queryString"
      autocomplete="off"
      placeholder="Looking for something?"
      class="input-search__input"
    >
    <img
      class="input-search__icon"
      src="assets/svg/icons/search-black.svg"
    >
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
@import '~styles/functions/px-to-rem';
@import '~styles/mixins';
.input-search {
  position: relative;
  width: 100%;

  @include element(input) {
    align-items: center;
    background-color: #fff;
    border-radius: px-to-rem(4);
    border: 1px solid rgba(24, 25, 32, .1);
    display: flex;
    height: px-to-rem(40);
    outline: none !important;
    padding: 9px 50px 9px 14px;
    transition: all .1s ease-in-out;
    width: 100%;
  }

  @include element(icon) {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    @include size(px-to-rem(24));
    margin: 7px 9px 9px;
    justify-content: center;
    align-items: center;
    opacity: .3;
    color: #181920;
    font-size: 24px;
    line-height: 24px;
  }

}

</style>
