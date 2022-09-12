import React, {useState} from "react";

import {Box, Drawer, Grid, IconButton, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

import style from "./Catalog.module.css";


const Catalog = (props) => {

    const [catalogDrawerOpen, setCatalogDrawerOpen] = useState(false);

    const handleCatalogClick = () => {
        setCatalogDrawerOpen(true);
    }
    const handleCatalogClose = () => {
        setCatalogDrawerOpen(false);
    }

    return (
        <>
            {/*drawer icon*/}

            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleCatalogClick}
                className={style.menuIcon}
            >
                <MenuIcon />
            </IconButton>

            {/*drawer*/}

        {catalogDrawerOpen && <Drawer onClose={handleCatalogClose} anchor="left" open={catalogDrawerOpen}>
            <Box sx={{width: 350, backgroundColor: 'primary.main'}}>
                <Grid container direction="row" className={style.container}>
                    <Grid item md={11} xs={11}>
                        <Typography
                            variant="h3"
                            component="span"
                            className={style.typography}
                        >
                            Catalog
                        </Typography>
                    </Grid>
                    <Grid item md={1} xs={1}>
                        <IconButton edge="start" onClick={handleCatalogClose} className={style.closeIcon}>
                            <CloseIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
        </Drawer>
}
        </>
    )
}

export default Catalog;