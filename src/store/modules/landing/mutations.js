import has from 'lodash.has';

import {
  LANDING_GOODS_REQUEST,
  LANDING_GOODS_SUCCESS,
  LANDING_GOODS_FAILURE,
  // Main banner
  MAIN_BANNER_REQUEST,
  MAIN_BANNER_SUCCESS,
  MAIN_BANNER_FAILURE,
} from './actionTypes';

export default {
  [LANDING_GOODS_REQUEST](state) {
    state.isLoaded = false;
  },
  [LANDING_GOODS_SUCCESS](state, { sections, name }) {
    // eslint-disable-next-line no-param-reassign
    if (!has(state.sections, name)) {
      state.sections = {
        ...state.sections,
        [name]: sections,
      };
    }
    state.isLoaded = true;
  },
  [LANDING_GOODS_FAILURE](state, err) {
    state.isLoaded = false;
    state.error = err;
  },
  // Main banner
  [MAIN_BANNER_REQUEST](state) {
    state.mainBanner.isLoaded = false;
  },
  [MAIN_BANNER_SUCCESS](state, mainBanner) {
    state.mainBanner = {
      ...state.mainBanner,
      ...mainBanner,
      isLoaded: true,
      error: null,
    };
  },
  [MAIN_BANNER_FAILURE](state, err) {
    state.mainBanner.isLoaded = false;
    state.mainBanner.error = err;
  },
};
