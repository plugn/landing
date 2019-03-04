import { api } from '@/api';
import * as types from './actionTypes';

export default {
  fetchGoodsBlock({ commit }, {
    id,
    name,
  }) {
    api.get(`/goods/v1.0/landings/kit/${id}/`)
      .then((response) => {
        commit(types.SET_GOODS_BLOCK, {
          products: response.data,
          name,
        });
      });
  },
};
