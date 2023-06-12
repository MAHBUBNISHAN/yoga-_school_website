import React, { useState } from 'react';
import { Button } from '@material-tailwind/react';
import { useMutation, useQuery } from 'react-query';
import { getAllUsersAPI, updateUserRoleAPI } from '../../api/adminApi';
import { toast } from 'react-hot-toast'
const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  const getAllUsersQuery = useQuery("all-users", getAllUsersAPI, {
    onSuccess: (res) => {
      setUsers(res);
    }
  });
  const updateUserRoleMutation = useMutation("update-user", updateUserRoleAPI, {
    onSuccess: () => {
      toast.success("User role updated")
      getAllUsersQuery.refetch();
    }
  })
  const makeInstructor = (userId) => {
    updateUserRoleMutation.mutate({ id: userId, role: "instructor" })
  };

  const makeAdmin = (userId) => {
    updateUserRoleMutation.mutate({ id: userId, role: "admin" })
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
      <table className="w-full border border-gray-300">
        <thead>
          <tr>
            <th className="p-2 border-b border-gray-300">#</th>
            <th className="p-2 border-b border-gray-300">Photo</th>
            <th className="p-2 border-b border-gray-300">Email</th>
            <th className="p-2 border-b border-gray-300">Name</th>
            <th className="p-2 border-b border-gray-300">Role</th>
            <th className="p-2 border-b border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={user._id}>
              <td className="p-2 border-b border-gray-300 text-center">{i + 1}</td>
              {/* photo of the user */}
              <td className="p-2 border-b border-gray-300 text-center">
                <img src={user?.photoUrl} className='w-6 h-6 rounded-full mx-auto' alt="" />
              </td>
              <td className="p-2 border-b border-gray-300 text-center">{user.email}</td>
              <td className="p-2 border-b border-gray-300 text-center">{user.name}</td>
              <td className="p-2 border-b border-gray-300 text-center">{user.role}</td>
              <td className="p-2 border-b border-gray-300 text-center justify-center flex gap-1">
                <Button
                  disabled={user.role === 'instructor'}
                  color="blue"
                  size="sm"
                  rounded={false}
                  ripple="light"
                  onClick={() => makeInstructor(user._id)}
                >
                  Make Instructor
                </Button>
                <Button
                  color="green"
                  size="sm"
                  rounded={false}
                  ripple="light"
                  disabled={user.role === 'admin'}
                  onClick={() => makeAdmin(user._id)}
                >
                  Make Admin
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
