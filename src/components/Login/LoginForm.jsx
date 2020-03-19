import React from 'react';
import { Field } from 'redux-form';


const LoginForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='email' component='input' placeholder="E-mail" type="email" />
            </div>
            <div>
                <Field name='password' component='input' placeholder="Password" type="password" />
            </div>
            <div>
                <Field name='rememberMe' component='input' type="checkbox" /> Remember me
            </div>
            <div>
                <button type="submit">Log in</button>
            </div>
        </form>
    );
}



export default LoginForm;