import { createSelector } from "reselect";

export const getDialogsData = state => state.dialogs.dialogsData;
export const getCurrentDialog = createSelector(
    getDialogsData,
    (_, dialogId) => dialogId,
    (dialogsData, dialogId) => dialogsData.filter(dialog => Number(dialog.id) === Number(dialogId))
);