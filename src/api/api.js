import Axios from "axios";
import moment from "moment";

const instance = Axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "5b06526d-6297-422b-bd6d-f4b62933db93"
    }
});



export const usersAPI = {
    async getUsers(page, pageSize, term ) {
        const response = await instance
            .get(`users?page=${page}&count=${pageSize}${term ? '&term=' + term : ''}`);
        return response.data;
    },

    async follow(userId) {
        const response = await instance
            .post(`follow/${userId}`);
        return response.data;
    },

    async unfollow(userId) {
        const response = await instance
            .delete(`follow/${userId}`);
        return response.data;
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance
            .get(`profile/${userId}`);
    },

    getStatus(userId) {
        return instance
            .get(`profile/status/${userId}`);
    },

    updateStatus(status) {
        return instance
            .put('profile/status', { status });
    },

    uploadPhoto(formData) {
        return instance
            .put('profile/photo', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
    },

    updateProfile(dataObject) {
        return instance
            .put('profile', dataObject);
    }
}

export const authAPI = {
    getAuthUserData() {
        return instance
            .get('auth/me')
            .then(response => response.data);
    },

    logIn(email, password, rememberMe, captcha) {
        return instance
            .post('auth/login', { email, password, rememberMe, captcha });
    },

    logOut() {
        return instance
            .post('auth/logout');
    },
}


export const dialogsAPI = {
    startChat(userId) {
        return instance
            .put(`dialogs/${userId}`);
    },

    getDialogs() {
        return instance
            .get('dialogs');
    },

    getMessages(userId) {
        return instance
            .get(`dialogs/${userId}/messages`);
    },

    postMessage(userId, body) {
        return instance
            .post(`dialogs/${userId}/messages`, { body });
    },

    getNewMessages(userId = 2) {
        const date = moment.utc().format('YYYY-MM-DDThh:mm:ss');
        return instance
            .get(`dialogs/${userId}/messages/new?newerThen=${date}`) 
    },

}

export const securityAPI = {
    getCaptchaUrl() {
        return instance
            .get('security/get-captcha-url');
    }
}
