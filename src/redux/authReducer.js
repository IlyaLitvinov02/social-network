import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";


const SET_AUTH_USER_DATA = 'authReducer/SET_AUTH_USER_DATA';
const SET_CAPTCHA_URL = 'authReducer/SET_CAPTCHA_URL';


let initialState = {
    userId: null,
    login: null,
    email: null,
    captchaUrl: null,  // captcha is not required if captchaUrl is null
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
        case SET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}




export const setAuthUserData = (userId, login, email, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    payload: { userId, login, email, isAuth }
});
const setCaptchaUrl = captchaUrl => ({ type: SET_CAPTCHA_URL, payload: { captchaUrl } });



export const getAuthUserData = () => async dispatch => {
    const data = await authAPI.getAuthUserData();

    if (data.resultCode === 0) {
        const { id, login, email } = data.data;
        dispatch(setAuthUserData(id, login, email, true));
    }
}

export const logIn = (email, password, rememberMe, captcha) => async dispatch => {
    const response = await authAPI.logIn(email, password, rememberMe, captcha);
    const resultCode = response.data.resultCode;
    if (resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        dispatch(stopSubmit('login', { _error: response.data.messages[0] }));
        if (resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
    }
}

export const logOut = () => async dispatch => {
    const response = await authAPI.logOut();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export const getCaptchaUrl = () => async dispatch => {
    const response = await securityAPI.getCaptchaUrl();

    dispatch(setCaptchaUrl(response.data.url));
}

export default authReducer;