/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import * as types from './actionTypes';
import xhr from '@/utils/xhr';

export default {
  login({ commit }) {},

  logout({ commit }) {
    xhr.post('/authorize/logout/')
      .then(response => commit(types.SET_USER_PROFILE, null))
      .catch((error) => {
        console.warn(' (!) profile/logout action: ', error);
      });
  },
};
