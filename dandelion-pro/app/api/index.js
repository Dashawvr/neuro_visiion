import axios from 'axios';
import createHistory from 'history/createBrowserHistory';

import { getToken, setTokens, isAuthorised } from './helpers';

const history = createHistory();

//TODO ENV WITH API_HOST
const API_HOST = 'http://localhost:80/api';
const REFRESH_ENDPOINT = `${API_HOST}/auth/refresh`;

const API = axios.create({
  baseURL: process.env.API_HOST || API_HOST,
});

API.interceptors.request.use(
  config => {

    if (isAuthorised()) return config

    const token = getToken('access');

    if (token) config.headers['Authorization'] = token;
    // config.headers['Content-Type'] = 'application/json';

    return config;
  },
  error => Promise.reject(error));

// API.interceptors.response.use(response => response, error => {
//   const originalRequest = error.config;
//
//   if (error.response.status === 401 && originalRequest.url === REFRESH_ENDPOINT) {
//     history.push('/login');
//     return Promise.reject(error);
//   }
//
//   if (error.response.status === 401 && !originalRequest._retry) {
//
//     originalRequest._retry = true;
//     const refreshToken = getToken('refresh');
//     return axios.post(REFRESH_ENDPOINT, null, { headers: { Authorization: 'Bearer ' + refreshToken } })
//       .then(res => {
//         if (res.status === 201) {
//           setTokens(res.data);
//           axios.defaults.headers.common['Authorization'] = getToken('refresh');
//           return axios(originalRequest);
//         }
//       })
//   }
//   return Promise.reject(error);
// });

export default API;
