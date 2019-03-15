import has from 'lodash.has';
import findIndex from 'lodash.findindex';

import tFrom from '@/utils/tFrom';
import translateList from '@/utils/translateList';

import {
  // Navigation Elements
  NAVIGATION_ELEMENTS_REQUEST,
  NAVIGATION_ELEMENTS_SUCCESS,
  NAVIGATION_ELEMENTS_FAILURE,
  //
  GOODS_KIT_REQUEST,
  GOODS_KIT_SUCCESS,
  GOODS_KIT_FAILURE,
  LOAD_MORE_GOODS_KIT_REQUEST,
  LOAD_MORE_GOODS_KIT_SUCCESS,
  LOAD_MORE_GOODS_KIT_FAILURE,
  ADD_KIT_ID,
  // Landing page
  LANDING_PAGE_REQUEST,
  LANDING_PAGE_SUCCESS,
  LANDING_PAGE_FAILURE,
  // Kits banner
  KITS_BANNERS_REQUEST,
  KITS_BANNERS_SUCCESS,
  KITS_BANNERS_FAILURE,
} from './actionTypes';

export default {
  // Navigation Elements
  [NAVIGATION_ELEMENTS_REQUEST](state) {
    state.navigationElements.isLoaded = false;
  },
  [NAVIGATION_ELEMENTS_SUCCESS](state, navigationElements) {
    state.navigationElements = {
      ...state.navigationElements,
      navigationElementsList: translateList(['title'], navigationElements),
      isLoaded: true,
      error: null,
    };
  },
  [NAVIGATION_ELEMENTS_FAILURE](state, err) {
    state.navigationElements.isLoaded = false;
    state.navigationElements.error = err;
  },
  // Kits
  [GOODS_KIT_REQUEST](state, id) {
    if (!has(state.kits, id)) {
      state.kits.isLoaded = false;
    }
  },
  [GOODS_KIT_SUCCESS](state, { kits }) {
    const goodsKit = translateList(['title'], kits);
    state.kits.goodsKit = goodsKit;
    state.kits.isLoaded = true;
  },
  [GOODS_KIT_FAILURE](state, err) {
    state.kits.isLoaded = false;
    state.kits.error = err;
  },
  [ADD_KIT_ID](state, kitId) {
    state.kitsId = {
      ...state.kitsId,
      [kitId]: false,
    };
  },
  [LOAD_MORE_GOODS_KIT_REQUEST](state, kitId) {
    state.kitsId = {
      ...state.kitsId,
      [kitId]: true,
    };
  },
  [LOAD_MORE_GOODS_KIT_SUCCESS](state, { id, goodsKit }) {
    const index = findIndex(state.kits.goodsKit, k => k.id === id);
    const kit = state.kits.goodsKit[index];
    if (goodsKit.items.length) {
      kit.good_list = [
        ...kit.good_list,
        ...goodsKit.items,
      ];
      state.kitsId = {
        ...state.kitsId,
        [id]: false,
      };
    }
  },
  [LOAD_MORE_GOODS_KIT_FAILURE](/* state, err */) {
    // state.isLoaded = false;
    // state.error = err;
  },
  // Landing
  [LANDING_PAGE_REQUEST](state) {
    state.landingPage.isLoaded = false;
  },
  [LANDING_PAGE_SUCCESS](state, landingPage) {
    state.landingPage = {
      ...state.landingPage,
      ...tFrom(['title', 'text'], landingPage),
      isLoaded: true,
      error: null,
    };
  },
  [LANDING_PAGE_FAILURE](state, err) {
    state.landingPage.isLoaded = false;
    state.landingPage.error = err;
  },
  // KitsBanner
  [KITS_BANNERS_REQUEST](state) {
    state.kitBanners.isLoaded = false;
  },
  [KITS_BANNERS_SUCCESS](state, { banners }) {
    state.kitBanners = {
      banners,
      isLoaded: true,
      error: null,
    };
  },
  [KITS_BANNERS_FAILURE](state, err) {
    state.kitBanners.isLoaded = false;
    state.kitBanners.error = err.toString();
  },
};
