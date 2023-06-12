import { axiosSecure } from "../axiosInstance/axiosInstance"

export const getAllClassesAPI = async ()=>{
    const res = await axiosSecure.get("/all-classes");
    return res.data
}

export const updateClassStatusAPI = async (data)=>{
    const {id,status} = data;
    const res = await axiosSecure.patch(`/update-class/${id}`,{status});
    return res.data
}

export const addFeedBackAPI = async (data)=>{
    const {id,feedback} = data;
    const res = await axiosSecure.patch(`/add-feedback/${id}`,{feedback});
    return res.data;
}

export const getAllUsersAPI = async ()=>{
    const res = await axiosSecure.get("/users");
    return res.data;
}

export const updateUserRoleAPI = async (data)=>{
    const {id,role}=data;
    const res = await axiosSecure.patch(`/update-user/${id}`,{role});
    return res.data;
}