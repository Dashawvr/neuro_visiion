import { URL } from '../../containers/Axios/axiosForData';
import axios from 'axios'
import { GET_USERS } from "../constants/users";

export const getUsers = () => {
  return async (dispatch) => {
    axios
      .get(`${URL}/api/users`)
      .then((res) => {
        dispatch ({
          type: GET_USERS,
          payload: res
        })
      });

  }
}
