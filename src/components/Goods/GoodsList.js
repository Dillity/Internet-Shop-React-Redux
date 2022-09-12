import React from "react";

import {Container, Grid} from "@mui/material";

import GoodsItem from "./GoodsItem";

import style from "./Goods.module.css";



const GoodsList = (props) => {
    return (
        <Container className={style.container}>
              <Grid container spacing={5}>
              {props.filteredItems.length === 0 ? props.items.map(item => <GoodsItem addOrder={props.addOrder} key={item.id} id={props.order.length + 1} img={item.img} name={item.name} price={item.price} description={item.description} />) :
                  props.filteredItems.map(item => <GoodsItem addOrder={props.addOrder} key={item.id} id={props.order.length + 1} img={item.img} name={item.name} price={item.price} description={item.description} />)}
             </Grid>
        </Container>
    );
}

export default GoodsList;


