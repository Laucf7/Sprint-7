import Navbar from "../components/Navbar";
import Login from "../components/Login";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Retrieve intended destination from sessionStorage
        const intendedDestination = sessionStorage.getItem('intendedDestination') || '/';

        // After successful login, navigate to the intended destination or home
        navigate(intendedDestination);

        // Clear the intended destination from sessionStorage
        sessionStorage.removeItem('intendedDestination');
    };

    return (
        <div>
            <Navbar />
            <Login onLogin={handleLogin} />
        </div>
    );
};

export default LoginPage;
