import {CIGAR, FILTER, PAGE, SEARCH_RESULT, TOTAL_ITEMS} from "./searchActionType";

export const searchItems = (parameters) => ({type: SEARCH_RESULT, parameters});
export const cigar = (items) => ({type: CIGAR, items});
export const totalItems = (total) => ({type: TOTAL_ITEMS, total});
export const pageChange = (page) => ({type: PAGE, page});