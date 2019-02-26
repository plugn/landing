import * as types from './actionTypes';

export default {
  modal({ commit }, payload) {
    commit(types.MODAL, {
      payload,
    });
  },
  toggleModal({ commit }, active) {
    commit(types.TOGGLE_MODAL, active);
  },
};
