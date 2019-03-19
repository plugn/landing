import {
  SET_USER_PROFILE,
} from './actionTypes';

export default {
  // eslint-disable-next-line no-unused-vars
  [SET_USER_PROFILE](state, payload) {
    state.userProfile = payload;
  },
};
