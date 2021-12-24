import axios from 'axios';

axios.interceptors.request.use(
  (config) => {
    config.headers.Accept = 'application/json';

    return config;
  },
  (error) => Promise.reject(error),
);
