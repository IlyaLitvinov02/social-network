import { sendMessage, getMessages, postMessage } from '../../../redux/dialogsReducer';
import Messages from './Messages';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';


const MessagesContainer = ({ messages, getMessages, postMessage, ...props }) => {
    const userId = props.match.params.userId;

    useEffect(() => {
        if (props.match.params.userId) {
            getMessages(props.match.params.userId);
        }
    }, [props.match.params.userId, getMessages]);

    const submitHandler = (values) => {
        postMessage(userId, values);
    }

    return <Messages messages={messages} onSend={submitHandler} />
};




const mapStateToProps = state => ({
    messages: state.dialogsPage.messagesData
});


const mapDispatchToProps = dispatch => ({
    postMessage: (userId, values) => {
        dispatch(postMessage(userId, values.messageInp));
    },

    getMessages: userId => {
        dispatch(getMessages(userId));
    },
});


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(MessagesContainer);