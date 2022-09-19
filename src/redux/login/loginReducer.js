import React from "react";
import {loginAPI} from "../../api/api";
import {EMAIL, IS_FETCHING, LOGIN_STATUS, OPEN_SNACKBAR, SECRET_ROUTING, SERVER_MESSAGE_LOG} from "./loginType";
import {emailLogin, isFetchingProgress, loginStatusChange, serverMessageLog, setSnackbar} from "./loginAction";



let initialState = {
    email: null,
    serverMessageLog: '',
    loginStatus: false,
    isFetching: false,
    openSnack: false
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SERVER_MESSAGE_LOG:
            return {
                ...state,
                serverMessageLog: action.message
            }

        case LOGIN_STATUS:
            return {
                ...state,
                loginStatus: action.status
            }

        case EMAIL:
            return {
                ...state,
                email: action.email
            }

        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.status
            }

        case SECRET_ROUTING:
            return {
                ...state,
                secretRouting: true
            }

        case OPEN_SNACKBAR:
            return {
                ...state,
                openSnack: action.status
            }

        default:
            return state;
    }
}


export const logIn = (email, password) => (dispatch) => {
    dispatch(isFetchingProgress(true));
    loginAPI.login(email, password).then(response => {
        dispatch(serverMessageLog(response.data.message));
        if(response.data.foundUser) {
            dispatch(emailLogin(response.data.foundUser.email));
        }
        dispatch(isFetchingProgress(false));
        dispatch(loginStatusChange(response.data.loginStatus));

        if(response.data.loginStatus === true) {
            dispatch(setSnackbar(true));
            setTimeout(() => {
                dispatch(setSnackbar(false));
            }, 5000);
        }
    });
}


export default loginReducer;