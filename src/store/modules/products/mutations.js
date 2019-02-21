import {
  SET_PRODUCT,
  SET_PRODUCTS,
} from './actionTypes';

export default {
  [SET_PRODUCT](state, product) {
    // eslint-disable-next-line no-param-reassign
    state.product = product;
  },
  [SET_PRODUCTS](state, products) {
    // eslint-disable-next-line no-param-reassign
    state.products = products;
  },
};
