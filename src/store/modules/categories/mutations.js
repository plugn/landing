import {
  SET_CATEGORIES,
} from './actionTypes';

export default {
  [SET_CATEGORIES](state, { categories }) {
    // eslint-disable-next-line no-param-reassign
    state.categories = categories;
  },
};
