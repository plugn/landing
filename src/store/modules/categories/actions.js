import api from 'api';
import * as types from './actionTypes';

export default {
  fetchCategories({ commit }) {
    api.get('/assets/json/categories.json')
      .then((response) => {
        commit(types.SET_CATEGORIES, response.data);
      });
  },
};
