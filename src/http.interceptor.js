import axios from 'axios';

axios.interceptors.request.use(request => {
    console.info(request);
    request.headers.common.Accept = 'application/json';
    if(request.method != "options") request.headers.common.Authorization = process.env.API_KEY;
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});
