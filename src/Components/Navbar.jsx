import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
const Navbar = () => {
    const [isOpen, setMenu] = useState(false)
    const [fix, setFix] = useState(false)
    const { user, Logout } = useContext(AuthContext)
    const links = <>
        <NavLink to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active border px-5 py-2 rounded-lg text-orange-400 border-orange-400" : " px-5 py-2 rounded-lg"
            }
        ><li>Home</li></NavLink>

        <NavLink to="/allFoods"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active border px-5 py-2 rounded-lg text-orange-400 border-orange-400" : " px-5 py-2 rounded-lg"
            }
        ><li>All Foods</li></NavLink>

        <NavLink to="/gallery"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active border px-5 py-2 rounded-lg text-orange-400 border-orange-400 " : " px-5 py-2 rounded-lg"
            }
        ><li>Gallery</li></NavLink>
    </>

    const handleLogout = async () => {
        try {
            await Logout()
            toast.success('Successfully logged out! 👋')
        }
        catch (error) {
            console.log(error);
            toast.error(error?.message)
        }
    }

    function setFixed() {
        if (window.scrollY > 50) {
            setFix(true)
        }
        else {
            setFix(false)
        }
    }
    window.addEventListener("scroll", setFixed)
    return (
        <div>
            <div className={fix ? "navbar fixed z-10  duration-500 bg-black text-white" : "text-white navbar  duration-500 fixed z-10"} >
                <div className="navbar-start">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-black mt-3 z-[1] p-2 shadow  rounded-box w-52">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="font-semibold text-xl px-0 sm:px-5 font-cookie text-orange-400">FusionDine</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="flex sm:px-2 gap-2 sm:gap-4">
                                <div className="  avatar" onClick={() => setMenu(!isOpen)}>
                                    <div className="w-11 rounded-full ring ring-orange-400"  >
                                        <img src={user.photoURL} />
                                    </div>
                                    <ul
                                        className={` absolute  w-56 duration-500  p-2 menu menu-sm dropdown-content bg-black  shadow  rounded-box
                                    ${isOpen ? 'top-14 -left-20' : 'left-96 top-14 '}`}>
                                        <li className=" active:border hover:border hover:font-semibold p-2 rounded-xl  border-orange-400 hover:text-orange-400">
                                            <Link to='/myAddedFoods'>My added food items</Link></li>
                                        <li className=" active:border hover:border hover:font-semibold p-2 rounded-xl border-orange-400 hover:text-orange-400">
                                            <Link to="/addFood">Add a food item</Link></li>
                                        <li className=" active:border hover:border hover:font-semibold p-2 rounded-xl border-orange-400 hover:text-orange-400">
                                            <Link to='/myPurchaseFoods'>My ordered food items</Link></li>
                                    </ul>
                                </div>
                                <div className="flex gap-2">
                                    <button onClick={handleLogout} className="btn px-2 sm:px-4 text-sm sm:text-base btn-outline border-red-400 text-red-400 hover:bg-black hover:text-red-500 hover:border-red-500">Logout</button>
                                </div>
                            </div>
                            :
                            <div className="flex gap-2">
                                <Link to="/login">
                                    <button className="btn px-2 sm:px-4 text-sm sm:text-base btn-outline border-orange-400 text-orange-400">Login</button>
                                </Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;