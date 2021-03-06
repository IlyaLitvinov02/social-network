import { getAuthUserData } from "./authReducer";

const INITIALIZE_SUCCESSED = 'appReducer/INITIALIZE_SUCCESSED';

const initialState = {
    initialized: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_SUCCESSED:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
}

const initializeSuccessed = () => ({ type: INITIALIZE_SUCCESSED });


export const initialize = () => dispatch => {
    dispatch(getAuthUserData()).then(() => {
        dispatch(initializeSuccessed());
    });
}