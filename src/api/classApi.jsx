import { axiosSecure } from "../axiosInstance/axiosInstance";

export const getAllClassesAPI = async ()=>{
    const res = await axiosSecure.get('/classes');
    return res.data;
}