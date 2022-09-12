import React from "react";

import {Grid, IconButton, ListItem, Typography} from "@mui/material";
import {Close} from "@mui/icons-material";

import style from "./Cart.module.css";


const CartItem = (props) => {

    const handleRemove = (id) => {
        props.removeOrder(id);
    }

    return (
        <Grid container>
            <Grid item md={10}>
                <ListItem>
                    <Typography variant="body2">
                    {props.name} {props.price}£
                    </Typography>
                </ListItem>
            </Grid>
            <Grid item md={2}>
                <IconButton className={style.closeIcon} onClick={() => handleRemove(props.id)}>
                    <Close />
                </IconButton>
            </Grid>
        </Grid>
    );
}

export default CartItem;