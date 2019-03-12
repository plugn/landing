import { api } from '@/api';
import * as types from './actionTypes';

export default {
  async fetchNavigationElements({ commit, getters }, {
    landingId,
    name,
  }) {
    commit(types.NAVIGATION_ELEMENTS_REQUEST);
    const navigationElements = getters.getNavigationElements(name);
    if (navigationElements) {
      commit(types.NAVIGATION_ELEMENTS_REQUEST, navigationElements);
    } else {
      try {
        const response = await api.get(
          `/goods/v1.0/landings/navigation-elem/?lang_id=${landingId}/`,
        );
        commit(types.NAVIGATION_ELEMENTS_SUCCESS, response.data);
      } catch (err) {
        commit(types.NAVIGATION_ELEMENTS_FAILURE, err);
      }
    }
  },
  // goods kit
  async fetchGoodsKit({ commit/* getters */ }, {
    id,
    limit = 10,
    offset = 0,
    loadMore,
  }) {
    commit(types.GOODS_KIT_REQUEST, id);
    try {
      const response = await api.get(
        `/goods/v1.0/landings/kit/${id}/?goods_limit=${limit}&goods_offset=${offset}`,
      );
      commit(types.GOODS_KIT_SUCCESS, {
        kit: response.data,
        id,
        loadMore,
      });
    } catch (err) {
      commit(types.GOODS_KIT_FAILURE, err);
    }
  },
  async loadMoreGoodsKit({ commit/* getters */ }, {
    id,
    limit = 10,
    offset = 0,
  }) {
    commit(types.LOAD_MORE_GOODS_KIT_REQUEST);
    try {
      const response = await api.get(
        `/goods/v1.0/items/?goodskit_id=${id}&limit=${limit}&offset=${offset}`,
      );
      commit(types.LOAD_MORE_GOODS_KIT_SUCCESS, {
        id,
        goodsKit: response.data,
      });
    } catch (err) {
      commit(types.LOAD_MORE_GOODS_KIT_FAILURE, err);
    }
  },
  // landing page
  async fetchLandingPage({ commit, getters }, {
    id,
    name,
  }) {
    commit(types.LANDING_PAGE_REQUEST);
    const landingPage = getters.getLandingPage(name);
    if (landingPage) {
      commit(types.LANDING_PAGE_SUCCESS, landingPage);
    } else {
      try {
        const response = await api.get(`/goods/v1.0/landings/${id}/`);
        commit(types.LANDING_PAGE_SUCCESS, response.data);
      } catch (err) {
        commit(types.LANDING_PAGE_FAILURE, err);
      }
    }
  },
  async fetchGoodsBanner({ commit, getters }, {
    id,
    name,
  }) {
    commit(types.GOODS_BANNER_REQUEST);
    const banner = getters.getGoodsBanner(name);
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
