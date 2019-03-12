import { api } from '@/api';
import * as types from './actionTypes';

export default {
  async fetchNavigationElements({ commit, getters }, {
    id,
    name,
  }) {
    commit(types.NAVIGATION_ELEMENTS_REQUEST);
    const mainBanner = getters.getNavigationElements(name);
    if (mainBanner) {
      commit(types.NAVIGATION_ELEMENTS_REQUEST, mainBanner);
    } else {
      try {
        const response = await api.get(
          `/goods/v1.0/landings/navigation-elem/?lang_id=${id}/`,
        );
        commit(types.NAVIGATION_ELEMENTS_REQUEST, response.data);
      } catch (err) {
        commit(types.NAVIGATION_ELEMENTS_REQUEST, err);
      }
    }
  },
  async fetchGoods({ commit/* getters */ }, {
    id,
    name,
    limit = 10,
    offset = 0,
    loadMore,
  }) {
    commit(types.LANDING_GOODS_REQUEST, name);
    // const section = getters.getSection(name);
    try {
      const response = await api.get(
        `/goods/v1.0/landings/kit/${id}/?goods_limit=${limit}&goods_offset=${offset}`,
      );
      commit(types.LANDING_GOODS_SUCCESS, {
        kit: response.data,
        name,
        loadMore,
      });
    } catch (err) {
      commit(types.LANDING_GOODS_FAILURE, err);
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
