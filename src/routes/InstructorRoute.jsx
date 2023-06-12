import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";


const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth();
  
    const location = useLocation();

    if(loading){
        return "Loading"
    }

    if (user && user.role==='instructor') {
        return children;
    }
   
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;