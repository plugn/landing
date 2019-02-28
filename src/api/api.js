import axios from 'axios';
// import { FRONTSITE_URL } from '@/constants';
import { getAccessToken } from '@/services/auth';

const request = axios.create({
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

// console.log('axios reauest');
// console.dir(request);

export default request;
