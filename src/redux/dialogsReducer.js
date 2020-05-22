import { dialogsAPI } from "../api/api";

const POST_MESSAGE_SUCCESS = 'dialogsReducer/POST_MESSAGE_SUCCESS';
const SET_DIALOGS = 'dialogsReducer/SET_DIALOGS';
const SET_MESSAGES = 'dialogsReducer/SET_MESSAGES';
const SET_LOADING = 'dialogsReducer/SET_LOADING';


let initialState = {
    dialogsData: [],
    messagesData: [],
    dialogsIsLoading: false,
    messagesIsLoading: false
};


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DIALOGS:
        case SET_MESSAGES:
        case SET_LOADING:
            return {
                ...state,
                ...action.payload
            }
        case POST_MESSAGE_SUCCESS:
            return {
                ...state,
                messagesData: [...state.messagesData, action.message],
            };

        default:
            return state;
    }
}


export const setMessages = messages => ({ type: SET_MESSAGES, payload: { messagesData: [...messages] } });
export const postMessageSuccess = message => ({ type: POST_MESSAGE_SUCCESS, message });
export const setDialogs = dialogs => ({ type: SET_DIALOGS, payload: { dialogsData: [...dialogs] } });
export const setDialogsLoading = dialogsIsLoading => ({ type: SET_LOADING, payload: { dialogsIsLoading } });
export const setMessagesLoading = messagesIsLoading => ({ type: SET_LOADING, payload: { messagesIsLoading } });



export const getDialogs = () => async dispatch => {
    dispatch(setDialogsLoading(true));

    const response = await dialogsAPI.getDialogs();

    dispatch(setDialogs(response.data));
    dispatch(setDialogsLoading(false));
    console.log(response);
}

export const startChat = userId => async dispatch => {
    const response = await dialogsAPI.startChat(userId);
    console.log(response);
}

export const getMessages = userId => async dispatch => {
    dispatch(setMessagesLoading(true))

    const response = await dialogsAPI.getMessages(userId);
    dispatch(setMessages(response.data.items));
    dispatch(setMessagesLoading(false));
    console.log(response);
}

export const postMessage = (userId, message) => async dispatch => {
    const response = await dialogsAPI.postMessage(userId, message);
    console.log(response);
    if (response.data.resultCode === 0) {
        dispatch(postMessageSuccess(response.data.data.message))
    }
}

export const getNewMessages = () => async dispatch => {
    //const response = await dialogsAPI.getNewMessages();

    // if (response.status == 502) {
    //   // Status 502 is a connection timeout error,
    //   // may happen when the connection was pending for too long,
    //   // and the remote server or a proxy closed it
    //   // let's reconnect
    //   dispatch(getNewMessages());
    // } else if (response.status != 200) {
    //   // An error - let's show it
    //   console.log(response.statusText);
    //   // Reconnect in one second
    //   await new Promise(resolve => setTimeout(resolve, 1000));
    //   dispatch(getNewMessages());
    // } else {
    //   // Get and show the message
    //   let message = response.text;
    //   console.log(message);
    //   // Call subscribe() again to get the next message
    //   dispatch(getNewMessages());
    // }
}


export default dialogsReducer;