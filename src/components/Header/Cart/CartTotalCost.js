import React from "react";

import {Divider, ListItem, Typography} from "@mui/material";

const CartTotalCost = (props) => {

    const totalCost = props.order.reduce((total, item) => {
        return total + item.price
    }, 0)

    return (
        <>
            <Divider/>
            <ListItem>
                <Typography>
                    Total cost: {totalCost.toFixed(2)} £
                </Typography>
            </ListItem>
        </>
    );
}

export default CartTotalCost;