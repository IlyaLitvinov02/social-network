import React from 'react';
import s from './Messages.module.css';
import Message from './Message/Message.jsx';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import Form from '../../common/Form/Form.jsx';
import { connect } from 'react-redux';



const MessageForm = compose(
    reduxForm({ form: 'message' }),
    connect(state => ({ formState: state.form.message }))
)(Form);


const Messages = props => {
    return (
        <div className={s.wrapper}>
            <div className={s.messages}>
                {props.messages.map(el =>
                    <Message message={el.body} time={el.time} className={el.className} key={el.id} />)}
            </div>
            <div className={s.messagesInput}>
                <MessageForm submitHandler={props.onSend} name='messageInp' label='Напишите сообщение...' button='Send' />
            </div>
        </div>
    );
}



export default Messages;