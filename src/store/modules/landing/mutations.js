import {
  SET_GOODS_BLOCK,
} from './actionTypes';

export default {
  [SET_GOODS_BLOCK](state, { sections, name }) {
    // eslint-disable-next-line no-param-reassign
    state.sections = {
      [name]: sections,
    };
  },
};
