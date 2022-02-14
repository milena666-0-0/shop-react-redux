import axios from 'axios';

import {localStorageKeys} from '../constants/localStorageKeys';
import AuthService from '../services/authService';

const BASE_URL = 'https://it-shatle-demo-api.herokuapp.com';

const config = {
    baseURL: BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Pragma: "no-cache"
    },
};

const api = axios.create(config);

api.interceptors.request.use((axiosConfig) => {
    const accessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

    axiosConfig.headers.Authorization = `Bearer ${accessToken}`;

    return axiosConfig;
});

api.interceptors.response.use((response) => {
    return response;
}, (errors) => {
    if(errors.response.status === 401) {
        AuthService.logOut();
    };
    return errors;
});

export default api;