import { axiosSecure } from "../axiosInstance/axiosInstance";

export const createUserAPI = async (data) => {
    const res = await axiosSecure.post('/users', data);
    return res.data;
}

export const classSelectAPI = async (data)=>{
    const res = await axiosSecure.post("/select-class",data);
    return res.data
}

export const userSelectedClassesAPI = async ()=>{
    const res = await axiosSecure.get("/selected-classes");
    return res.data;
}

export const getPopularClassesAPI = async ()=>{
    const res = await axiosSecure.get("/top-classes");
    return res.data
}

