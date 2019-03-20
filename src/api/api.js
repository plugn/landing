import axios from 'axios';
import { API_TOKEN, API_URL } from '@/constants';
import { getAccessToken } from '@/services/auth';

export function apiLogout(onSuccess, onError, url = '/authorize/logout/') {
  const xhr = new XMLHttpRequest();
  xhr.onload = onSuccess;
  xhr.onerror = onError;
  xhr.open('GET', url);
  xhr.post();
}

export const authRequest = axios.create({
  baseURL: 'http://racoon.local',
  responseType: 'json',
  withCredentials: true,
  transformRequest: [function transformRequest(data, headers) {
    const token = getAccessToken();
    if (token) {
      // eslint-disable-next-line no-param-reassign
      headers.Authorization = `Bearer ${token}`;
    }
    return data;
  }],
});

export const apiRequest = axios.create({
  baseURL: API_URL,
  responseType: 'json',
  withCredentials: true,
  transformRequest: [function transformRequest(data, headers) {
    const token = getAccessToken();
    if (token) {
      // eslint-disable-next-line no-param-reassign
      headers.Authorization = `Bearer ${token}`;
    } else {
      headers.Authorization = `Bearer ${API_TOKEN}`;
    }

    return data;
  }],
});

export default apiRequest;
