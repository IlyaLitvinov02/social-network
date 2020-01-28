import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {

    _state: {

        profilePage: {
            myPostsState: {
                postData: [
                    { id: 1, text: 'I am Batman' },
                    { id: 2, text: 'I am Batman' },
                    { id: 3, text: 'I am Batman' }
                ],

                textareaValue: ''
            }
        },

        dialogsPage: {
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
                    { message: 'Прив че дел', id: 1, className: 'outcoming' },
                    { message: 'Приват', id: 2, className: 'incoming' },
                    { message: 'Го в колду', id: 3, className: 'outcoming' }

                ],

                textareaValue: ''
            }
        }
    },

    _callSubscriber() {
        console.log('state was changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {  //  action { type: 'ADD-POST'}

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber();

    }
}



export default store;