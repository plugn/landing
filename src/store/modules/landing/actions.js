import { api } from '@/api';
import * as types from './actionTypes';

export default {
  fetchGoods({ commit, getters }, {
    id,
    name,
  }) {
    commit(types.LANDING_GOODS_REQUEST);
    const section = getters.getSection(name);
    if (section) {
      commit(types.LANDING_GOODS_SUCCESS, {
        sections: section,
        name,
      });
    } else {
      api.get(`/goods/v1.0/landings/kit/${id}/`).then((response) => {
        commit(types.LANDING_GOODS_SUCCESS, {
          sections: response.data,
          name,
        });
      }).catch(err => (
        commit(types.LANDING_GOODS_FAILURE, err)
      ));
    }
  },
};
