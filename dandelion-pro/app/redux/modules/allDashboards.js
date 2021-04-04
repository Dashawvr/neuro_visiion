import {GET_ALL_DASH} from "../constants/allDashboards";

const initialState = {
  dashboards: '',
  roles: ''
}

export default function dashboards(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_DASH :
      return {...state, dashboards: action.payload}
    default:
      return state
  }
}

