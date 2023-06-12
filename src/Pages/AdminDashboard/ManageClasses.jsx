import React, { useState } from 'react';
import { Button, } from '@material-tailwind/react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useMutation, useQuery } from 'react-query';
import { addFeedBackAPI, getAllClassesAPI, updateClassStatusAPI } from '../../api/adminApi';
import { toast } from "react-hot-toast"
const ManageClasses = () => {

    const [showModal, setShowModal] = useState(false);
    const [selectedClass, setSelectedClass] = useState(null);
    const [classes, setClasses] = useState([])
    const [feedback,setFeedback] = useState("")
    const { data, isLoading, isSuccess, refetch } = useQuery("all-classes", getAllClassesAPI, {
        onSuccess: (res) => {
            setClasses(res)
        }
    });

    const updateClassStatusMutation = useMutation({
        mutationKey: ["update-class"],
        mutationFn: updateClassStatusAPI,
        onSuccess: () => {
            toast.success("Updated course status");
            refetch()
        }
    })
    
    const addFeedbackMutation = useMutation({
        mutationKey: ["feedback"],
        mutationFn: addFeedBackAPI,
        onSuccess: () => {
            toast.success("Sent Feedback");
            refetch()
        }
    })


    const handleApprove = (classId) => {
        // Handle class approval logic
        updateClassStatusMutation.mutate({
            id: classId,
            status: "approved"
        })
        console.log(`Approve class with ID ${classId}`);

    };

    const handleDeny = (classId) => {
        // Handle class denial logic
        updateClassStatusMutation.mutate({
            id: classId,
            status: "denied"
        })
        console.log(`Deny class with ID ${classId}`);
    };


    const handleSendFeedback = (classId) => {
        // Open the modal and set the selected class
        setShowModal(true);
        setFeedback("")
        setSelectedClass(classId);
    };

    const handleCloseModal = () => {
        // Close the modal and clear the selected class
        setShowModal(false);
        setSelectedClass(null);
    };
    const sendFeedback = async ()=>{
        console.log(feedback);
        console.log(selectedClass)
        addFeedbackMutation.mutate({
            id:selectedClass,
            feedback
        })


    }
    return (
        <>
            <div className="container mx-auto py-8">
                <h2 className="text-2xl font-bold mb-4">Manage Classes</h2>
                <table className="w-full border border-gray-300">
                    <thead>
                        <tr>
                            <th className="p-4 border-b">Class Image</th>
                            <th className="p-4 border-b">Class Name</th>
                            <th className="p-4 border-b">Instructor Name</th>
                            <th className="p-4 border-b">Instructor Email</th>
                            <th className="p-4 border-b">Available Seats</th>
                            <th className="p-4 border-b">Price</th>
                            <th className="p-4 border-b">Status</th>
                            <th className="p-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((classItem) => (
                            <tr key={classItem._id}>
                                <td className="p-4 border-b">
                                    <img src={classItem.image} alt={classItem.name} className="w-24 h-16" />
                                </td>
                                <td className="p-4 border-b">{classItem.name}</td>
                                <td className="p-4 border-b">{classItem.instructor}</td>
                                <td className="p-4 border-b">{classItem.instructorEmail}</td>
                                <td className="p-4 border-b">{classItem.availableSeats}</td>
                                <td className="p-4 border-b">{classItem.price}</td>
                                <td className="p-4 border-b">{classItem.status}</td>
                                <td className="p-4 border-b">

                                    <div className=' gap-2 flex'>
                                        <Button
                                            disabled={classItem.status === 'denied' || classItem.status === 'approved'}
                                            color="green"
                                            size="sm"
                                            rounded={false}
                                            ripple="light"
                                            onClick={() => handleApprove(classItem._id)}
                                        >
                                            <CheckIcon className="w-4 h-4" />
                                        </Button>
                                        <Button
                                            disabled={classItem.status === 'denied' || classItem.status === 'approved'}
                                            color="red"
                                            size="sm"
                                            rounded={false}
                                            ripple="light"
                                            onClick={() => handleDeny(classItem._id)}
                                        >
                                            <XMarkIcon className="w-4 h-4" />
                                        </Button>
                                        <Button
                                            disabled={classItem.feedback}
                                            color="blue"
                                            size="sm"
                                            rounded={false}
                                            ripple="light"
                                            onClick={() => handleSendFeedback(classItem._id)}
                                        >
                                            Feedback
                                        </Button>


                                    </div>
                                    <p className='text-xs pt-2'>
                                        {
                                            classItem?.feedback
                                        }
                                    </p>


                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>



            </div>

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none border transition-all ease-linear duration-300">
                    <div className="relative z-50 mx-auto w-[550px] bg-white rounded shadow-lg border">
                        <div className="flex items-start justify-between p-5 border-b border-gray-300 rounded-t">
                            <h3 className="text-xl font-bold">Send Feedback</h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={handleCloseModal}
                            >
                                <span className="bg-transparent text-black opacity-50 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        <div className="relative p-6">
                            {selectedClass && (
                                <div>
                                   
                                    <textarea
                                        value={feedback}
                                        onChange={(e)=>setFeedback(e.target.value)}
                                        className="w-full h-24 p-4 border border-gray-300 rounded-md resize-none"
                                        placeholder="Enter your feedback..."
                                    ></textarea>
                                </div>
                            )}
                        </div>
                        <div className="flex items-center justify-end p-6 border-t border-gray-300 rounded-b">
                            <Button
                                color="blue"
                                size="regular"
                                rounded={false}
                                ripple="light"
                                onClick={sendFeedback}
                            >
                                Send
                            </Button>
                            <Button
                                color="gray"
                                size="regular"
                                rounded={false}
                                ripple="light"
                                onClick={handleCloseModal}
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>
                    <div className="absolute w-full z-40 h-full bg-black opacity-50"></div>
                </div>
            )}
        </>
    );
};

export default ManageClasses;
