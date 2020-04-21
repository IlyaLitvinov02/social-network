import Axios from "axios";

const instance = Axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "5b06526d-6297-422b-bd6d-f4b62933db93"
    }
});



export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    async follow(userId) {
        const response = await instance
            .post(`follow/${userId}`);
        return response.data;
    },

    unfollow(userId) {
        return instance
            .delete(`follow/${userId}`)
            .then(response => response.data);
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
            .put(`profile/status`, { status });
    }
}

export const authAPI = {
    getAuthUserData() {
        return instance
            .get('auth/me')
            .then(response => response.data);
    },

    logIn(email, password, rememberMe) {
        return instance
            .post('auth/login', { email, password, rememberMe });
    },

    logOut() {
        return instance
            .post('auth/logout');
    }
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

    postMessage(userId, message) {
        return instance
            .post(`dialogs/${userId}/messages`, { message });
    }
}