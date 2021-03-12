import { OPEN } from "../constants/rightSidebar";

export const onOpen = (data) => {
    return async (dispatch) => {
        dispatch ({
            type: OPEN,
            payload: {open: data}
        })
    }
}