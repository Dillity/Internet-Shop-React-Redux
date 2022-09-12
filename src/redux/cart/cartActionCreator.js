import {ADD_ORDER, REMOVE_ORDER} from "./cartActionType";

export const addOrder = (details) => ({type: ADD_ORDER, details});
export const removeOrder = (id) => ({type: REMOVE_ORDER, id});
