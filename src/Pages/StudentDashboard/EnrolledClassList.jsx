import React from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';

const EnrolledClassList = () => {
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

    const handleDelete = (classId) => {
        // Handle delete action
        console.log(`Delete class with ID: ${classId}`);
    };

    const handlePay = (classId) => {
        // Handle pay action
        console.log(`Pay for class with ID: ${classId}`);
    };

    return (
        <div className="bg-white shadow-md  p-4">
            <h2 className="text-2xl font-bold mb-4">Enrolled Classes</h2>
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="text-left">Class Name</th>
                        <th className="text-right">Amount</th>
                        <th className="text-right">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {classData.map((classItem) => (
                        <tr key={classItem.id} className='mb-2 border-b-2'>
                            <td className="py-2">{classItem.name}</td>
                            <td className="text-right py-2">$19.99</td>
                            <td className="text-right">
                                <button
                                    className="text-red-500 hover:text-red-700 mr-2"
                                    onClick={() => handleDelete(classItem.id)}
                                >
                                    <TrashIcon className="h-5 w-5" />
                                </button>
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                                    onClick={() => handlePay(classItem.id)}
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

export default EnrolledClassList;
