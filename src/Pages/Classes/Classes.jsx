import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button } from '@material-tailwind/react';
import { getAllClassesAPI } from '../../api/classApi';
import { useMutation, useQuery } from 'react-query'
import useAuth from '../../hooks/useAuth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { classSelectAPI } from '../../api/userApi';
import {toast} from "react-hot-toast"
const Classes = () => {

  const { user } = useAuth();
  const navigate = useNavigate()
  const location = useLocation();

  const { data: classes, isLoading, isError, isSuccess } = useQuery("classes", getAllClassesAPI)

  if (isLoading) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
  }

  const userSelectClassMutation = useMutation(classSelectAPI, {
    onSuccess: () => {
      toast.success("Class Added to your selected List")
    }
  })

  const selectCourse = (course) => {
    console.log(user)
    if (!user) {
      navigate("/login")
    }
    const data = {user:user.email,class:course};
    // console.log(data)
    userSelectClassMutation.mutate(data)

  }
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-16">All Classes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

        {classes.length === 0 &&
          <p className='text-red-500'>No Classes Found yet, Ask Admin to add Classes</p>
        }
        {classes.map((course, index) => (
          <Card key={index} className={course?.availableSeats === 0 ? 'bg-red-100' : 'bg-white'}>
            <CardHeader className="flex items-center justify-center">
              <img src={course?.image} alt={course?.name} className="w-full h-48" />
            </CardHeader>
            <CardBody>
              <h3 className="text-lg font-bold mb-2">{course?.name}</h3>
              <p className="text-gray-600 mb-2">Instructor: {course?.instructor}</p>
              <p className="text-gray-600 mb-2">Available Seats: {course?.availableSeats}</p>
              <p className="text-gray-600 mb-4">Price: ${course?.price}</p>
            </CardBody>
            <CardFooter>
              <Button
                onClick={() => selectCourse(course)}
                color="blue"
                ripple="light"
                size="sm"
                disabled={course?.availableSeats === 0 || user?.role === 'instructor' || user?.role === 'admin'}
              >
                Select
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Classes;
