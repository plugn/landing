import categories from 'assets/json/categories.json';
import * as types from './actionTypes';

export default {
  fetchCategories({ commit }, chunksNum) {
    commit(types.SET_CATEGORIES, {
      categories,
      chunksNum,
    });
  },
};
