import React from 'react';
import './Message.css';
//import Ava from './../../img/ava.gif';


const Message = (props) => {

    return (
        <div>           
            <div className={`message ${props.className}`}>
                <div className='messageText'>
                    {props.message}
                </div>
                <div className='messageTime'>
                    {props.time}
                </div>
            </div>
            <div className='clear'></div>
        </div>
    );
}



export default Message;