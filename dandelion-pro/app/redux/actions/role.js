import {GET_ROLE} from "../constants/role";
import { URL } from '../../containers/Axios/axiosForData';
import axios from 'axios'

export const getRole = () => {
  return async (dispatch) => {
    axios
      .get(`${URL}/api/role`)
      .then((res) => {
        console.log(res, 'roles')
        dispatch ({
          type: GET_ROLE,
          payload: res
        })
      });

  }
}
