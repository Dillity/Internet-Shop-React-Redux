import React, {useState} from "react";

import {
    Box, Collapse,
    Drawer,
    Grid,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';

import style from "./Catalog.module.css";
import {ExpandLess, ExpandMore, StarBorder} from "@mui/icons-material";
import {Navigate, useNavigate} from "react-router-dom";


const Catalog = (props) => {
    let navigate = useNavigate();

    const [catalogDrawerOpen, setCatalogDrawerOpen] = useState(false);

    const handleCatalogClick = () => {
        setCatalogDrawerOpen(true);
    }
    const handleCatalogClose = () => {
        setCatalogDrawerOpen(false);
    }

    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleNavigate = (route) => {
        navigate(route);
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
                sx={{mr: 1.5}}
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
                            <CloseIcon className={style.closeIcon}/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>

            <List>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <SmokingRoomsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cigars" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit >
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => {handleNavigate('bolivar')}}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Bolivar" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => {handleNavigate('cohiba')}}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Cohiba" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </Drawer>
}
        </>
    );
}

export default Catalog;