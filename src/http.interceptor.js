import axios from 'axios';

axios.interceptors.request.use(request => {
    request.config.headers.Accept = 'application/json';
    if(request.method != "options") request.headers.Authorization = process.env.API_KEY;
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});
