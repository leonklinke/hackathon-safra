import axios from 'axios';
import { getToken } from "./auth";

// const Env = use('Env')
const BASEURL = (!process.env.REACT_APP_API_URL ? 'http://localhost:83' : process.env.REACT_APP_API_URL)

const api = axios.create({
    baseURL: BASEURL
})

api.interceptors.request.use(async config => {
    const token = await getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;