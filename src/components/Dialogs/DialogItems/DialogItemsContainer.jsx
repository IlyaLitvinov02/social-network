import React from 'react';
import DialogItems from './DialogItems';
import { useSelector } from 'react-redux';
import { getDialogsData } from '../../../redux/selectors/dialogs-selectors';

export const DialogItemsContainer = () => {
    const dialogs = useSelector(getDialogsData);

    return <DialogItems dialogs={dialogs} />
}