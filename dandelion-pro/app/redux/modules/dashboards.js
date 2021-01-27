import {GET_DASH} from "../constants/dashboards";

const initialState = {
  dashboards: ''
}

export default function dashboards(state = initialState, action) {
  switch (action.type) {
    case GET_DASH :
      return {...state, dashboards: action.payload}
    default:
      return state
  }
}
