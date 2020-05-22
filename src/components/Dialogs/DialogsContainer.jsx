import React, { useEffect } from 'react';
import withRedirect from '../../hoc/withRedirect';
import { useSelector, useDispatch } from 'react-redux';
import { getDialogs } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { useRouteMatch } from 'react-router-dom';



const DialogsContainer = () => {
    const isLoading = useSelector(state => state.dialogs.dialogsIsLoading);
    const dispatch = useDispatch();

    const match = useRouteMatch({
        path: '/dialogs/:userId'
    });

    useEffect(() => {
        dispatch(getDialogs());
    }, [dispatch]);

    return <Dialogs match={match} isLoading={isLoading} />
}


export default withRedirect(DialogsContainer);