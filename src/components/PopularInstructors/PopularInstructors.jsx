import React, {useState,useEffect} from 'react';
import { axiosSecure } from '../../axiosInstance/axiosInstance';

const PopularInstructors = () => {
    
    const [instructors,setInstructors]= useState([]);
    useEffect(()=>{
        const getPopularInstructors = async ()=>{
            const res = await axiosSecure.get("/popular-instructors");
            console.log(res.data)
            setInstructors(res.data);

        }
        getPopularInstructors();

    },[])
    // Sort instructors based on the number of students (descending order)
  
    return (
        <div className="container mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-12 text-center">Popular Instructors</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {instructors && instructors.slice(0, 6).map((instructor, index) => (
                    <div key={index} className="bg-white rounded-md p-4 shadow-md">
                        <div className="relative flex justify-center items-center">
                            <div className="rounded-full overflow-hidden w-24 h-24">
                                <img
                                    src={instructor.photoUrl || ''}
                                    alt={`Instructor ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                      
                        </div>
                        <div className="mt-6">
                            <h3 className="text-lg font-bold mb-2">{instructor.name}</h3>
                            <p className="text-gray-600">{instructor.students} students</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularInstructors;
