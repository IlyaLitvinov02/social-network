import React, { useEffect, useMemo } from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import s from './ProfileAboutForm.module.css';



const renderField = ({ input, label, type }) => {
    return <div className={s.fieldRow}>
        <div>{label}</div>
        <div>
            <input {...input} type={type} />
        </div>
    </div>
}


const ProfileAboutForm = ({
    aboutMe,
    contacts,
    lookingForAJob,
    lookingForAJobDescription,
    fullName,
    initialize,
    ...props
}) => {

    const initialObject = useMemo(() => ({
        aboutMe,
        lookingForAJob,
        lookingForAJobDescription,
        fullName,
        ...contacts,
    }), [
        aboutMe,
        lookingForAJob,
        lookingForAJobDescription,
        fullName,
        contacts
    ])


    useEffect(() => {
        initialize(initialObject)
    }, [initialize, initialObject]);


    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={renderField}
                label='Full name'
                type='text'
                name='fullName' />
            <fieldset>
                <Field
                    component={renderField}
                    label='About me'
                    type='text'
                    name='aboutMe' />
                <Field
                    component='input'
                    type='checkbox'
                    name='lookingForAJob' /> Looking for a job
                <Field
                    label='About a job'
                    component={renderField}
                    type='text'
                    name='lookingForAJobDescription' />
            </fieldset>
            <fieldset>
                <legend>Contacts</legend>
                <Field
                    label='Facebook'
                    component={renderField}
                    type='text'
                    name='facebook' />
                <Field
                    label='VK'
                    component={renderField}
                    type='text'
                    name='vk' />
                <Field
                    label='YouTube'
                    component={renderField}
                    type='text'
                    name='youtube' />
            </fieldset>

            <button type="submit" disabled={props.submitting}>Submit</button>
        </form>
    );
}


export default compose(
    reduxForm({ form: 'profileInfo' }),
    connect(state => ({ formState: state.form.profileInfo }))
)(ProfileAboutForm);