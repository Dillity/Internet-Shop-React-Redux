import React from "react";

import Login from "./Login";
import Logout from "./Logout";
import {register} from "../../../redux/registration/registrationReducer";

const LoginPage = (props) => {
        return (

       props.loginStatus ?
           <Logout
               loginStatus={props.loginStatus}
               loginStatusChange={props.loginStatusChange} /> :
           <Login
               logIn={props.logIn}
               register={props.register}
               serverMessageReg={props.serverMessageReg}
               serverMessageLog={props.serverMessageLog}
               isFetchingLog={props.isFetchingLog}
               isFetchingReg={props.isFetchingReg}
               loginStatus={props.loginStatus} />
    );
}

export default LoginPage;
