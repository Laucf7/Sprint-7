
const Navbar = () => {
    return (
        <>
            <div className="container mx-auto flex justify-center items-center">
                <img src="src/assets/sw_logo.png" alt="logo-starwars" className="p-1 m-2 w-48" />
            </div>
            <div className="navbar border-b justify-center">
                <a className="btn btn-ghost text-lg">HOME</a>
                <a className="btn btn-ghost text-lg">STARSHIPS</a>
            </div>
        </>

    )
}
export default Navbar;

