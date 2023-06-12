import React from 'react'
import { List, ListItem, Card } from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

const StudentsSidebar = [
    {
        title: "My Selected Classes",
        path: "/student/selected-classes"
    },
    {
        title: "My Enrolled Classes",
        path: "/student/enrolled-classes"
    }
]
const InstructorSidebar = [
    {
        title: "Add Class",
        path: "/instructor/add-class"
    },
    {
        title: "My Classes",
        path: "/instructor/my-classes"
    }
]
const AdminSidebar = [
    {
        title: "Manage Classes",
        path: "/admin/manage-classes"
    },
    {
        title: "All Users",
        path: "/admin/users"
    }
]

const Sidebar = () => {
    const location = useLocation();
    const { user } = useAuth();
    // console.log(location.pathname)
    const sidebar = user?.role === 'instructor' ? InstructorSidebar : user?.role === 'admin' ? AdminSidebar : StudentsSidebar

    return (
        <Card className="rounded-none shadow-none">
            <List>
                {
                    sidebar.map((item, index) => (
                        <NavLink to={item.path} key={index}>
                            <ListItem>
                                {item.title}
                            </ListItem>
                        </NavLink>
                    ))
                }




            </List>
        </Card>
    )
}

export default Sidebar