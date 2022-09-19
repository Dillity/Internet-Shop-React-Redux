import {connect} from "react-redux";

import {logIn, loginStatusChange} from "../../../redux/login/loginReducer";
import {register} from "../../../redux/registration/registrationReducer";

import {
    getIsFetchingLog,
    getIsFetchingReg,
    getLoginStatus,
    getServerMessageLog,
    getServerMessageReg
} from "../../../selectors/selectors";
import LoginPage from "./LoginPage";

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