export const getOrder = (state) => {
    return state.cart.order
}
export const getItems = (state) => {
    return state.search.items
}
export const getFilteredItems = (state) => {
    return state.search.filteredItems
}