import React, { useState } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useQuery } from 'react-query';
import { userSelectedClassesAPI } from '../../api/userApi';
import { axiosSecure } from '../../axiosInstance/axiosInstance';
import {toast} from "react-hot-toast"
const SelectedClassList = () => {
    // Generate fake class data
    const classData = [
        {
            id: 1,
            name: 'Yoga Class 1',
        },
        {
            id: 2,
            name: 'Pilates Class 1',
        },
        {
            id: 3,
            name: 'Zumba Class 1',
        },
    ];

    const [selectedClasses, setSelectedClasses] = useState([])


    const selectedClassesQuery = useQuery("selected-classes",userSelectedClassesAPI,{
        onSuccess:(res)=>{

            setSelectedClasses(res)

        }
    });

    const handleDelete = async (classId) => {
        // Handle delete action
        try{
            console.log(`Delete class with ID: ${classId}`);
            const res = await axiosSecure.delete(`/delete-class/${classId}`);
            selectedClassesQuery.refetch();
            toast.success("Removed The class")
        }catch(e){
            console.log(e)
        }
    };

    const handlePay = (classId) => {
        // Handle pay action
        console.log(`Pay for class with ID: ${classId}`);
    };

    return (
        <div className="bg-white shadow-md  p-4">
            <h2 className="text-2xl font-bold mb-4">Selected Classes</h2>
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="text-left">Class Name</th>
                        <th className="text-right">Amount</th>
                        <th className="text-right">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedClasses.map((classItem) => (
                        <tr key={classItem._id} className='mb-2 border-b-2'>
                            <td className="py-2">{classItem.class.name}</td>
                            <td className="text-right py-2">${classItem.class.price}</td>
                            <td className="text-right">
                                <button
                                    className="text-red-500 hover:text-red-700 mr-2"
                                    onClick={() => handleDelete(classItem._id)}
                                >
                                    <TrashIcon className="h-5 w-5" />
                                </button>
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                                    onClick={() => handlePay(classItem._id)}
                                >
                                    Pay
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SelectedClassList;
