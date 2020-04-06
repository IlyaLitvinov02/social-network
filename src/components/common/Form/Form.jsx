import React from 'react';
//import s from './MyPosts.module.css';
import { Field } from 'redux-form';


const Form = props => {
    const submit = values => {
        props.submitMyForm(values);
        props.reset()
    }

    return (
        <form onSubmit={props.handleSubmit(submit)}>
            <div>
                <Field type='text' component='textarea' placeholder={props.label} name={props.name} />
            </div>
            <div>
                <button disabled={props.submitting || props.pristine}>{props.button}</button>
            </div>
        </form>
    );
}


export default Form;