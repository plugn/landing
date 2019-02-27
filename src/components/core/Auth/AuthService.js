// import t from "../../../i18n";
import {
  login,
  signup,
  // eslint-disable-next-line no-unused-vars
  getProfile,
  resetPassword,
} from 'services/auth';

import {
  registerLoginMindbox,
  registerSignUpMindbox,
} from 'utils/analytics/mindbox';

import get from 'lodash.get';

import * as STATUS from './AuthConstants';

export function notifyMindbox(data, isNewAccount = false) {
  if (!get(data, 'user.id')) {
    return;
  }

  if (isNewAccount) {
    registerSignUpMindbox({
      id: data.user.id,
      email: data.user.email || '',
      firstName: data.user.first_name || '',
      lastName: data.user.last_name || '',
    });
  } else {
    registerLoginMindbox(data.user.id);
  }
}

export async function doSignup(email, password, name) {
  try {
    const data = await signup(email, password, name);
    // console.log('doSignup() -> data ', data);
    return data;
  } catch (error) {
    // console.log('doSignup() error', error);
    const errorMessage = get(error, 'response.data.error');

    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({ errorMessage, ...error });
  }
}

export function doLogin(email, password) {
  const loginScript = (resolve, reject) => {
    login(email, password)
      .then((res) => {
        // console.log('doLogin() -> login() ', res);

        if (res && res.data) {
          notifyMindbox(res.data, res.data.is_new);
        }

        if (res.data.is_new) {
          reject({
            errorMessage: STATUS.IS_NEW_LOGIN,
            data: res.data,
          });
          // localStorage.setItem('after_login_redirect', location.href);
        } else {
          resolve(res.data);
        }
      })
      .catch((error) => {
        reject(
          error.errorMessage
            ? error
            : {
              errorMessage: get(error, 'response.data.error'),
              data: error.response.data,
            },
        );
      });
  };

  return new Promise(loginScript);
}

export function doResetPassword(email) {
  return resetPassword(email);
}

export function doLoginVK(cart) {
  if (cart) {
    localStorage.setItem('savedCart', JSON.stringify(cart));
  }
  window.location.href = `/authorize/vk/?redirect_to=${encodeURI(
    window.location.href,
  )}`;
}