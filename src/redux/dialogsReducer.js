const SEND_MESSAGE = 'SEND-MESSAGE';
const CHANGE_MESSAGES_TEXTAREA_VALUE = 'CHANGE-MESSAGES-TEXTAREA-VALUE';

let initialState = {
    dialogsData: [
        { name: 'AntiHype', id: 1 },
        { name: 'Dark5665', id: 2 },
        { name: 'UlukUluk', id: 3 },
        { name: 'МЯКИШ', id: 4 },
        { name: 'Перчик', id: 5 },
        { name: 'Марио', id: 6 },
        { name: 'Жопыч', id: 7 }
    ],

    messagesState: {
        messagesData: [
            { message: 'Прив че дел', time: '21:14', id: 1, className: 'outcoming' },
            { message: 'Приват', id: 2, time: '21:14', className: 'incoming' }
        ],

        textareaValue: '',
        messagesInputClass: ''
    }
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MESSAGES_TEXTAREA_VALUE:                   // Изменение значения текстерии в диалогах

            return {
                ...state,
                messagesState: {
                    ...state.messagesState,
                    textareaValue: action.text
                }
            };

        case SEND_MESSAGE:                                                          // Отправка сообщения

            let date = new Date(),
                messageObject = {
                    message: action.message,
                    id: state.messagesState.messagesData.length + 1,
                    time: `${date.getHours()}:${date.getMinutes()}`,
                    className: action.className
                };

            return {
                ...state,
                messagesState: {
                    ...state.messagesState,
                    messagesData: [...state.messagesState.messagesData, messageObject],
                    textareaValue: ''
                }
            };

        default:
            return state;
    }
}

export const sendMessageActionCreator = (className, message) => ({
    type: SEND_MESSAGE,
    className,
    message
});
export const changeMessagesTextareaValueActionCreator = (text) => ({
    type: CHANGE_MESSAGES_TEXTAREA_VALUE,
    text: text,
});

export default dialogsReducer;