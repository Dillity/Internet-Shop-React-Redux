import React from "react";
import {AppBar, Toolbar, Typography} from "@mui/material";

import Catalog from "./Catalog/Catalog";
import Cart from "./Cart/Cart";
import SearchInput from "./Search/Search";

import style from "./Header.module.css";
import {LoginContainer} from "./Login/LoginContainer";
import {useNavigate} from "react-router-dom";


const Header = (props) => {

    let navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/');
    }

    return (
        <AppBar>
            <Toolbar>

                {/*catalog*/}
                <Catalog/>

                <Typography
                    variant="h4"
                    component="span"
                    className={style.typography}
                    onClick={handleNavigate}
                >
                    Internet shop
                </Typography>

                {/*search input*/}
                <SearchInput searchItems={props.searchItems}/>

                 <LoginContainer />

                {/*cart*/}
                <Cart order={props.order} removeOrder={props.removeOrder}/>

            </Toolbar>
        </AppBar>
    );
}

export default Header