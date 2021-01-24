import {LOGIN, LOGOUT} from "../constants/login";

const initialState = {
    user: ''
}

export default function loginS(state = initialState, action) {
    switch (action.type) {
        case LOGIN :
            return {...state, user: action.payload}
        case LOGOUT :
            return {...state, user: action.payload}
        default:
            return state
    }
}
