import { LOGIN, LOGOUT } from '../constants/loginConstants';

export const loginAction = credentials => ({
  type: LOGIN,
  credentials
});

export const logOutAction = () => ({
  type: LOGOUT
})


