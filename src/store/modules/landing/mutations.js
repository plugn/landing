import {
  LANDING_GOODS_REQUEST,
  LANDING_GOODS_SUCCESS,
  LANDING_GOODS_FAILURE,
} from './actionTypes';

export default {
  [LANDING_GOODS_REQUEST](state) {
    state.isLoaded = false;
  },
  [LANDING_GOODS_SUCCESS](state, { sections, name }) {
    // eslint-disable-next-line no-param-reassign
    state.isLoaded = true;
    state.sections = {
      [name]: sections,
    };
  },
  [LANDING_GOODS_FAILURE](state, err) {
    state.isLoaded = false;
    state.error = err;
  },
};
