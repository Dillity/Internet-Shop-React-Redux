import React from "react";

import {Button, Card, Grid, Typography} from "@mui/material";

import style from './Goods.module.css';



const GoodsItem = (props) => {

    const handleOrder = (details) => {
        props.addOrder(details);
    }

    return (
        <Grid item xs={12} md={4}>
            <Card className={style.card} elevation={10}>
                <div>
                    <img src={props.img} className={style.itemImage}/>
                </div>
                <div className={style.main}>
                    <Typography className={style.name}>{props.name}</Typography>
                    <Typography className={style.price}>{props.price}£</Typography>
                    <Typography className={style.description}>{props.description}</Typography>
                    <Button onClick={() => handleOrder({id: props.id, name: props.name, price: props.price})} size={"small"} variant="contained">
                        Add to cart
                    </Button>
                </div>

            </Card>
        </Grid>
    );
}

export default GoodsItem;