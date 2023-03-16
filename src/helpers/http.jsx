import axios from 'axios'

const httpInstance = axios.create({
    baseURL: ""
});

httpInstance.interceptors.request.use(
    config => {
        return config
    },
    error => Promise.reject(error)
);

export default httpInstance;