import {
  SET_USER_PROFILE,
  SET_USER_CART,
} from './actionTypes';

export default {
  [SET_USER_PROFILE](state, payload) {
    state.userProfile = payload;
  },
  [SET_USER_CART](state, payload) {
    state.userCart = payload;
  },
};
