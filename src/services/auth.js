import { api } from '@/api';
import { baseUrl, getcookie } from '@/utils/helpers';
// import { FRONTSITE_URL } from '@/constants';

/**
 * Получает access token
 * @returns {string|null}
 */
export function getAccessToken() {
  // eslint-disable-next-line camelcase
  let token_key = 'auth_token';
  if (typeof window.location !== 'undefined' && window.location.hostname.includes('merchant')) {
    // eslint-disable-next-line camelcase
    token_key = 'access_token';
  }
  return getcookie(token_key) || null;
}

export function signup(email, password, firstName) {
  const fd = new FormData();
  fd.append('email', email.toString().trim());
  fd.append('password', password.toString().trim());
  fd.append('first_name', firstName.toString().trim());
  return api.post('/signup/', fd, {
    // baseURL: baseUrl,
  });
}

export function login(email, password) {
  const fd = new FormData();
  fd.append('email', email.toString().trim());
  fd.append('password', password.toString().trim());
  return api.post('/authorize/', fd, {
    // baseURL: baseUrl,
  });
}

export function loginMobile(email, password) {
  const fd = new FormData();
  fd.append('email', email.toString().trim());
  fd.append('password', password.toString().trim());
  return api.post('/login/', fd, {
    baseURL: baseUrl,
  });
}

export function logout() {
  const fd = new FormData();
  fd.append('token', getAccessToken());
  return api.post('/authorize/logout/', fd, {
    baseURL: baseUrl,
  });
}

export function resetPassword(email) {
  return api.post('/auth/v1.0/reset_password/', JSON.stringify({ email }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/**
 * Получает профиль
 */
export function getProfile() {
  return api('/auth/v1.0/profile/');
}

export function updateProfile(data) {
  return api.patch('/auth/v1.0/profile/', JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function submitNewPhone(phone) {
  const fd = new FormData();
  fd.append('phone', phone);
  return api.post('/auth/v1.0/phone/', fd);
}

export function changePhone(code) {
  return api.post(`/auth/v1.0/confirm_phone/${code}/`);
}
