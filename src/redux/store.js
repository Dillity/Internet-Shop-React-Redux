import {applyMiddleware, combineReducers, createStore} from "redux";

import searchReducer from "./search/searchReducer";
import cartReducer from "./cart/cartReducer";
import loginReducer from "./login/loginReducer";
import registrationReducer from "./registration/registrationReducer";

import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    search: searchReducer,
    cart: cartReducer,
    login: loginReducer,
    registration: registrationReducer
});


const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;


export default store;