import {registerAPI} from "../../api/api";
import {IS_FETCHING, SERVER_MESSAGE_REG} from "./registrationType";
import {isFetchingProgress, serverMessageReg} from "./registrationAction";

let initialState = {
    serverMessageReg: '',
    isFetching: false
}

const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SERVER_MESSAGE_REG:
            return {
                ...state,
                serverMessageReg: action.message
            }

        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.status
            }


        default:
            return state;
    }
}



export const register = (email, password) => (dispatch) => {
    dispatch(isFetchingProgress(true));
    registerAPI.register(email, password).then(response => {
        dispatch(serverMessageReg(response.data.message));
        dispatch(isFetchingProgress(false));
    });
}

export default registrationReducer;