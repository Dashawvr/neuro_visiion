import {LOGIN, LOGOUT} from "../constants/login";
import axios from "axios";


export const onSignIn = (data) => {
    return async (dispatch) => {
        dispatch ({
            type: LOGIN,
            payload: data
        })
    }
}

export const onLogOut = (user) => {
    return async (dispatch) => {
        axios
            .post("/api/auth/logout", user)
            .then()
            .catch((error) => {
                console.log(error);
            });
        dispatch ({
            type: LOGOUT,
            payload: ''
        })
    }
}
