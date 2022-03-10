import React from "react";

import { connect } from "react-redux";
import LoginComponent from "../../components/login/Login"
import { loginAction } from "../../redux/actions"

class LoginContainer extends React.Component {

    render() {
        return <LoginComponent {...this.props} />;

    }
}

const mapStateToProps = (state) => {
    return {
        error: state.loginReducers.error,
        data: state.loginReducers.data,
        loading: state.loginReducers.loading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginAction: (user, password) => {
            dispatch(loginAction(user, password))
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);