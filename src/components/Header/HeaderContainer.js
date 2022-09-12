import React from "react";
import {connect} from "react-redux";

import Header from "./Header";

import {searchItems} from "../../redux/search/searchActionCreator";
import {removeOrder} from "../../redux/cart/cartActionCreator";
import {getOrder} from "../../selectors/selectors";


let mapStateToProps = (state) => {
    return {
        order: getOrder(state),
    }
}

export const HeaderContainer = connect(mapStateToProps, {searchItems, removeOrder})(Header);