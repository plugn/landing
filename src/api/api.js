import axios from 'axios';

import { API_GATEWAY_URL } from 'constants';

export default axios.create({
  baseURL: API_GATEWAY_URL,
});
