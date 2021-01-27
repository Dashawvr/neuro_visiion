import {GET_DASH} from "../constants/dashboards";
import axios from 'axios'

export const getDashboards = (id) => {
  return async (dispatch) => {
    axios
      .get(`/api/dashboard/user/${id}`)
      .then((res) => {
        console.log(res)
        dispatch ({
          type: GET_DASH,
          payload: res
        })
      });

  }
}
