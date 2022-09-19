import {IS_FETCHING, SERVER_MESSAGE_REG} from "./registrationType";

export const serverMessageReg = (message) => ({type: SERVER_MESSAGE_REG, message});
export const isFetchingProgress = (status) => ({type: IS_FETCHING, status});