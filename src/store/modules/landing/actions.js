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
  async fetchMainBanner({ commit, getters }, {
    id,
    name,
  }) {
    commit(types.MAIN_BANNER_REQUEST);
    const mainBanner = getters.getMainBanner(name);
    if (mainBanner) {
      commit(types.MAIN_BANNER_SUCCESS, mainBanner);
    } else {
      try {
        const response = await api.get(`/goods/v1.0/landings/${id}/`);
        commit(types.MAIN_BANNER_SUCCESS, response.data);
      } catch (err) {
        commit(types.MAIN_BANNER_FAILURE, err);
      }
    }
  },
  async fetchGoodsBanner({ commit, getters }, {
    id,
    name,
  }) {
    commit(types.GOODS_BANNER_REQUEST);
    const banner = getters.getMainBanner(name);
    if (banner) {
      commit(types.GOODS_BANNER_SUCCESS, banner);
    } else {
      try {
        const response = await api.get(`/goods/v1.0/landings/kit-banner/${id}/`);
        commit(types.GOODS_BANNER_SUCCESS, {
          banners: response.data,
          name,
        });
      } catch (err) {
        commit(types.GOODS_BANNER_FAILURE, err);
      }
    }
  },
};
