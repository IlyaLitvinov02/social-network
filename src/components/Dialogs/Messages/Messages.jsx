import React from 'react';
import s from './../Dialogs.module.css';
import './Messages.css';
import Message from './Message/Message.jsx';
//import Ava from './../../img/ava.gif';


const Messages = (props) => {

    let messageElements = props.state.messagesData.map(el => 
        <Message message={el.message} time={el.time} className={el.className} key={el.id} />);

    return (
        <div className={s.messages}>
            {messageElements}
            <div className={s.messagesInput}>
                <input required value={props.state.textareaValue} onChange={props.onTextareaValueChange} />
                <button onClick={props.onSendBtnClick}>Send</button>
            </div>
        </div>
    );
}



export default Messages;