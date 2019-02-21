import api from 'api';
import * as types from './actionTypes';

export default {
  fetchProducts({ commit }) {
    api.get('/products')
      .then((response) => {
        commit(types.SET_PRODUCTS, response.data);
      });
  },
};
