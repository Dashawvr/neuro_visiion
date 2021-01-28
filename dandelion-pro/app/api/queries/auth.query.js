import API from '../index';

const AUTH_ENDPOINT = '/auth'
const LOGIN_ENDPOINT = `${AUTH_ENDPOINT}/login`;
const LOGOUT_ENDPOINT = `${AUTH_ENDPOINT}/logout`;


export const login = credentials => API.post(LOGIN_ENDPOINT, credentials);

export const logOut = () => API.post(LOGOUT_ENDPOINT, null)


