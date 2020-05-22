import { getMessages, postMessage } from '../../../redux/dialogsReducer';
import Messages from './Messages';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAuthedUserId } from '../../../redux/selectors/auth-selectors';
import { getCurrentDialog } from '../../../redux/selectors/dialogs-selectors';


const MessagesContainer = () => {
    const params = useParams();
    const userId = params.userId;

    const messages = useSelector(state => state.dialogs.messagesData),
        authedUserId = useSelector(getAuthedUserId),
        isLoading = useSelector(state => state.dialogs.messagesIsLoading),
        currentDialog = useSelector(state => getCurrentDialog(state, userId));
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getMessages(userId));
    }, [userId, dispatch]);

    const submitHandler = ({ messageInp }) => dispatch(postMessage(userId, messageInp));

    return <Messages
        currentDialog={currentDialog[0]}
        isLoading={isLoading}
        authedUserId={authedUserId}
        messages={messages}
        onSend={submitHandler}
    />
};


export default MessagesContainer;