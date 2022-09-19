import React, {useState} from "react";

import {Badge, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, Typography} from "@mui/material";
import {ShoppingBasket, ShoppingCart} from "@mui/icons-material";

import CartItem from "./CartItem";
import CartTotalCost from "./CartTotalCost";

import style from "./Cart.module.css";


const Cart = (props) => {

    const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

    const handleCartClick = () => {
        setCartDrawerOpen(true);
    }
    const handleCartClose = () => {
        setCartDrawerOpen(false);
    }

    return (
        <>
            {/*cart icon*/}
            <IconButton color="inherit" onClick={handleCartClick}>
                <Badge color="secondary" badgeContent={props.order.length}>
                    <ShoppingCart/>
                </Badge>
            </IconButton>

            {/*cart drawer*/}

            {cartDrawerOpen && <Drawer onClose={handleCartClose} anchor="right" open={cartDrawerOpen}>
                <List className={style.list}>

                    <ListItem>
                        <Typography className={style.typography} variant="h5">Your shopping cart</Typography>
                        <ListItemIcon>
                            <ShoppingBasket/>
                        </ListItemIcon>
                    </ListItem>
                    <Divider/>


                    {props.order.length === 0 ? (
                        <ListItem>
                            Cart is empty!
                        </ListItem>
                    ) : (
                        props.order.map((item) => (
                            <CartItem key={item.id} id={item.id} name={item.name} price={item.price}
                                      removeOrder={props.removeOrder}/>
                        ))
                    )
                    }

                    {/*cart total cost*/}
                    {props.order.length > 0 &&
                        <CartTotalCost order={props.order}/>
                    }

                </List>
            </Drawer>
            }
        </>
    );
}

export default Cart;