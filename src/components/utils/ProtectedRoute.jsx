import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({}) => {
    const currentUser = useSelector((state) => state.auth.currentUser);
    const navigate = useNavigate();

    if (!currentUser) {
        // Store the intended destination in sessionStorage
        sessionStorage.setItem('intendedDestination', window.location.pathname);
        
        // Navigate to the login page
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
