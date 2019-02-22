import {
  SET_CATEGORY,
  SET_CATEGORIES,
} from './actionTypes';

export default {
  [SET_CATEGORY](state, product) {
    // eslint-disable-next-line no-param-reassign
    state.product = product;
  },
  [SET_CATEGORIES](state, products) {
    // eslint-disable-next-line no-param-reassign
    state.products = products;
  },
};
