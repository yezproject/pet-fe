import axios from 'axios';

import API_URL from '@/services/config.js';

const HTTP = () => {
  const instance = axios.create({
    baseURL: API_URL,
  });

  instance.interceptors.request.use(
    (config) => {
      config.headers = {
        'X-AUTH-TOKEN': 'abcxyz',
      };
      return config;
    },
    (error) => error,
  );
  instance.interceptors.response.use(
    (response) => {
      if (response.headers['content-type'] === 'application/json') {
        response.data = JSON.parse(response.data);
      }
      return response;
    },
    (error) => {
      if (error.response.status === 400) {
        // router redirect to bad-request page
        return Promise.resolve(error.response);
      }
      if (error.response.status === 401) {
        // clear auth token
        // clear user
        // ...
        // router redirect to login page
        return Promise.reject(error.response);
      }
      // if()...
    },
  );
  return instance;
};

export default HTTP();
