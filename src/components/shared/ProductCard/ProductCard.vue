<template>
  <div
    href="/en/goods/796ebb9c-058d-40a6-af27-9c41aba61c69/"
    class="product-card"
  >
    <div class="product-card__wrapper">
      <div class="product-card__cover">
        <div class="sale-sign-block">
          <div class="sale-corner-2" />
          <div class="sale-sign-bottom">
            <div class="sale-sign">
              <div>–25%</div>
            </div>
            <img
              src="assets/svg/sale-corner.svg"
              class="sale-corner"
            >
          </div>
        </div>
        <div class="img-container">
          <img
            srcset="https://good-s.alabom.com/goods_image/38/8c/cdc3a05515af48229ff153419f2b3b33_953956507_kd3raCE.image_216x216.jpg 2x, https://good-s.alabom.com/goods_image/38/8c/cdc3a05515af48229ff153419f2b3b33_953956507_kd3raCE.image_216x216_non_retina.jpg 1x"
            src="https://good-s.alabom.com/goods_image/38/8c/cdc3a05515af48229ff153419f2b3b33_953956507_kd3raCE.image_216x216.jpg"
            class="cover-img"
          >
        </div>
        <div class="cover-img-preloader preloader-goods" />
      </div>
      <div class="info-card">
        <div class="info-card-left">
          <div class="p p-price p-red">
            164 ₽
          </div>
          <div class="old-price">
            <div class="techtext techtext-oldprice">
              219 ₽
            </div>
            <div class="price-cross" />
          </div>
        </div>
        <div class="info-rating info-rating-right" />
      </div>
    </div>
    <div class="bottom-card">
      <div class="techtext techtext-black">
        Zircon bowknot earrings can female ins g...
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      default() {
        return {
          id: '0',
          name: 'default name',
          img: '',
          imgHovered: '',
        };
      },
    },
    hasHover: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      image: this.product.img,
    };
  },
  methods: {
    handleClick() {
      // const { id } = this.product;
      // this.$router.push(`/product/${id}`);
    },
  },
};
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';

  .product-card {
    background-color: transparent;
    border-radius: 5px;
    color: var(--body-font);
    cursor: pointer;
    display: block;
    flex-direction: column;
    flex: 1;
    justify-content: flex-start;
    margin-bottom: 10px;
    margin-top: -10px;
    padding: 10px;
    text-decoration: none;
    transition: all .15s ease-in-out;
    &:hover {
      background-color: var(--white);
      box-shadow: 0 4px 16px 0 rgba(24,25,32,.16);

      .sale-corner {
        transition: opacity .1s ease 0s;
        opacity: 0;
      }
      .sale-corner-2 {
        transition: opacity .1s ease 0s;
        opacity: 1;
      }
    }

    @include element(cover) {
      border-radius: 5px;
      margin-bottom: 10px;
      overflow: visible;
      position: relative;
    }
  }

  .sale-sign-block {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    margin-left: 5px;
    margin-top: -10px;
    position: absolute;
  }

  .sale-corner-2 {
    background-color: #e82b3b;
    height: 5px;
    left: 0;
    margin-left: 3px;
    margin-right: 2.5px;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: skew(-45deg, 0deg);
  }

  .sale-sign-bottom {
    align-items: flex-start;
    display: flex;
    margin-top: 5px;
  }

  .sale-sign {
    background-color: #f34;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    font-weight: 900;
    line-height: 24px;
    padding: 6px!important;
    text-align: center;
    z-index: 3;
  }

  .img-container {
    height: 0;
    padding-bottom: 100%;
    position: relative;
  }

  .cover-img {
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,.1);
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 2;
  }

  .cover-img-preloader {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -10px;
    margin-top: -10px;
    z-index: 1;
  }

  .info-card {
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .info-card-left {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;
    float: left;
  }

  .p.p-red {
    color: #f34;
  }

  .p.p-price {
    font-weight: 500;
    line-height: 20px;
    margin-right: 10px;
  }

  .old-price {
    align-items: center;
    display: flex;
    float: none;
    justify-content: center;
    position: relative;
  }

  .price-cross {
    background-color: #747579;
    border-radius: 5px;
    height: 1px;
    position: absolute;
    transform: rotate(-10deg);
    width: 100%;
  }

  .bottom-card {
    margin-top: 5px;
  }

  .techtext.techtext-black {
    color: #181920;
  }
</style>
