import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}


export const setAuthUserData = (userId, login, email, isAuth) => ({ type: SET_AUTH_USER_DATA, payload: { userId, login, email, isAuth } });



export const getAuthUserData = () => dispatch => {
    return authAPI.getAuthUserData().then(data => {
        if (data.resultCode === 0) {
            const { id, login, email } = data.data;
            dispatch(setAuthUserData(id, login, email, true));
        }
    });
}

export const logIn = (email, password, rememberMe) => dispatch => {
    console.log(email, password, rememberMe);
    authAPI.logIn(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            dispatch(stopSubmit('login', { _error: response.data.messages[0] }));
        }
    });
}

export const logOut = () => dispatch => {
    authAPI.logOut().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
}

export default authReducer;