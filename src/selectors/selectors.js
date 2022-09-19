export const getOrder = (state) => {
    return state.cart.order
}
export const getItems = (state) => {
    return state.search.items
}
export const getFilteredItems = (state) => {
    return state.search.filteredItems
}
export const getServerMessageLog = (state) => {
    return state.login.serverMessageLog
}
export const getServerMessageReg = (state) => {
    return state.registration.serverMessageReg
}
export const getLoginStatus = (state) => {
    return state.login.loginStatus
}
export const getIsFetchingLog = (state) => {
    return state.login.isFetching
}
export const getIsFetchingReg = (state) => {
    return state.registration.isFetching
}
export const getSnackbarStatus = (state) => {
    return state.login.openSnack
}
export const getTotalItems = (state) => {
    return state.search.totalItemsCount
}
export const getPageLimit = (state) => {
    return state.search.pageLimit
}
export const getCurrentPage = (state) => {
    return state.search.currentPage
}