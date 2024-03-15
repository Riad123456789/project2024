/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";
import img from "../../public/395030218_354819416996869_7748260630163794940_n.jpg"
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const Navber = ({ children }) => {


    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const Navlink = <>

        <NavLink to={"/"}>
            <li className='sm:text-black lg:text-white hover:text-orange-500 md:text-sm lg:text-xs xl:text-sm  font-semibold '><a>HOME</a></li>
        </NavLink>
        <NavLink to={'/about'}>
            <li className='sm:text-black lg:text-white hover:text-orange-500 md:text-sm lg:text-xs xl:text-sm  font-semibold '><a>ABOUT US </a></li>
        </NavLink>
        <NavLink to={'/allProducts'}>

            <li className='sm:text-black lg:text-white hover:text-orange-500 md:text-sm lg:text-xs xl:text-sm  font-semibold '><a>ALL PRODUCTS</a></li>

        </NavLink>

        <NavLink to={"/gallery"}>
            <li className='sm:text-black lg:text-white hover:text-orange-500 md:text-sm lg:text-xs xl:text-sm  font-semibold '><a>GALLERY </a></li>
        </NavLink>
        <NavLink to={"/contact"}>
            <li className='sm:text-black lg:text-white hover:text-orange-500 md:text-sm lg:text-xs xl:text-sm  font-semibold '><a>CONTACT US </a></li>
        </NavLink>
    </>

    return (
        <div>
            <div className="drawer">
                <input
                    id="my-drawer-3"
                    type="checkbox"
                    className="drawer-toggle"
                    checked={isSidebarOpen}
                    onChange={toggleSidebar} />
                <div className="drawer-content ">

                    <div className=" w-full navbar  fixed  z-10 lg:rounded-md px-5  bg-gray-800 bg-opacity-80">

                        <div className=" lg:hidden ">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-white inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>


                        <div className="flex lg:gap-16  xl:gap-72 2xl:mx-a">

                            <div className="flex items-center gap-1  ">
                                <div className=' p-1 shadow-sm shadow-red-500 rounded-full cursor-pointer  hover:-rotate-[360deg] duration-1000 transition-all '>
                                    <img className='w-10 md:w-12  rounded-full  ' src={img} alt="" />
                                </div>
                                <p
                                    style={{ textTransform: "uppercase", color: "transparent", WebkitBackgroundClip: "text" }}
                                    className="font bg-gradient-to-r from-orange-500 to-orange-500 text-lg font-bold md:text-2xl lg:text-xl normal-case text-white ml-1 md:ml-2  ">
                                    RK  TRADING
                                </p>
                            </div>

                            <div className="hidden lg:flex items-center lg:gap-16 xl:gap-40  justify-end">
                                <div className="">
                                    <ul className=" flex lg:gap-5 xl:gap-7">
                                        {Navlink}
                                    </ul>
                                </div>

                                <div className="flex gap-3 xl:gap-7  items-center ">
                                    <div className="flex gap-3 items-center">
                                        <Link to={'https://www.facebook.com/rktrading.com.bd'}>
                                            <FaFacebookSquare className=" cursor-pointer transition hover:-rotate-[360deg]  duration-1000 " size={25} color="white"></FaFacebookSquare>
                                        </Link>

                                        <Link to={"https://www.linkedin.com/in/rk-trading-bd"}>
                                            <FaLinkedin className=" cursor-pointer transition hover:-rotate-[360deg]  duration-1000" size={24} color="white"></FaLinkedin>
                                        </Link>
                                        <Link to={"https://www.youtube.com/@rktrading873"}>
                                            <TbBrandYoutubeFilled className=" cursor-pointer transition hover:-rotate-[360deg]  duration-1000" size={29} color="white"></TbBrandYoutubeFilled>
                                        </Link>
                                    </div>
                                    <a className='flex justify-start items-center gap-1 py-2 pl-2 text-white font-semibold' ><MdOutlinePhoneInTalk size={25} /> +8801795579568</a>
                                </div>
                            </div>

                        </div>

                    </div>



                    {/* Page content here */}
                    {children}
                </div>
                <div className="drawer-side lg:drawer-toggle z-20">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay " ></label>

                    <div className="menu  p-4 w-48 min-h-full bg-base-200 ">
                        {/* Sidebar content here */}

                        <div
                            className="flex justify-end cursor-pointer"
                            onClick={toggleSidebar}
                        >
                            <RxCross2 size={25}></RxCross2>
                        </div>
                        <ul onClick={toggleSidebar} className="pt-7">
                            {Navlink}
                        </ul>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navber;