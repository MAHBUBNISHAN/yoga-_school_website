import React, {useEffect} from 'react';

import { Button } from '@material-tailwind/react';
import useAuth from '../../hooks/useAuth';
import { getClassesAPI } from '../../api/instructorApi';
import { useQuery } from 'react-query';
const MyClasses = () => {
    const {user} = useAuth();
    const {
        data,
        isLoading,
        isError,
        error,
        isSuccess
    } = useQuery(['my-classes'], getClassesAPI)
  

    if (isLoading) {
        return <div>Loading...</div>
    }

    // console.log(classes);
    // console.group(data)


    return (
        <div className="container mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4">My Classes</h2>
            <table className="w-full border border-gray-300">
                <thead>
                    <tr>
                        <th className="p-4 border-b">Class Name</th>
                        <th className="p-4 border-b">Status</th>
                        <th className="p-4 border-b">Total Enrolled Students</th>
                        <th className="p-4 border-b">Feedback</th>
                        <th className="p-4 border-b">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((classItem) => (
                        <tr key={classItem?._id}>
                            <td className="p-4 border-b">{classItem?.name}</td>
                            <td className="p-4 border-b text-center">{classItem?.status}</td>
                            <td className="p-4 border-b text-center">{classItem?.students}</td>
                            <td className="p-4 border-b text-center text-xs text-red-300">{classItem?.feedback}</td>
                            <td className="p-4 border-b text-center">

                                <Button
                                    color="blue"
                                    size="sm"
                                    rounded={false}
                                    ripple="light"
                                >
                                    Update
                                </Button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyClasses;
