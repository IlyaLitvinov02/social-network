import React from 'react';
import s from './Dialogs.module.css';
import MessagesContainer from './Messages/MessagesContainer';
import { DialogItemsContainer } from './DialogItems/DialogItemsContainer';
import Preloder from '../common/Preloder/Preloder';



const Dialogs = ({ isLoading, match }) => {
    if (isLoading) return <Preloder />
    return (
        <div className={s.dialogs}>
            <DialogItemsContainer />
            {match
                ? <MessagesContainer />
                : <div className={s.selectChatMsg}>
                    <span>Please select dialog to start chating</span>
                </div>}
        </div>
    );
}



export default Dialogs;