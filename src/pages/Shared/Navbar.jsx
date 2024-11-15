import { Link } from "react-router-dom";
import userLogo from '../../assets/user.png';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    console.log(user);
    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link>Career</Link></li>
    </>

    const handleLogout = () => {
        logOutUser();
    }

    return (
        <div className="navbar bg-base-100 my-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">{user ? user.email : ''}</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-2 items-center">
                <img src={userLogo} alt="" />
                <div>
                    {
                        user ? <button
                            onClick={handleLogout}
                            className="btn bg-neutral hover:btn-neutral text-white px-6 rounded-none">Log Out</button>
                            : <Link to='/login'>
                                <button className="btn bg-neutral hover:btn-neutral text-white px-6 rounded-none">Login</button>
                            </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;