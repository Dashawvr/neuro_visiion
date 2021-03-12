import { OPEN } from "../constants/rightSidebar";


const initialState = {
  open: false
}

export default function rightSidebar(state = initialState, action) {
  switch (action.type) {
    case OPEN :
      return {open: action.payload}
    default:
      return state;
  }
}