import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getPopularClassesAPI } from '../../api/userApi';


const PopularClasses = () => {
  const [classes, setClasses] = useState([])
  const getPopularClassesQuery = useQuery("top-classes",getPopularClassesAPI, {
    onSuccess: data => {
      setClasses(data)
    }
  });



  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-8 text-center">Popular Classes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {classes.map((classItem, index) => (
          <div key={index} className="bg-white rounded-md p-4 shadow-md">
            <img src={classItem.image} alt={classItem.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-bold mb-2">{classItem.name}</h3>
            <p className="text-gray-600 mb-2">${classItem.price}</p>
            <p className="text-gray-600 mb-2">{classItem.students} students</p>
            <p className="text-gray-600 mb-2">Rating: {classItem.rating}</p>
            <p className="text-gray-600 mb-2">instructor: {classItem.instructor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
