import {
  MODAL,
  TOGGLE_MODAL,
} from './actionTypes';

export default {
  [MODAL](state, payload) {
    // eslint-disable-next-line no-param-reassign
    state = { ...state, ...payload };
  },
  [TOGGLE_MODAL](state, active = undefined) {
    // eslint-disable-next-line no-param-reassign
    state.active = typeof active !== 'undefined' ? Boolean(active) : !state.active;
  },
};
