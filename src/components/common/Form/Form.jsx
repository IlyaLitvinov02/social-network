import React from 'react';
import s from './Form.module.css';
import { Field } from 'redux-form';
import resetIcon from '../../../img/resetImg.png';



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

    const handleResetClick = () => {
        if (props.onResetClick) props.onResetClick();
        props.reset()
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
                    <button
                        disabled={props.submitting || props.pristine}
                        type='reset'
                        onClick={handleResetClick}
                        className={s.resetButton}>
                        <img src={resetIcon} alt='reset' />
                    </button>
                </div>
                <div className={s.buttonWrapper}>
                    <button disabled={props.submitting || props.pristine}>{props.button}</button>
                </div>
            </div>
        </form>
    );
}


export default Form;