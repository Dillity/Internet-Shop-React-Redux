import {ADD_ORDER, REMOVE_ORDER} from "./cartActionType";

let initialState = {
    order: []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ORDER:
            return {
                ...state,
                order: [...state.order, action.details]
            }

        case REMOVE_ORDER:
            return {
                ...state,
                order: state.order.filter(item => item.id !== action.id)
            }

        default:
            return state;
    }
}
export default cartReducer;
