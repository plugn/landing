import {
  SET_GOODS_BLOCK,
} from './actionTypes';

export default {
  [SET_GOODS_BLOCK](state, { products, name }) {
    // eslint-disable-next-line no-param-reassign
    state[name] = {
      goods: products.good_list,
      title: products.title,
    };
  },
};
