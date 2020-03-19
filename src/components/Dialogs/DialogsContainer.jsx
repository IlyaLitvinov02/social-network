import React from 'react';
import s from './Dialogs.module.css';
import MessagesContainer from './Messages/MessagesContainer';
import DialogItemsContainer from './DialogItems/DialogItemsContainer';
import withRedirect from '../../hoc/withRedirect';



const DialogsContainer = (props) => {
    return (
        <div className={s.dialogs}>
            <DialogItemsContainer />
            <MessagesContainer />
        </div>
    );
}



export default withRedirect(DialogsContainer);