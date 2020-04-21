import React, { useEffect } from 'react';
import s from './Dialogs.module.css';
import MessagesContainer from './Messages/MessagesContainer';
import DialogItemsContainer from './DialogItems/DialogItemsContainer';
import withRedirect from '../../hoc/withRedirect';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { startChat } from '../../redux/dialogsReducer';



const DialogsContainer = props => {
    // const { startChat } = props;
    // const userId = props.match.params.userId;
    // useEffect(() => {
    //     if (userId) {
    //         startChat('1');
    //     }
    // }, [userId, startChat])

    return (
        <div className={s.dialogs}>
            <DialogItemsContainer />
            <MessagesContainer />
        </div>
    );
}



export default compose(
    withRedirect,
    withRouter,
    connect(null, { startChat })
)(DialogsContainer);