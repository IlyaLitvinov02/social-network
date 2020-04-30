import React from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { logIn } from '../../redux/authReducer';
import { getAuthedUserId, getIsAuth } from '../../redux/selectors/auth-selectors';
import { compose } from 'redux';
import Container from '../common/StyledContainer/StyledContainer';


const Login = ({
    isAuth,
    myId,
    logIn,
    captchaUrl,
    ...props
}) => {

    const submit = ({ email, password, rememberMe, captcha }) => {
        logIn(email, password, rememberMe, captcha);
    }

    const path = props.location.state ? props.location.state.referrer : '/profile';

    if (isAuth && myId) return <Redirect to={path} />
    return (
        <Container>
            <h1>Login</h1>
            <LoginForm
                onSubmit={submit}
                captchaUrl={captchaUrl} />
        </Container>
    );
}


const mstp = state => ({
    myId: getAuthedUserId(state),
    isAuth: getIsAuth(state),
    captchaUrl: state.auth.captchaUrl,
});


export default compose(
    connect(mstp, { logIn }),
    withRouter
)(Login);