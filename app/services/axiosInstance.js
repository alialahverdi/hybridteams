import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://ffrhqp-3000.csb.app/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

const getUserInfo = async () => {
    const value = await localStorage.getItem('token');
    return token = JSON.parse(value);
}

axiosInstance.interceptors.request.use(async config => {
    const token = await getUserInfo();
    if (token != null) {
        config.headers['Authorization'] = token;
    }
    return config;
});

axiosInstance.interceptors.response.use(res => {
    return res.data;
}, (error) => {
    const { data } = error.response;
    return Promise.reject(data);
});


export default axiosInstance;