import axios from 'axios';

axios.interceptors.request.use(
  function (config) {
    config.headers.Accept = 'application/json';

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
