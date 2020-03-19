import React from 'react';
import LoginForm from './LoginForm';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logIn } from '../../redux/authReducer';


const Login = props => {
    const { handleSubmit } = props;
    const submit = values => {
        const { email, password, rememberMe } = values;
        props.logIn(email, password, rememberMe);
    }

    if (props.isAuth) return <Redirect to={`/profile/${props.myId}`} />
    return (
        <div>
            <h1>Login</h1>
            <LoginForm formState={props.formState} handleSubmit={handleSubmit(submit)} />
        </div>

    )
}


const mstp = state => ({
    formState: state.form.login,
    myId: state.auth.userId,
    isAuth: state.auth.isAuth
});


export default compose(
    reduxForm({ form: 'login' }),
    connect(mstp, { logIn })
)(Login);