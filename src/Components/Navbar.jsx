import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
    const [isOpen, setMenu] = useState(false)
    const [fix, setFix] = useState(false)
    const links = <>
        <NavLink to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active border px-5 py-2 rounded-lg" : " px-5 py-2 rounded-lg"
            }
        ><li>Home</li></NavLink>

        <NavLink to="/allSpots"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active border px-5 py-2 rounded-lg" : " px-5 py-2 rounded-lg"
            }
        ><li>All Foods</li></NavLink>

        <NavLink to="/addSpots"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active border px-5 py-2 rounded-lg" : " px-5 py-2 rounded-lg"
            }
        ><li>Gallery</li></NavLink>

    </>

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
            <div className={fix ? "navbar fixed z-10  duration-500 bg-black text-white" : "text-white navbar  duration-300 fixed z-10"}>
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
                    <a className="btn btn-ghost text-xl px-0 sm:px-5">Name</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* { */}
                    {/* // user ? */}
                    <div className=" text-3xl px-2 avatar" onClick={() => setMenu(!isOpen)}>
                        <div className="w-11 rounded-full ring"  >
                            <img src='' />
                        </div>
                        <ul className={` absolute  w-52 duration-500  p-2 
                        menu menu-sm dropdown-content bg-black  shadow  rounded-box
                                    ${isOpen ? 'top-14 right-0' : '-top-72 right-0'}`}>
                            <li className=" active:border hover:border hover:font-semibold p-2 rounded-xl"><Link to='/'>My added food items</Link></li>
                            <li className=" active:border hover:border hover:font-semibold p-2 rounded-xl"><Link>Add a food item</Link></li>
                            <li className=" active:border hover:border hover:font-semibold p-2 rounded-xl"><Link>My ordered food items</Link></li>
                        </ul>
                    </div>
                    {/* // : */}
                    {/* <div className="flex gap-2">
                        <Link to="/login"><button className="btn px-2 sm:px-4 text-sm sm:text-base btn-outline border-cyan-500 text-cyan-500">Login</button></Link>
                    </div> */}
                    {/* } */}

                </div>


            </div>


        </div>
    );
};

export default Navbar;