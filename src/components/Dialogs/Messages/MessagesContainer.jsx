import { changeMessagesTextareaValueActionCreator, sendMessageActionCreator } from '../../../redux/dialogsReducer';
import Messages from './Messages';
import { connect } from 'react-redux';




let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage.messagesState
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSend: (values) => {
            dispatch(sendMessageActionCreator('outcoming', values.messageInp));
        },

        onTextareaValueChange: (event) => {
            let text = event.target.value;
            let action = changeMessagesTextareaValueActionCreator(text);
            dispatch(action);
        }
    };
}




const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);







export default MessagesContainer;