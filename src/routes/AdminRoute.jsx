import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";


const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
  
    const location = useLocation();

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if (user && user.role==='admin') {
        return children;
    }

    return <Navigate to={`/`} state={{from: location}} replace></Navigate>
};

export default AdminRoute;