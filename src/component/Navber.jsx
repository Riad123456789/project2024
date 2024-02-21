/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import img from "../../public/395030218_354819416996869_7748260630163794940_n.jpg"
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";


const Navber = ({ children }) => {


    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const Navlink = <>

        <NavLink to={"/"}>
            <li className='sm:text-black lg:text-white font-serif hover:text-red-700 text-xs'><a>HOME</a></li>
        </NavLink>
        <NavLink to={'/about'}>
            <li className='sm:text-black lg:text-white font-serif hover:text-red-700 text-xs'><a>ABOUT US </a></li>
        </NavLink>
        <NavLink to={'/allProducts'}>
            <li className='sm:text-black lg:text-white font-serif hover:text-red-700 text-xs'><a>SPICES & HERBS </a></li>
        </NavLink>
        <NavLink to={"/gallery"}>
            <li className='sm:text-black lg:text-white font-serif hover:text-red-700 text-xs'><a>GALLERY </a></li>
        </NavLink>
        <NavLink to={"/contact"}>
            <li className='sm:text-black lg:text-white font-serif hover:text-red-700 text-xs'><a>CONTACT US </a></li>
        </NavLink>
    </>

    return (
        <div>

            {/* <div className="navbar fixed z-10 rounded-md px-5  bg-gray-800 bg-opacity-80 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1]  shadow  w-96  text-white  bg-gray-800 bg-opacity-100 ">
                            {Navlink}
                        </ul>
                    </div>
                    <div className=' p-1'>
                        <img className='w-10  rounded-full ' src={img} alt="" />
                    </div>
                    <p
                        style={{ textTransform: "uppercase", color: "transparent", WebkitBackgroundClip: "text" }}
                        className="bg-gradient-to-r from-red-800 to-red-300 text-xs font-bold md:text-2xl normal-case text-white ml-2  ">
                        RK  TRADING
                    </p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1  ">
                        {Navlink}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <div className='flex space-x-2 items-center'>
                        <div className="avatar ">
                            <div className="w-10 border p-1 rounded-full">
                                <img className="rounded-full" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <Link to={"/login"}> <button className="btn btn-outline  text-white btn-sm text-xs font-sans">LOGIN</button></Link>
                    </div>
                </div>
            </div>  */}


            <div className="drawer">
                <input
                    id="my-drawer-3"
                    type="checkbox"
                    className="drawer-toggle"
                    checked={isSidebarOpen}
                    onChange={toggleSidebar} />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar  lg:fixed lg:z-10 lg:rounded-md px-5  bg-gray-800 md:bg-opacity-80">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-white inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2 ">
                            <div className=' p-1'>
                                <img className='w-10  rounded-full ' src={img} alt="" />
                            </div>
                            <p
                                style={{ textTransform: "uppercase", color: "transparent", WebkitBackgroundClip: "text" }}
                                className="font bg-gradient-to-r from-red-800 to-red-300 text-lg font-bold md:text-2xl normal-case text-white ml-2  ">
                                RK  TRADING
                            </p>

                        </div>
                        <div className="flex-1 hidden lg:block ">
                            <ul className="menu menu-horizontal">
                                {/* Navbar menu content here */}
                                {Navlink}
                            </ul>
                        </div>
                    </div>
                    {/* Page content here */}
                    {children}
                </div>
                <div className="drawer-side lg:drawer-toggle ">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay " ></label>

                    <div className="menu  p-4 w-52 min-h-full bg-base-200 ">
                        {/* Sidebar content here */}

                        <div
                            className="flex justify-end cursor-pointer"
                            onClick={toggleSidebar}
                        >
                            <RxCross2 size={25}></RxCross2>
                        </div>
                        <ul className="pt-7">
                            {Navlink}
                        </ul>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navber;