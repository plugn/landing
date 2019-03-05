import axios from 'axios';
import { API_TOKEN } from '@/constants';
import { getAccessToken } from '@/services/auth';

const authRequest = axios.create({
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
  baseURL: 'http://api.racoon.local',
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

export default authRequest;
