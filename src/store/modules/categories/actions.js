import categories from '@/assets/json/categories.json';
import * as types from './actionTypes';

export default {
  fetchCategories({ commit }) {
    commit(types.SET_CATEGORIES, {
      categories,
    });
  },
};
