import { axiosSecure } from "../axiosInstance/axiosInstance";




export const getAllInstructorsAPI = async () => {
    const res = await axiosSecure.get('/instructors');
    return res.data;
}
export const addClassAPI = async (data) => {
    const res = await axiosSecure.post('/add-class', data);
    return res.data;
}

export const getClassesAPI = async () => {
  
    
    const res = await axiosSecure.get(`/my-classes`);
    // console.log(res)
    return res.data;
}