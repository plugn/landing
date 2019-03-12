import has from 'lodash.has';

import tFrom from '@/utils/tFrom';

import {
  // Navigation Elements
  NAVIGATION_ELEMENTS_REQUEST,
  NAVIGATION_ELEMENTS_SUCCESS,
  NAVIGATION_ELEMENTS_FAILURE,
  //
  LANDING_GOODS_REQUEST,
  LANDING_GOODS_SUCCESS,
  LANDING_GOODS_FAILURE,
  // Main banner
  MAIN_BANNER_REQUEST,
  MAIN_BANNER_SUCCESS,
  MAIN_BANNER_FAILURE,
  // Kits banner
  GOODS_BANNER_REQUEST,
  GOODS_BANNER_SUCCESS,
  GOODS_BANNER_FAILURE,
} from './actionTypes';

export default {
  // Navigation Elements
  [NAVIGATION_ELEMENTS_REQUEST](state) {
    state.navigationElements.isLoaded = false;
  },
  [NAVIGATION_ELEMENTS_SUCCESS](state, navigationElements) {
    state.navigationElements = {
      ...state.navigationElements,
      navigationElements,
      isLoaded: true,
      error: null,
    };
  },
  [NAVIGATION_ELEMENTS_FAILURE](state, err) {
    state.navigationElements.isLoaded = false;
    state.navigationElements.error = err;
  },
  // Kits
  [LANDING_GOODS_REQUEST](state, name) {
    if (!has(state.sections, name)) {
      state.isLoaded = false;
    }
  },
  [LANDING_GOODS_SUCCESS](state, { kit, name, loadMore }) {
    if (loadMore) {
      state.sections[name].good_list = [
        ...state.sections[name].good_list,
        ...kit.good_list,
      ];
      return;
    }
    state.sections = {
      ...state.sections,
      [name]: tFrom(['title'], kit),
    };

    state.isLoaded = true;
  },
  [LANDING_GOODS_FAILURE](state, err) {
    state.isLoaded = false;
    state.error = err;
  },
  // Landing
  [MAIN_BANNER_REQUEST](state) {
    state.mainBanner.isLoaded = false;
  },
  [MAIN_BANNER_SUCCESS](state, mainBanner) {
    state.mainBanner = {
      ...state.mainBanner,
      ...tFrom(['title', 'text'], mainBanner),
      isLoaded: true,
      error: null,
    };
  },
  [MAIN_BANNER_FAILURE](state, err) {
    state.mainBanner.isLoaded = false;
    state.mainBanner.error = err;
  },
  // KitsBanner
  [GOODS_BANNER_REQUEST](state) {
    state.isLoaded = false;
  },
  [GOODS_BANNER_SUCCESS](state, { banners, name }) {
    // eslint-disable-next-line no-param-reassign
    if (!has(state.banners, name)) {
      state.banners = {
        ...state.banners,
        [name]: banners,
        isLoaded: true,
        error: null,
      };
    }
  },
  [GOODS_BANNER_FAILURE](state, err) {
    state.banners.isLoaded = false;
    state.banners.error = err.toString();
  },
};
