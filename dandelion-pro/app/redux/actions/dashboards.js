import {GET_DASH} from "../constants/dashboards";
import { URL } from '../../containers/Axios/axiosForData';
import axios from 'axios'

export const getDashboards = (id) => {
  return async (dispatch) => {
    axios
      .get(`${URL}/api/users/${id}`)
      .then((res) => {
        dispatch ({
          type: GET_DASH,
          payload: res.data.data.user.dashboards
        })
      });
  }
}
