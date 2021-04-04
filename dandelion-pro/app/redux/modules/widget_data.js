import { GET_WIDGET_DATA } from "../constants/widget_data";


const initialState = {
  widget_data: ''
}

export default function widget_data(state = initialState, action) {
  switch (action.type) {
    case GET_WIDGET_DATA :
      return {...state, widget_data: action.payload}
    default:
      return state
  }
}
