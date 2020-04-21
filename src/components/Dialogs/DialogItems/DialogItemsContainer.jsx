import React, { useEffect } from 'react';
import DialogItems from './DialogItems';
import { connect } from 'react-redux';
import { getDialogs } from '../../../redux/dialogsReducer';




const DialogItemsContainer = ({ state, getDialogs }) => {
    useEffect(() => {
        getDialogs()
    }, [getDialogs]);


    return <DialogItems state={state} />
}



const mapStateToProps = (state) => {
    return {
        state: state.dialogsPage.dialogsData
    };
}


export default connect(mapStateToProps, { getDialogs })(DialogItemsContainer);
