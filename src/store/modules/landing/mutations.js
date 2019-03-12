import has from 'lodash.has';

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
  // Landing page
  LANDING_PAGE_REQUEST,
  LANDING_PAGE_SUCCESS,
  LANDING_PAGE_FAILURE,
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
  [GOODS_KIT_REQUEST](state, name) {
    if (!has(state.sections, name)) {
      state.isLoaded = false;
    }
  },
  [GOODS_KIT_SUCCESS](state, { kit, name, loadMore }) {
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
  [GOODS_KIT_FAILURE](state, err) {
    state.isLoaded = false;
    state.error = err;
  },
  [LOAD_MORE_GOODS_KIT_REQUEST](/* state, name */) {
    // if (!has(state.sections, name)) {
    //   state.isLoaded = false;
    // }
  },
  [LOAD_MORE_GOODS_KIT_SUCCESS]() {
    // if (loadMore) {
    //   state.sections[name].good_list = [
    //     ...state.sections[name].good_list,
    //     ...kit.good_list,
    //   ];
    //   return;
    // }
    // state.sections = {
    //   ...state.sections,
    //   [name]: tFrom(['title'], kit),
    // };

    // state.isLoaded = true;
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
  [GOODS_BANNER_REQUEST](state) {
    state.isLoaded = false;
  },
  [GOODS_BANNER_SUCCESS](state, { banners, name }) {
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
