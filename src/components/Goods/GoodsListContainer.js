import React, {useEffect} from "react";
import {connect} from "react-redux";

import GoodsList from "./GoodsList";

import {addOrder} from "../../redux/cart/cartActionCreator";
import {
    getCurrentPage,
    getFilteredItems,
    getItems,
    getOrder,
    getPageLimit,
    getSnackbarStatus,
    getTotalItems
} from "../../selectors/selectors";
import {bolivar, cohiba, onPageChange} from "../../redux/search/searchReducer";
import {useParams} from "react-router-dom";
import {setSnackbar} from "../../redux/login/loginAction";



const GoodsListContainerComponent = (props) => {
    const productName = useParams().productName;

    useEffect(() => {
        switch(productName) {
            case 'bolivar':
                props.bolivar(props.currentPage);
                break;

            case 'cohiba':
                props.cohiba(props.currentPage);
                break;
        }
    }, [productName, props.currentPage]);


    return(

            props.totalItems !== null &&
                <GoodsList {...props} />

    );
}


let mapStateToProps = (state) => {
    return {
        filteredItems: getFilteredItems(state),
        items: getItems(state),
        order: getOrder(state),
        openSnack: getSnackbarStatus(state),
        totalItems: getTotalItems(state),
        pageLimit: getPageLimit(state),
        currentPage: getCurrentPage(state)
    }
}

export const GoodsListContainer = connect(mapStateToProps, {addOrder, setSnackbar, bolivar, cohiba, onPageChange})(GoodsListContainerComponent);