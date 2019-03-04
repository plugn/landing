import axios from 'axios';
// import { FRONTSITE_URL } from '@/constants';
import { getAccessToken } from '@/services/auth';

const request = axios.create({
  baseURL: 'http://api.racoon.local',
  responseType: 'json',
  withCredentials: true,
  transformRequest: [function transformRequest(data, headers) {
    const token = getAccessToken();
    if (token) {
      // eslint-disable-next-line no-param-reassign
      headers.Authorization = `Bearer ${token}`;
    }
    headers.Authorization = 'Bearer 8pY3tTQ3H43zMVOwhzp7ks4pWIuhPP';
    return data;
  }],
});

// console.log('axios request');
// console.dir(request);

export default request;
