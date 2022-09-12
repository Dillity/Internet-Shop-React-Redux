import {combineReducers, createStore} from "redux";
import searchReducer from "./search/searchReducer";
import cartReducer from "./cart/cartReducer";

let reducers = combineReducers({
    search: searchReducer,
    cart: cartReducer
});


const store = createStore(reducers);
window.store = store;


export default store;