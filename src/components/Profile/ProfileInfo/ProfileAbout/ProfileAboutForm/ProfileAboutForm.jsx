import React, { useCallback, useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';



const renderField = ({ input, label, type }) => {
    return <div>
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

    const initializeFields = useCallback(() => {
        initialize({
            fullName: fullName
        })
    }, [initialize, fullName]);

    useEffect(() => {
        initializeFields()
    }, [initializeFields]);


    return (
        <form>
            <Field
                component={renderField}
                label='Full name'
                type='text'
                name='fullName' />
            <Field
                defaultValue={aboutMe || ''}
                component={renderField}
                label='About me'
                type='text'
                name='aboutMe' />
            <Field
                // defaultChecked={lookingForAJob}
                component='input'
                type='checkbox'
                name='lookingForAJob' /> Looking for a job
            <Field
                defaultValue={lookingForAJobDescription || ''}
                component={renderField}
                type='text'
                name='lookingForAJobDescription' />

            <button type="submit" disabled={props.submitting}>Submit</button>
        </form>
    );
}


export default compose(
    reduxForm({ form: 'profileInfo' }),
    connect(state => ({ formState: state.form.profileInfo }))
)(ProfileAboutForm);