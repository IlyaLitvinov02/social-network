import React from 'react';
import s from './Messages.module.css';
import Message from './Message/Message.jsx';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import Form from '../../common/Form/Form.jsx';
import { connect } from 'react-redux';
import { groupByDate } from '../../../utils/helpers/groupBy';
import { Container } from '../../common/Styled/Styled';
import Preloder from '../../common/Preloder/Preloder';
import MessagesHeader from './MessagesHeader/MessagesHeader';



const MessageForm = compose(
    reduxForm({ form: 'message' }),
    connect(state => ({ formState: state.form.message }))
)(Form);



const Messages = ({ isLoading, messages, onSend, authedUserId, currentDialog }) => {
    const messagesObj = groupByDate(messages);

    if (isLoading || !currentDialog) return <Preloder />
    return (
        <div className={s.wrapper}>
            <MessagesHeader currentDialog={currentDialog} />
            <Container className={s.messages}>
                {Object.keys(messagesObj).map(key =>
                    <div className={s.date} key={key}>
                        <div>{key}</div>
                        <div>{messagesObj[key].map(el =>
                            <Message
                                authedUserId={authedUserId}
                                messageId={el.id}
                                message={el.body}
                                senderId={el.senderId}
                                addedAt={el.addedAt}
                                senderName={el.senderName}
                                key={el.id} />)}
                        </div>
                    </div>
                )}
            </Container>
            <Container className={s.messagesInput}>
                <MessageForm
                    resetAfterSubmit={true}
                    submitHandler={onSend}
                    name='messageInp'
                    label='Напишите сообщение...'
                    button='Send' />
            </Container>
        </div>
    );
}



export default Messages;