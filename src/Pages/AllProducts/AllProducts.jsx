import img from "../../../public/WhatsApp Image 2024-02-11 at 1.58.40 PM.jpeg"

import { PiShoppingCart } from "react-icons/pi";
import { GiSelfLove } from "react-icons/gi";
import { RiSearch2Line } from "react-icons/ri";



const AllProducts = () => {
    return (
        <div className='py-16 max-w-7xl mx-auto'>
            <div className="grid lg:grid-cols-6 gap-14 lg:gap-8 py-5 lg:py-10">

                <div className=" lg:col-span-4 ">

                    <div className=" lg:flex justify-between items-center">
                        <p className="font-sans text-sm  text-center py-4">Showing all 14 results</p>
                        <div>
                            <form className=" ml-28 lg:max-w-sm mx-auto">
                                <select id="countries" className="font-sans  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-52 p-2.5 ">
                                    <option selected>Choose a Products</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </form>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 lg:gap-16 pt-12">

                        <div className="card  bg-base-100 border w-80 lg:w-60 mx-auto rounded-sm shadow-lg relative group  ">
                            <figure className="px-5 pt-6">
                                <img src={img} alt="Shoes" className="group-hover:scale-110 group-hover:rounded-lg duration-1000" />
                            </figure>
                            <div className="card-body items-center text-center  ">
                                <div
                                    className="absolute border rounded-full  bg-lime-600 p-2 top-0 opacity-0 group-hover:opacity-100  group-hover:top-24 duration-700  ">
                                    <PiShoppingCart size={25} color="white"></PiShoppingCart>
                                </div>
                                <div
                                    className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 opacity-0 group-hover:opacity-100  group-hover:bottom-36 duration-700  ">
                                    <GiSelfLove size={15} color="white"></GiSelfLove>
                                </div>
                                <div
                                    className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 left-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                                    <RiSearch2Line size={10} color="white"></RiSearch2Line>
                                </div>
                                <div
                                    className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 right-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                                    <PiShoppingCart size={10} color="white"></PiShoppingCart>
                                </div>
                                <h2 className="card-title ">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    190$ - 255$
                                </div>
                            </div>
                        </div>
                        <div className="card  bg-base-100 border w-80 lg:w-60 mx-auto rounded-sm shadow-lg relative group  ">
                            <figure className="px-5 pt-6">
                                <img src={img} alt="Shoes" className="group-hover:scale-110 group-hover:rounded-lg duration-1000" />
                            </figure>
                            <div className="card-body items-center text-center  ">
                                <div
                                    className="absolute border rounded-full  bg-lime-600 p-2 top-0 opacity-0 group-hover:opacity-100  group-hover:top-24 duration-700  ">
                                    <PiShoppingCart size={25} color="white"></PiShoppingCart>
                                </div>
                                <div
                                    className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 opacity-0 group-hover:opacity-100  group-hover:bottom-36 duration-700  ">
                                    <GiSelfLove size={15} color="white"></GiSelfLove>
                                </div>
                                <div
                                    className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 left-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                                    <RiSearch2Line size={10} color="white"></RiSearch2Line>
                                </div>
                                <div
                                    className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 right-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                                    <PiShoppingCart size={10} color="white"></PiShoppingCart>
                                </div>
                                <h2 className="card-title ">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    190$ - 255$
                                </div>
                            </div>
                        </div>
                        <div className="card  bg-base-100 border w-80 lg:w-60 mx-auto rounded-sm shadow-lg relative group  ">
                            <figure className="px-5 pt-6">
                                <img src={img} alt="Shoes" className="group-hover:scale-110 group-hover:rounded-lg duration-1000" />
                            </figure>
                            <div className="card-body items-center text-center  ">
                                <div
                                    className="absolute border rounded-full  bg-lime-600 p-2 top-0 opacity-0 group-hover:opacity-100  group-hover:top-24 duration-700  ">
                                    <PiShoppingCart size={25} color="white"></PiShoppingCart>
                                </div>
                                <div
                                    className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 opacity-0 group-hover:opacity-100  group-hover:bottom-36 duration-700  ">
                                    <GiSelfLove size={15} color="white"></GiSelfLove>
                                </div>
                                <div
                                    className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 left-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                                    <RiSearch2Line size={10} color="white"></RiSearch2Line>
                                </div>
                                <div
                                    className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 right-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                                    <PiShoppingCart size={10} color="white"></PiShoppingCart>
                                </div>
                                <h2 className="card-title ">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    190$ - 255$
                                </div>
                            </div>
                        </div>
                        <div className="card  bg-base-100 border w-80 lg:w-60 mx-auto rounded-sm shadow-lg relative group  ">
                            <figure className="px-5 pt-6">
                                <img src={img} alt="Shoes" className="group-hover:scale-110 group-hover:rounded-lg duration-1000" />
                            </figure>
                            <div className="card-body items-center text-center  ">
                                <div
                                    className="absolute border rounded-full  bg-lime-600 p-2 top-0 opacity-0 group-hover:opacity-100  group-hover:top-24 duration-700  ">
                                    <PiShoppingCart size={25} color="white"></PiShoppingCart>
                                </div>
                                <div
                                    className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 opacity-0 group-hover:opacity-100  group-hover:bottom-36 duration-700  ">
                                    <GiSelfLove size={15} color="white"></GiSelfLove>
                                </div>
                                <div
                                    className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 left-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                                    <RiSearch2Line size={10} color="white"></RiSearch2Line>
                                </div>
                                <div
                                    className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 right-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                                    <PiShoppingCart size={10} color="white"></PiShoppingCart>
                                </div>
                                <h2 className="card-title ">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    190$ - 255$
                                </div>
                            </div>
                        </div>
                        <div className="card  bg-base-100 border w-80 lg:w-60 mx-auto rounded-sm shadow-lg relative group  ">
                            <figure className="px-5 pt-6">
                                <img src={img} alt="Shoes" className="group-hover:scale-110 group-hover:rounded-lg duration-1000" />
                            </figure>
                            <div className="card-body items-center text-center  ">
                                <div
                                    className="absolute border rounded-full  bg-lime-600 p-2 top-0 opacity-0 group-hover:opacity-100  group-hover:top-24 duration-700  ">
                                    <PiShoppingCart size={25} color="white"></PiShoppingCart>
                                </div>
                                <div
                                    className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 opacity-0 group-hover:opacity-100  group-hover:bottom-36 duration-700  ">
                                    <GiSelfLove size={15} color="white"></GiSelfLove>
                                </div>
                                <div
                                    className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 left-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                                    <RiSearch2Line size={10} color="white"></RiSearch2Line>
                                </div>
                                <div
                                    className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 right-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                                    <PiShoppingCart size={10} color="white"></PiShoppingCart>
                                </div>
                                <h2 className="card-title ">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    190$ - 255$
                                </div>
                            </div>
                        </div>
                        <div className="card  bg-base-100 border w-80 lg:w-60 mx-auto rounded-sm shadow-lg relative group  ">
                            <figure className="px-5 pt-6">
                                <img src={img} alt="Shoes" className="group-hover:scale-110 group-hover:rounded-lg duration-1000" />
                            </figure>
                            <div className="card-body items-center text-center  ">
                                <div
                                    className="absolute border rounded-full  bg-lime-600 p-2 top-0 opacity-0 group-hover:opacity-100  group-hover:top-24 duration-700  ">
                                    <PiShoppingCart size={25} color="white"></PiShoppingCart>
                                </div>
                                <div
                                    className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 opacity-0 group-hover:opacity-100  group-hover:bottom-36 duration-700  ">
                                    <GiSelfLove size={15} color="white"></GiSelfLove>
                                </div>
                                <div
                                    className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 left-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                                    <RiSearch2Line size={10} color="white"></RiSearch2Line>
                                </div>
                                <div
                                    className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 right-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                                    <PiShoppingCart size={10} color="white"></PiShoppingCart>
                                </div>
                                <h2 className="card-title ">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    190$ - 255$
                                </div>
                            </div>
                        </div>


                    </div>
                </div>


                <div className="lg:col-span-2 px-10 lg:px-0  ">


                    <div className="bg-gray-200 rounded-sm shadow-sm px-4 py-4 lg:mx-16 ">
                        <div className="flex items-center gap-2 ml-1">
                            <div className="w-3 h-3 bg-lime-700">

                            </div>
                            <p className="font-serif">Product Search</p>
                        </div>
                        <div>
                            <form className="flex items-center max-w-sm mx-auto pt-5 gap-1 ">
                                <label className="sr-only">Search</label>
                                <div className="relative w-full">
                                    <input type="text" id="simple-search" className="font-serif bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Search Product" required />
                                </div>
                                <button type="submit" className="p-2.5 ms-1 text-sm font-sans text-white bg-slate-900 rounded-sm border border-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300  ">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="bg-gray-200 rounded-sm shadow-sm px-4 py-4 lg:mx-16 my-10 lg:my-16">
                        <div className="flex items-center gap-2 ml-1">
                            <div className="w-3 h-3 bg-lime-700">

                            </div>
                            <p className="font-serif">Filter By Price</p>
                        </div>
                        <div>
                            <div className="pt-6">
                                <input type="range" min={0} max="100" value="25" className="range" step="25" />
                                <div className="w-full flex justify-between text-xs px-2">

                                </div>
                            </div>
                            <form className="flex items-center max-w-sm mx-auto pt-5 gap-1 ">
                                <button type="submit" className="p-2.5 ms-1 text-sm font-sans text-white bg-slate-900 rounded-sm border border-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300  ">
                                    FILTER
                                </button>
                                <div className="card-actions ml-10">
                                    190$ - 255$
                                </div>

                            </form>
                        </div>
                    </div>

                    <div className="bg-gray-200 rounded-sm shadow-sm px-4 py-4 lg:mx-16 lg:my-16">
                        <div className="flex items-center gap-2 ml-1">
                            <div className="w-3 h-3 bg-lime-700">

                            </div>
                            <p className="font-serif">Filter By</p>
                        </div>
                        <div className="pt-5">
                            <form className="max-w-sm mx-auto">
                                <select id="countries" className="font-sans pt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5 ">
                                    <option selected>Choose a Size</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AllProducts;