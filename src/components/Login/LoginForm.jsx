import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import s from './LoginForm.module.css';
import { required } from '../../utils/validators.js';



const renderField = ({
    input,
    label,
    type,
    meta: { touched, error }
}) => <>
        <input {...input} type={type} placeholder={label} className={touched ? (error && s.touched) : ''} />
        {touched
            && (error && <span>{label + ' ' + error}</span>)}
    </>




const LoginForm = ({ captchaUrl, ...props }) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.loginForm}>
            <div>
                <Field
                    name='email'
                    component={renderField}
                    label="E-mail"
                    type="email"
                    validate={[required]} />
            </div>
            <div>
                <Field
                    name='password'
                    component={renderField}
                    label="Password"
                    type="password"
                    validate={[required]} />
            </div>
            <div>
                <Field name='rememberMe' component='input' type="checkbox" /> Remember me
            </div>
            {captchaUrl
                && <div>
                    <div>
                        <img src={captchaUrl} alt='Captcha' />
                    </div>
                    <div>
                        <Field
                            name='captcha'
                            component={renderField}
                            label="Text from image"
                            type="text"
                            validate={[required]} />
                    </div>
                </div>}

            {props.error
                && <div>
                    <span>{props.error}</span>
                </div>}
            <div>
                <button type="submit" disabled={props.submitting}>Log in</button>
            </div>
        </form>
    );
}



export default compose(
    reduxForm({ form: 'login' }),
    connect(state => ({ formState: state.form.login }))
)(LoginForm);