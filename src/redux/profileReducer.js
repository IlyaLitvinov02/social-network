import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const CHANGE_TEXTAREA_VALUE = 'CHANGE-TEXTAREA-VALUE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_LOADING = 'SET_LOADING';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    isLoading: true,

    profileState: {
        userProfile: null,
        status: ""
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
                postObject = {
                    id: state.myPostsState.postData.length + 1,
                    text: state.myPostsState.textareaValue,
                    time: `${date.getHours()}:${date.getMinutes()}`
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
        case SET_STATUS:
            return {
                ...state,
                profileState: {
                    ...state.profileState,
                    status: action.status
                }
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const changeTextareaValueActionCreator = (text) => ({ type: CHANGE_TEXTAREA_VALUE, text });
export const setUserProfile = userProfile => ({ type: SET_USER_PROFILE, userProfile });
export const setLoading = isLoading => ({ type: SET_LOADING, isLoading });
export const setStatus = status => ({ type: SET_STATUS, status })

export const getUserProfile = userId => dispatch => {
    dispatch(setLoading(true));
    profileAPI.getUserProfile(userId).then(data => {
        dispatch(setLoading(false));
        dispatch(setUserProfile(data));
    });
}

export const getStatus = userId => dispatch => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
}

export const updateStatus = status => dispatch => {
    profileAPI.updateStatus(status).then((response) =>{
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
}

export default profileReducer;