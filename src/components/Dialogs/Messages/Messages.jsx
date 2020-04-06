import React from 'react';
import s from './../Dialogs.module.css';
import './Messages.css';
import Message from './Message/Message.jsx';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import Form from '../../common/Form/Form.jsx';
import { connect } from 'react-redux';



const MessageForm = compose(
    reduxForm({ form: 'message' }),
    connect(state => ({ formState: state.form.message }))
)(Form);


const Messages = (props) => {

    let messageElements = props.state.messagesData.map(el =>
        <Message message={el.message} time={el.time} className={el.className} key={el.id} />);

    return (
        <div className={s.messages}>
            {messageElements}
            <div className={s.messagesInput}>
                <MessageForm submitMyForm={props.onSend} name='messageInp' label='Напишите сообщение...' button='Send' />
            </div>
        </div>
    );
}



export default Messages;