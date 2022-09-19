import axios from "axios";

const instance = axios.create({
    // withCredentials: true,
    baseURL: 'http://localhost:3001/'
});

export const loginAPI = {
    login(email, password) {
        return instance.post(`/login`, {email, password});
    }
}

export const registerAPI = {
    register(email, password) {
        return instance.post(`register`, {email, password});
    }
}

export const cigarsAPI = {
    bolivar(currentPage = 1) {
        return instance.get(`bolivar?page=${currentPage}`);
    },
    cohiba(currentPage = 1) {
        return instance.get(`cohiba?page=${currentPage}`);
    }
}
