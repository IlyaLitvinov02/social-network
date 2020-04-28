import { profileAPI } from "../api/api";

const
    SET_USER_PROFILE = 'profileReducer/SET_USER_PROFILE',
    SET_LOADING = 'profileReducer/SET_LOADING',
    SET_AUTHED_USER_PHOTOS = 'profileReducer/SET_AUTHED_USER_PHOTOS',
    SET_STATUS = 'profileReducer/SET_STATUS';

let initialState = {
    isLoading: false,

    profileState: {
        userProfile: null,
        status: ""
    },
};



const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                profileState: {
                    ...state.profileState,
                    userProfile: { ...action.userProfile }
                }
            };
        case SET_STATUS:
            return {
                ...state,
                profileState: {
                    ...state.profileState,
                    status: action.status
                }
            };
        case SET_AUTHED_USER_PHOTOS:
            return {
                ...state,
                profileState: {
                    ...state.profileState,
                    userProfile: {
                        ...state.profileState.userProfile,
                        photos: { ...action.photos }
                    }
                }
            };
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        default:
            return state;
    }
}


export const setUserProfile = userProfile => ({ type: SET_USER_PROFILE, userProfile });
export const setLoading = isLoading => ({ type: SET_LOADING, isLoading });
export const setStatus = status => ({ type: SET_STATUS, status });
export const setAuthedUserPhotos = photos => ({ type: SET_AUTHED_USER_PHOTOS, photos })

export const getUserProfile = userId => async dispatch => {
    dispatch(setLoading(true));
    const response = await profileAPI.getUserProfile(userId);

    dispatch(setLoading(false));
    dispatch(setUserProfile(response.data));
}

export const getStatus = userId => async dispatch => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = status => async dispatch => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const uploadPhoto = formData => async dispatch => {
    const response = await profileAPI.uploadPhoto(formData);
    if (response.data.resultCode === 0) {
        dispatch(setAuthedUserPhotos(response.data.data.photos));
    }
}

export default profileReducer;