import React from "react";
import {connect} from "react-redux";

import GoodsList from "./GoodsList";

import {addOrder} from "../../redux/cart/cartActionCreator";
import {getFilteredItems, getItems, getOrder} from "../../selectors/selectors";

let mapStateToProps = (state) => {
    return {
        filteredItems: getFilteredItems(state),
        items: getItems(state),
        order: getOrder(state)
    }
}

export const GoodsListContainer = connect(mapStateToProps, {addOrder})(GoodsList);