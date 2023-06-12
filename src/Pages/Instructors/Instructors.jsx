import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button } from "@material-tailwind/react";
import { getAllInstructorsAPI } from '../../api/instructorApi';

import { useQuery } from 'react-query';

const Instructors = () => {


  const {data:instructors,isLoading,isError,isSuccess} = useQuery("instructors",getAllInstructorsAPI)
  // const instructors = [
  //   {
  //     image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  //     name: 'Instructor 1',
  //     email: 'instructor1@example.com',
  //     classesTaken: 5,
  //     classes: ['Class A', 'Class B', 'Class C'],
  //   },
  //   {
  //     image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  //     name: 'Instructor 2',
  //     email: 'instructor2@example.com',
  //     classesTaken: 3,
  //     classes: ['Class D', 'Class E'],
  //   },
  //   {
  //     image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  //     name: 'Instructor 3',
  //     email: 'instructor3@example.com',
  //     classesTaken: 2,
  //     classes: ['Class F'],
  //   },
  // ];
  const placeholder = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-16">All Instructors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {instructors && instructors.map((instructor, index) => (
          <Card key={index} className="bg-white">
            <div className="flex items-center justify-center">
              <img src={instructor?.photoUrl || placeholder} alt={instructor?.name} className="w-40 h-40 object-cover rounded-full" />
            </div>
            <CardBody>
              <h3 className="text-xl font-bold mb-2">{instructor?.name}</h3>
              <p className="text-gray-600 mb-2">{instructor?.email}</p>
              <p className="text-gray-600 mb-4">Classes taken: {instructor?.classCount}</p>
              <div className="flex flex-wrap">
                {instructor?.classes && instructor?.classes.map((className, classIndex) => (
                  <span key={classIndex} className="bg-blue-500 text-white rounded-full px-4 py-2 text-sm mr-2 mb-2">
                    {className}
                  </span>
                ))}
              </div>
            </CardBody>
            <CardFooter>
              <Button color="blue" ripple="light" size="sm">
                See Classes
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
