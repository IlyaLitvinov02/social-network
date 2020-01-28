import React from 'react';
import s from './Dialogs.module.css';
import MessagesContainer from './Messages/MessagesContainer';
import DialogItemsContainer from './DialogItems/DialogItemsContainer';



function Dialogs(props) {
    return (
        <div className={s.dialogs}>
            <DialogItemsContainer />
            <MessagesContainer />
        </div>
    );
}



export default Dialogs;