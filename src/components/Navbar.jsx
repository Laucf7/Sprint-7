import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentUser } from "../redux/authSlice";

const Navbar = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.auth.currentUser);

    const handleLogout = () => {
        dispatch(clearCurrentUser());
      };

    return (
        <>
            {currentUser ? (
                <div className="flex justify-end">
                    <p>Welcome, {currentUser.email}!</p>
                    <div className="mx-4 p-2 border b-2"> <button onClick={handleLogout}>LOG OUT</button> </div>
                </div>
            ) : (
                <>
                    <div className="flex justify-end"><Link to={'/sign'}>SIGN UP</Link></div>
                    <div className="flex justify-end"><Link to={'/login'}>LOG IN</Link></div>
                </>
            )}
            <div className="container mx-auto flex justify-center items-center">
                <img src="src/assets/sw_logo.png" alt="logo-starwars" className="p-1 m-2 w-48" />
            </div>
            <div className="navbar border-b justify-center">
                <div className="btn btn-ghost text-lg"><Link to={'/'}>HOME</Link></div>
                <div className="btn btn-ghost text-lg"><Link to={'/starships'}>STARSHIPS</Link></div>
            </div>

        </>
    );
};
export default Navbar;