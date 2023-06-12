import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import StudentDashboard from "../pages/StudentDashboard/StudentDashboard";
import SelectedClassList from "../pages/StudentDashboard/SelectedClassList";
import EnrolledClassList from "../pages/StudentDashboard/EnrolledClassList";
import DashboardLayout from "../Layout/DashboardLayout";
import AddClass from "../pages/TeacherDashboard/AddClass";
import MyClasses from "../pages/TeacherDashboard/MyClasses";
import ManageClasses from "../pages/AdminDashboard/ManageClasses";
import Users from "../pages/AdminDashboard/Users";
import NotFoundPage from "../pages/NotFound";
import SignUpPage from "../pages/SignUpPage/SIgnUpPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PrivateRoute from "./PrivateRoute";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }, 
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            }, 
            {
                path: '/classes',
                element: <Classes/>
            }, 
            {
                path: '/login',
                element: <LoginPage/>
            },
            {
                path: '/signup',
                element: <SignUpPage/>
            }
            
          ]
    },
    {
        path:"/student",
        element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
        children:[
            {
                path: 'dashboard',
                element: <StudentDashboard></StudentDashboard>
            },
            {
                path: 'selected-classes',
                element: <SelectedClassList/>
            },
            {
                path: 'enrolled-classes',
                element: <EnrolledClassList/>
            },
        ]
    },
    {
        path:"/instructor",
        element:<InstructorRoute> <DashboardLayout/></InstructorRoute>,
        children:[
            {
                path: 'add-class',
                element: <AddClass/>
            },
            {
                path: 'my-classes',
                element: <MyClasses/>
            }
          
        ]
    },
    {
        path:"/admin",
        element: <PrivateRoute><AdminRoute><DashboardLayout/></AdminRoute></PrivateRoute>,
        children:[
            {
                path: 'manage-classes',
                element: <ManageClasses/>
            },
            {
                path: 'users',
                element: <Users/>
            }
          
        ]
    },
    {
        path: "*",
        element: <NotFoundPage/>
    }
]);