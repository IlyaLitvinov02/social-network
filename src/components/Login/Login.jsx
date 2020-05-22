import React from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';
import { logIn } from '../../redux/authReducer';
import { getAuthedUserId, getIsAuth } from '../../redux/selectors/auth-selectors';
import { compose } from 'redux';
import { Container } from '../common/Styled/Styled';


const Login = ({ isAuth, authedUserId, logIn, captchaUrl }) => {

    const location = useLocation();

    const submit = ({ email, password, rememberMe, captcha }) => {
        logIn(email, password, rememberMe, captcha);
    }

    const path = location.state ? location.state.referrer : '/profile';

    if (isAuth && authedUserId) return <Redirect to={path} />
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
    authedUserId: getAuthedUserId(state),
    isAuth: getIsAuth(state),
    captchaUrl: state.auth.captchaUrl,
});


export default compose(
    connect(mstp, { logIn }),
)(Login);