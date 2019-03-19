/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import * as types from './actionTypes';
import xhr from '@/utils/xhr';
import { API_URL } from '@/constants';

export default {
  doLogout({ commit }) {
    xhr.post('/authorize/logout/')
      .then(response => commit(types.SET_USER_PROFILE, null))
      .then(response => commit(types.SET_USER_CART, null))
      .then(() => { localStorage.removeItem('LANDING_PROFILE'); })
      .catch((error) => {
        console.warn(' (!) A:profile/doLogout: ', error);
      });
  },
  getCart({ commit, getters }) {
    if (!getters.isLoggedIn) {
      return;
    }
    xhr.get(`${API_URL}/auth/v1.0/profile/cart/`, null, { authTokenCookieName: 'auth_token' })
      .then(response => commit(types.SET_USER_CART, response.data))
      .catch((error) => {
        console.warn(' (!) A:profile/getCart(): ', error);
      });
  },
};
