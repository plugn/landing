/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import * as types from './actionTypes';
import xhr from '@/utils/xhr';
import { API_URL } from '@/constants';

const calcCartCounter = cartData => (cartData && Array.isArray(cartData.goods)
  ? cartData.goods.reduce((acc = 0, v) => acc + Number(v.count), 0) : 0);

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
      .then(response => commit(types.SET_USER_CART, calcCartCounter(response)))
      .catch((error) => {
        console.warn(' (!) A:profile/getCart(): ', error);
      });
  },
};
