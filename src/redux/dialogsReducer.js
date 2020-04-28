import { dialogsAPI } from "../api/api";

const SEND_MESSAGE = 'dialogsReducer/SEND-MESSAGE';
const SET_DIALOGS = 'dialogsReducer/SET_DIALOGS';
const SET_MESSAGES = 'dialogsReducer/SET_MESSAGES';

let initialState = {
    dialogsData: [
        // { name: 'AntiHype', id: 1 },
        // { name: 'Dark5665', id: 2 },
        // { name: 'UlukUluk', id: 3 },
        // { name: 'МЯКИШ', id: 4 },
        // { name: 'Перчик', id: 5 },
        // { name: 'Марио', id: 6 },
        // { name: 'Жопыч', id: 7 }
    ],

    messagesData: [
        // { message: 'Прив че дел', time: '21:14', id: 1, className: 'outcoming' },
        // { message: 'Приват', id: 2, time: '21:14', className: 'incoming' }
    ],
};


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DIALOGS:
            return {
                ...state,
                dialogsData: [...action.dialogs]     //needs refactoring
            };
        case SET_MESSAGES:
            return {
                ...state,
                messagesData: [...action.messages]
            };
        case SEND_MESSAGE:
            const date = new Date(),
                messageObject = {
                    body: action.message,
                    id: state.messagesData.length + 1,
                    time: `${date.getHours()}:${date.getMinutes()}`,
                    className: action.className
                };

            return {
                ...state,
                messagesData: [...state.messagesData, messageObject],
            };

        default:
            return state;
    }
}


export const setMessages = messages => ({ type: SET_MESSAGES, messages });
export const sendMessage = (className, message) => ({ type: SEND_MESSAGE, className, message });
export const setDialogs = dialogs => ({ type: SET_DIALOGS, dialogs });


export const getDialogs = () => async dispatch => {
    const response = await dialogsAPI.getDialogs();
    dispatch(setDialogs(response.data));
    console.log(response);
}

export const startChat = userId => async dispatch => {
    const response = await dialogsAPI.startChat(userId);
    console.log(response);
}

export const getMessages = userId => async dispatch => {
    const response = await dialogsAPI.getMessages(userId);
    dispatch(setMessages(response.data.items));
    console.log(response);
}

export const postMessage = (userId, message) => async dispatch => {
    const response = await dialogsAPI.postMessage(userId, message);
    console.log(response);
    if (response.data.resultCode === 0) {
        dispatch(sendMessage('outcoming', message))
    }
}


export default dialogsReducer;