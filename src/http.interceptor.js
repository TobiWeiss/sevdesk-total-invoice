import axios from 'axios';

axios.interceptors.request.use(
  (config) => {
    config.headers.Accept = 'application/json';
    config.headers.Authorization = process.env.API_KEY;
    return config;
  },
  (error) => Promise.reject(error),
);
