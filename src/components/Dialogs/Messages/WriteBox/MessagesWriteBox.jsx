import React from 'react'
import Form from '../../../common/Form/Form'
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import s from './WriteBox.module.css';
import Container from '../../../common/StyledContainer/Container';


const WriteBoxForm = compose(
    reduxForm({ form: 'writeBox' }),
    connect(state => ({ formState: state.form.writeBox }))
)(Form)


export default ({ userName, userId, submitHandler, closeWriteBox }) => {
    return (
        <div className={s.writeBox}>
            <Container className={s.writeBoxContainer}>
                <div>
                    <span>{userName}</span>
                </div>
                <div>
                    <Link to={`/dialogs/${userId}`}>{`To dialog with ${userName}`}</Link>
                </div>
                <div>
                    <WriteBoxForm submitHandler={submitHandler} name='messageInp' label='Напишите сообщение...' button='Send' />
                    <button onClick={closeWriteBox}>Cancel</button>
                </div>
            </Container>
        </div>
    );
}