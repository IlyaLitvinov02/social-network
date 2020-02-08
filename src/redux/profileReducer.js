const ADD_POST = 'ADD-POST';
const CHANGE_TEXTAREA_VALUE = 'CHANGE-TEXTAREA-VALUE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_LOADING = 'SET_LOADING';


let initialState = {
    profileState: {
        isLoding: false,
        userProfile: null
    },

    myPostsState: {
        postData: [
            { id: 1, text: 'I am Batman', time: '21:03' },
            { id: 2, text: 'I am Batman', time: '21:02' },
            { id: 3, text: 'I am Batman', time: '21:01' }
        ],

        textareaValue: ''
    }
};



const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TEXTAREA_VALUE:                            // Изменение значения текстерии
            return {
                ...state,
                myPostsState: {
                    ...state.myPostsState,
                    textareaValue: action.text
                }
            };
        case ADD_POST:                                                           // Добавление поста
            let date = new Date(),
                hours = date.getHours(),
                minutes = date.getMinutes(),
                time = `${hours}:${minutes}`;
            let postObject = {
                id: state.myPostsState.postData.length + 1,
                text: state.myPostsState.textareaValue,
                time: time
            };
            return {
                ...state,
                myPostsState: {
                    ...state.myPostsState,
                    postData: [
                        postObject,
                        ...state.myPostsState.postData
                    ],

                    textareaValue: ''
                }
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profileState: {
                    ...state.profileState,
                    userProfile: { ...action.userProfile }
                }
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: !state.isLoading
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const changeTextareaValueActionCreator = (text) => ({ type: CHANGE_TEXTAREA_VALUE, text });
export const setUserProfile = userProfile => ({ type: SET_USER_PROFILE, userProfile });
export const setLoading = () => ({ type: SET_LOADING });


export default profileReducer;