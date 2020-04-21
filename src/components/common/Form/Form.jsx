import React from 'react';
import s from './Form.module.css';
import { Field } from 'redux-form';


const Form = props => {
    const submit = values => {
        props.submitHandler(values);
        props.reset()
    }

    return (
        <form onSubmit={props.handleSubmit(submit)}>
            <div className={s.textareaWrapper}>
                <Field type='text' component='textarea' placeholder={props.label} name={props.name} />
            </div>
            <div className={s.buttonWrapper}>
                <button disabled={props.submitting || props.pristine}>{props.button}</button>
            </div>
        </form>
    );
}


export default Form;