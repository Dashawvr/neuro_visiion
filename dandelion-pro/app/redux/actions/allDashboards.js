import {GET_ALL_DASH} from "../constants/allDashboards";
import { URL } from '../../containers/Axios/axiosForData';
import axios from 'axios'

export const getAllDashboards = () => {
  return async (dispatch) => {
    axios
      .get(`${URL}/api/dashboard`)
      .then((res) => {
        dispatch ({
          type: GET_ALL_DASH,
          payload: res
        })
      });
  }
}
