import axios from 'axios';
import jsesc from 'jsesc';

import { clearToken, getToken } from '@/common/storage/local-storage.js';
import API_URL from '@/services/config.js';

const ACCEPTED_RESPONSE_STATUS = [409, 400];

const HTTP = () => {
  const instance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
  });

  instance.interceptors.request.use((config) => {
    if (getToken()) {
      config.headers.setAuthorization('Bearer ' + getToken());
    }
    return config;
  });

  instance.interceptors.response.use(
    (response) => {
      if (response.headers.getContentType === 'application/json') {
        response.data = JSON.parse(jsesc(response.data, { json: true }));
      }
      return response;
    },
    (error) => {
      console.log('error', error);
      if (error?.response?.status === 401) {
        // if (router.currentRoute.value.redirectedFrom?.path === '/') {
        //   router.push({
        //     name: 'home',
        //     params: error.response.data,
        //   });
        //   // return Promise.reject(error.response)
        // }
        clearToken();
      }
      if (error?.response?.status === 403) {
        // router.push({
        //   name: 'forbidden',
        //   params: error.response.data,
        // });
        // return Promise.resolve(error.response)
      }
      if (error?.response?.status === 500) {
        // router.push({
        //   name: 'error',
        //   params: error.response.data,
        // });
        // return Promise.resolve(error.response)
      }
      if (ACCEPTED_RESPONSE_STATUS.includes(error?.response?.status)) {
        return error.response;
      }
    },
  );
  return instance;
};

export default HTTP();
