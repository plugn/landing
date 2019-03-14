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
          `/goods/v1.0/landings/navigation-elem/?landing_id=${landingId}`,
        );
        commit(types.NAVIGATION_ELEMENTS_SUCCESS, response.data);
      } catch (err) {
        commit(types.NAVIGATION_ELEMENTS_FAILURE, err);
      }
    }
  },
  // goods kit
  async fetchGoodsKit({ commit/* getters */ }, {
    landingId,
  }) {
    commit(types.GOODS_KIT_REQUEST, landingId);
    try {
      const response = await api.get(
        `/goods/v1.0/landings/kit/?landing_id=${landingId}`,
      );
      commit(types.GOODS_KIT_SUCCESS, {
        kits: response.data,
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
  async fetchKitBanners({ commit }, {
    landingId,
  }) {
    try {
      const response = await api.get(
        `/goods/v1.0/landings/kit-banner/?landing_id=${landingId}`,
      );
      commit(types.KITS_BANNERS_SUCCESS, {
        banners: response.data,
      });
    } catch (err) {
      commit(types.KITS_BANNERS_FAILURE, err);
    }
  },
};
