import {CIGAR, PAGE, SEARCH_RESULT, TOTAL_ITEMS} from "./searchActionType";
import {cigarsAPI} from "../../api/api";
import {cigar, pageChange, totalItems} from "./searchActionCreator";


let initialState = {
    items: [],
    filteredItems: [],
    currentPage: 1,
    totalItemsCount: null,
    pageLimit: 3
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_RESULT:
            return {
                ...state,
                filteredItems: state.items.filter(item => {
                    return item.name.toLowerCase().includes(action.parameters.toLowerCase());
                })
            }

        case TOTAL_ITEMS:
            return {
                ...state,
                totalItemsCount: action.total
            }

        case CIGAR:
            return {
                ...state,
                items: action.items
            }

        case PAGE:
            return {
                ...state,
                currentPage: parseInt(action.page)
            }

        default:
            return state;
    }
}

export default searchReducer;

export const bolivar = (currentPage) => (dispatch) => {
    cigarsAPI.bolivar(currentPage).then(response => {
        dispatch(totalItems(response.data.totalDocs));
        dispatch(cigar(response.data.docs));
    });
}
export const cohiba = (currentPage) => (dispatch) => {
    cigarsAPI.cohiba(currentPage).then(response => {
        dispatch(totalItems(response.data.totalDocs));
        dispatch(cigar(response.data.docs));
    });
}
export const onPageChange = (p) => (dispatch) => {
    dispatch(pageChange(p));
}


