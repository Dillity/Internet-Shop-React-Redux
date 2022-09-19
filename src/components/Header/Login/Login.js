import React, {useState} from "react";

import {Badge, Dialog, DialogContentText, DialogTitle, Grid, IconButton, Paper, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import LoginForm from "./LoginForm";

import RegistrationForm from "./RegisterForm";
import style from "./Login.module.css";


const Login = (props) => {

    const [reg, setReg] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    const handleOpenLogin = () => {
        setOpenLogin(true);
    }
    const handleCloseLogin = () => {
        setOpenLogin(false);
    }

    return (
        <div className={style.loginIcon}>
            <IconButton onClick={handleOpenLogin} color="inherit" className={style.loginIcon}>
                <Badge color={props.loginStatus ? "success" : "warning"} variant={"dot"}>
                    <PersonOutlineOutlinedIcon/>
                </Badge>
            </IconButton>
            <Dialog fullScreen={true} open={openLogin} onClose={handleCloseLogin}>
                <DialogTitle textAlign={"right"}>
                    <IconButton>
                        <CloseIcon className={style.closeIcon} onClick={handleCloseLogin}/>
                    </IconButton>
                </DialogTitle>
                <DialogContentText>

                        <Paper elevation={15} className={style.paperStyle} sx={{opacity: 1}}>
                            <Grid align='center'>
                                <h1>{reg ? "Sign Up" : "Sign In"}</h1>
                            </Grid>

                            {reg ?
                                <RegistrationForm register={props.register} serverMessageReg={props.serverMessageReg} isFetching={props.isFetchingReg}/>
                                :
                                <LoginForm logIn={props.logIn} serverMessageLog={props.serverMessageLog}
                                       isFetching={props.isFetchingLog}/>
                            }

                            <Typography onClick={() => setReg(!reg)} className={style.link}>
                                {reg ? "Already registered? Sign in here." : "Don't have an account?"}
                            </Typography>
                        </Paper>


                </DialogContentText>
            </Dialog>
        </div>
    );
}

export default Login;