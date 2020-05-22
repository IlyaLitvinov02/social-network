import React from 'react';
import moment from "moment";
import s from './Message.module.css';
//import Ava from './../../img/ava.gif';


const Message = ({ message, senderId, authedUserId, addedAt, senderName }) => {

    const date = new Date(addedAt);
    const time = moment(date).format('LT');

    return (
        <div>
            <div className={`${s.message} ${senderId === authedUserId ? s.outcoming : s.incoming}`}>
                <div className={s.messageText}>
                    {message}
                </div>
                <div className={s.messageTime}>
                    {time}
                </div>
            </div>
            <div className={s.clear}></div>
        </div>
    );
}



export default Message;