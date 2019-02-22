import chunks from 'lodash.chunk';
import {
  SET_CATEGORIES,
} from './actionTypes';

export default {
  [SET_CATEGORIES](state, { categories, chunksNum }) {
    // eslint-disable-next-line no-param-reassign
    state.categories = chunks(categories, chunksNum);
  },
};
