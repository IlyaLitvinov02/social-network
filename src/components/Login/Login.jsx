import React from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { logIn } from '../../redux/authReducer';
import { getAuthedUserId, getIsAuth } from '../../redux/selectors/auth-selectors';
import { compose } from 'redux';
import Container from '../common/StyledContainer/Container';


const Login = props => {

    const submit = ({ email, password, rememberMe }) => {
        props.logIn(email, password, rememberMe);
    }

    const path = props.location.state ? props.location.state.referrer : '/profile';

    if (props.isAuth && props.myId) return <Redirect to={path} />
    return (
        <Container>
            <h1>Login</h1>
            <LoginForm onSubmit={submit} />
        </Container>
    );
}


const mstp = state => ({
    myId: getAuthedUserId(state),
    isAuth: getIsAuth(state)
});


export default compose(
    connect(mstp, { logIn }),
    withRouter
)(Login);