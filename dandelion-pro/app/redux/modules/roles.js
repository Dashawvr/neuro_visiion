import {GET_ROLE} from "../constants/role";

const initialState = {
  roles: ''
}

export default function roles(state = initialState, action) {
  switch (action.type) {
    case GET_ROLE :
      return {...state, roles: action.payload}
    default:
      return state
  }
}
