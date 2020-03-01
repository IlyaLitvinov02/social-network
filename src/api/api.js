import Axios from "axios";

const instance = Axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "ef471c80-3236-4ae4-a4c3-6b4bd90f34c5"
    }
});



export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    follow(userId) {
        return instance
            .post(`follow/${userId}`)
            .then(response => response.data)
    },

    unfollow(userId) {
        return instance
            .delete(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance
            .get(`profile/${userId}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    getAuthUserData() {
        return instance
            .get('auth/me')
            .then(response => response.data)
    }
}