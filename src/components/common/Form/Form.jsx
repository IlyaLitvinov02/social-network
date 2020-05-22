import React from 'react';
import s from './Form.module.css';
import { Field } from 'redux-form';
import { Button } from '../Styled/Styled';



const CustomField = ({ input, type, customChangeHandler, placeholder, fieldType = 'textarea' }) => (
    fieldType === 'textarea'
        ? <textarea
            {...input}
            rows='1'
            placeholder={placeholder}
            type={type}
            onChange={(event) => {
                if (customChangeHandler) customChangeHandler(event)
                input.onChange(event)
            }} />
        : fieldType === 'input'
        && <input
            placeholder={placeholder}
            {...input}
            type={type}
            onChange={(event) => {
                if (customChangeHandler) customChangeHandler(event)
                input.onChange(event)
            }} />
);



const Form = props => {
    const submit = values => {
        if (props.resetAfterSubmit) {
            props.submitHandler(values)
                .then(() => props.reset());
        } else props.submitHandler(values);
    }


    return (
        <form onSubmit={props.handleSubmit(submit)} autoComplete='off'>
            <div className={s.wrapper}>
                <div className={s.textareaWrapper}>
                    <Field
                        fieldType={props.fieldType}
                        type='text'
                        component={CustomField}
                        placeholder={props.label}
                        name={props.name}
                        customChangeHandler={props.customChangeHandler} />
                </div>
                <div className={s.buttonWrapper}>
                    <Button disabled={props.submitting || props.pristine}>{props.button}</Button>
                </div>
            </div>
        </form>
    );
}


export default Form;