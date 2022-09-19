import {connect} from "react-redux";

import {logIn} from "../../../redux/login/loginReducer";
import {register} from "../../../redux/registration/registrationReducer";

import {
    getIsFetchingLog,
    getIsFetchingReg,
    getLoginStatus,
    getServerMessageLog,
    getServerMessageReg
} from "../../../selectors/selectors";
import LoginPage from "./LoginPage";
import {loginStatusChange} from "../../../redux/login/loginAction";

let mapStateToProps = (state) => {
    return {
        serverMessageLog: getServerMessageLog(state),
        serverMessageReg: getServerMessageReg(state),
        loginStatus: getLoginStatus(state),
        isFetchingLog: getIsFetchingLog(state),
        isFetchingReg: getIsFetchingReg(state)
    }
}

export const LoginContainer = connect(mapStateToProps, {logIn, register, loginStatusChange})(LoginPage);