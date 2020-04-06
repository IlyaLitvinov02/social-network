import React from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logIn } from '../../redux/authReducer';


const Login = props => {
    const submit = ({ email, password, rememberMe }) => {
        //const { email, password, rememberMe } = values;
        props.logIn(email, password, rememberMe);
    }

    if (props.isAuth) return <Redirect to={`/profile/${props.myId}`} />
    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={submit} />
        </div>
    );
}


const mstp = state => ({
    myId: state.auth.userId,
    isAuth: state.auth.isAuth
});


export default connect(mstp, { logIn })(Login);