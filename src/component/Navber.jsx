import { NavLink } from "react-router-dom";
import img from "../../public/395030218_354819416996869_7748260630163794940_n.jpg"

const Navber = () => {


    const Navlink = <>

        <NavLink to={"/"}>
            <li className='sm:text-black lg:text-white font-serif hover:text-red-700 text-xs border-b-2 md:border-none'><a>HOME</a></li>
        </NavLink>
        <NavLink to={'/about'}>
            <li className='sm:text-black lg:text-white font-serif hover:text-red-700 text-xs border-b-2 md:border-none'><a>ABOUT US </a></li>
        </NavLink>
        <li className='sm:text-black lg:text-white font-serif hover:text-red-700 text-xs border-b-2 md:border-none'><a>SPICES & HERBS </a></li>
        <li className='sm:text-black lg:text-white font-serif hover:text-red-700 text-xs border-b-2 md:border-none'><a>GALLERY </a></li>
        <li className='sm:text-black lg:text-white font-serif hover:text-red-700 text-xs border-b-2 md:border-none'><a>CONTACT US </a></li>
    </>


    return (
        <div>
            <div className="navbar fixed z-10 rounded-md px-5  bg-gray-800 bg-opacity-80 ">
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
                        <button className="btn btn-outline  text-white btn-sm text-xs font-sans">SING IN</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;