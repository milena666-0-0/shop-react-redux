import axios from 'axios';

import {localStorageKeys} from '../constants/localStorageKeys';

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

export default api;