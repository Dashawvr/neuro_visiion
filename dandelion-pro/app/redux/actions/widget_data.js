import { URL } from '../../containers/Axios/axiosForData';
import axios from 'axios'
import { GET_WIDGET_DATA } from "../constants/widget_data";


export const getWidgetData = () => {
  return async (dispatch) => {
    axios
      .get(`${URL}/api/widget_data`)
      .then((res) => {
        dispatch ({
          type: GET_WIDGET_DATA,
          payload: res
        })
      });

  }
}
