import { api } from '@/api';
import * as types from './actionTypes';

export default {
  fetchGoodsBlock({ commit, getters }, {
    id,
    name,
  }) {
    const section = getters.getSection(name);

    if (section) {
      commit(types.SET_GOODS_BLOCK, {
        sections: section,
        name,
      });
    } else {
      api.get(`/goods/v1.0/landings/kit/${id}/`).then((response) => {
        commit(types.SET_GOODS_BLOCK, {
          sections: response.data,
          name,
        });
      });
    }
  },
};
