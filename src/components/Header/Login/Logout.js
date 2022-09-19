import React, {useState} from "react";

import {Badge, IconButton, ListItemIcon, Menu, MenuItem, Typography} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LogoutIcon from '@mui/icons-material/Logout';

import style from "./Login.module.css";


const Logout = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={style.loginIcon}>
            <IconButton onClick={handleOpen} color="inherit" className={style.loginIcon}>
                <Badge color={props.loginStatus ? "success" : "warning"} variant={"dot"}>
                    <PersonOutlineOutlinedIcon />
                </Badge>
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem>
                    <ListItemIcon>
                        <LogoutIcon fontSize="small"/>
                    </ListItemIcon>
                    <Typography onClick={() => {props.loginStatusChange(false)}}>
                        Logout
                    </Typography>
                </MenuItem>
            </Menu>
        </div>
    );
}

export default Logout;