import React from "react";

import {Alert, Box, Container, Grid, Pagination, Snackbar} from "@mui/material";

import GoodsItem from "./GoodsItem";

import style from "./Goods.module.css";



const GoodsList = (props) => {

    let pagesCount = Math.ceil(props.totalItems / props.pageLimit);

    const handleChange = (e) => {
        props.onPageChange(e.target.innerText);
    }

    return (
        <>
        <Container className={style.container}>
              <Grid container spacing={5}>
              {props.filteredItems.length === 0 ? props.items.map(item => <GoodsItem addOrder={props.addOrder} key={item._id} id={props.order.length + 1} img={item.img} name={item.name} price={item.price} description={item.description} />) :
                  props.filteredItems.map(item => <GoodsItem addOrder={props.addOrder} key={item._id} id={props.order.length + 1} img={item.img} name={item.name} price={item.price} description={item.description} />)}
             </Grid>
            <Snackbar open={props.openSnack}>
                <Alert severity={"success"} onClose={() => props.setSnackbar(false)}>
                    You have successfully logged in!
                </Alert>
            </Snackbar>


        </Container>

                <Pagination hidePrevButton hideNextButton
                        className={style.pagination}
                        color="secondary"
                        size="large"
                        count={pagesCount}
                        onClick={(e) => {handleChange(e)}}/>
        </>
    );
}

export default GoodsList;


