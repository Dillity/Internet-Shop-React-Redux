import {EMAIL, IS_FETCHING, LOGIN_STATUS, OPEN_SNACKBAR, SERVER_MESSAGE_LOG} from "./loginType";

export const emailLogin = (email) => ({type: EMAIL, email});
export const serverMessageLog = (message) => ({type: SERVER_MESSAGE_LOG, message});
export const loginStatusChange = (status) => ({type: LOGIN_STATUS, status});
export const isFetchingProgress = (status) => ({type: IS_FETCHING, status});
export const setSnackbar = (status) => ({type: OPEN_SNACKBAR, status});