/* eslint-disable import/prefer-default-export */
import axios from 'axios';

axios.defaults.baseURL = 'https://29f933f2421c.ngrok.io';
axios.defaults.headers.common.Authorization = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTE2NTI4NTcsImV4cCI6MTYxMjM3Mjg1N30.zp_pOkxUuSYcm-atUBKpAdU-pysgGeoehR7qP6ptzjM';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const getUsers = payload => axios('/api/users/', {
  method: 'POST/GET',
  headers: {
    'content-type': 'application/json', // whatever you want
  },
  data: payload,
})
  .then(response => response.data)
  .catch(error => {
    throw error;
  });
