import axios from 'axios';


export const axiosSecure = axios.create({
    baseURL: 'https://yoga-school-server-mahbubnishan.vercel.app'
});

axiosSecure.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("access-token");
        // console.log(token)
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }

)

axiosSecure.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            localStorage.removeItem("access-token");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
)
