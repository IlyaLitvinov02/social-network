import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_IS_LOGGED = 'SET_IS_LOGGED';
const DEAUTHORIZATION = 'DEAUTHORIZATION';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    isLogged: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.authUserData,
                isAuth: true
            };
        case SET_IS_LOGGED:
            return {
                ...state,
                isLogged: action.isLogged
            }
        case DEAUTHORIZATION:
            return {
                ...state,
                isAuth: false
            }
        default:
            return state;
            }
    }


    export const setAuthUserData = (userId, login, email) => ({ type: SET_AUTH_USER_DATA, authUserData: { userId, login, email } });
    export const deauthorization = () => ({ type: DEAUTHORIZATION })
    export const setIsLogged = isLogged => ({ type: SET_IS_LOGGED, isLogged });



    export const getAuthUserData = () => dispatch => {
        authAPI.getAuthUserData().then(data => {
            if (data.resultCode === 0) {
                let { id, login, email } = data.data;
                dispatch(setAuthUserData(id, login, email));
            }
        });
    }

    export const logIn = (email, password, rememberMe) => (dispatch) => {
        authAPI.logIn(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setIsLogged(true));
            }
        });
    }

    export const logOut = () => dispatch => {
        authAPI.logOut().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(deauthorization());
            }
        });
    }

    export default authReducer;