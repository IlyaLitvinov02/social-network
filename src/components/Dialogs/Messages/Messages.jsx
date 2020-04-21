import React from 'react';
import s from './../Dialogs.module.css';
import './Messages.css';
import Message from './Message/Message.jsx';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import Form from '../../common/Form/Form.jsx';
import { connect } from 'react-redux';
import Container from '../../common/StyledContainer/Container';



const MessageForm = compose(
    reduxForm({ form: 'message' }),
    connect(state => ({ formState: state.form.message }))
)(Form);


const Messages = props => {
    return (
        <div>
            <div className={s.messages}>
                {props.messages.map(el =>
                    <Message message={el.message} time={el.time} className={el.className} key={el.id} />)}
            </div>
            <Container className={s.messagesInput}>
                <MessageForm submitHandler={props.onSend} name='messageInp' label='Напишите сообщение...' button='Send' />
            </Container>
        </div>
    );
}



export default Messages;