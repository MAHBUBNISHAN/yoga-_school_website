import React from 'react'
import { useForm } from 'react-hook-form';
import { Input, Button } from '@material-tailwind/react';
import useAuth from '../../hooks/useAuth';
import { useMutation } from 'react-query';
import { addClassAPI } from '../../api/instructorApi';
import {toast} from 'react-hot-toast';

const AddClass = () => {
    const { register, handleSubmit, formState: { errors },reset } = useForm();

 
    const {user} = useAuth();

    const addClassMutation = useMutation(addClassAPI, {
        onSuccess: () => {
            // Invalidate and refetch
            toast.success('Class added successfully');
        }
    });

    const onSubmit = (data) => {
        // console.log({...data});
        const classData = {
            ...data,
            instructor:user.name,
            instructorEmail:user.email,
            status:'pending',
            students:0

        }
        console.log(classData)
        addClassMutation.mutate(classData);
        reset()
        // Handle form submission and create class
    };

 

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4">Add a Class</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-4 mb-5">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                            Class Name
                        </label>
                        <Input
                            type="text"
                            id="name"
                            {...register('name', { required: true })}
                            color="blue"
                            size="regular"
                        />
                        {errors.name && <span className="text-red-500">Class name is required</span>}
                    </div>

                    <div>
                        <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
                            Class Image
                        </label>
                        <Input
                            type="text"
                            id="image"
                            {...register('image', { required: true })}
                            color="blue"
                            size="regular"
                        />
                        {errors.image && <span className="text-red-500">Class image is required</span>}
                    </div>

                    <div>
                        <label htmlFor="instructorName" className="block text-gray-700 font-bold mb-2">
                            Instructor Name
                        </label>
                        <Input
                            type="text"
                            id="instructorName"
                            value={user.name}
                            readOnly
                            color="blue"
                            size="regular"
                        />
                    </div>

                    <div>
                        <label htmlFor="instructorEmail" className="block text-gray-700 font-bold mb-2">
                            Instructor Email
                        </label>
                        <Input
                            type="text"
                            id="instructorEmail"
                            value={user.email}
                            readOnly
                            color="blue"
                            size="regular"
                        />
                    </div>

                    <div>
                        <label htmlFor="availableSeats" className="block text-gray-700 font-bold mb-2">
                            Available Seats
                        </label>
                        <Input
                            type="number"
                            id="availableSeats"
                            {...register('availableSeats', { required: true, min: 1 })}
                            color="blue"
                            size="regular"
                        />
                        {errors.availableSeats && (
                            <span className="text-red-500">Available seats must be a positive number</span>
                        )}
                    </div>

                    <div>
                        <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
                            Price
                        </label>
                        <Input
                            type="number"
                            id="price"
                            {...register('price', { required: true, min: 0 })}
                            color="blue"
                            size="regular"
                        />
                        {errors.price && <span className="text-red-500">Price must be a non-negative number</span>}
                    </div>
                </div>

                <Button
                    type="submit"
                    color="blue"
                    buttonType="filled"
                    size="regular"
                    block={false}
                    rounded={false}
                    ripple="light"
                >
                    Add Class
                </Button>
            </form>
        </div>
    );
}

export default AddClass