import { PiShoppingCart } from "react-icons/pi";
import { GiSelfLove } from "react-icons/gi";
import { RiSearch2Line } from "react-icons/ri";
import { useEffect, useState } from "react";



const AllProducts = () => {

    const [Data, setData] = useState([])

    useEffect(() => {
        fetch("./Fackdata.json")
            .then((res) => res.json())
            .then(data => setData(data))
    }, [])


    return (
        <div className=' pt-[70px] lg:pt-0'>

            <div className="relative w-full bg3 h-36 lg:h-72 shadow-md shadow-sky-600 ">
                <div className=' bg-gradient-to-r from-[#1c1b1b] to-[#052f33] h-full opacity-60'>
                </div>
                <h1 className="h-full w-full font-serif text-white text-center  text-2xl lg:text-4xl absolute top-[48%]">
                    ALL PRODUCTS
                </h1>
            </div>


            <div className="grid lg:grid-cols-6 gap-14 lg:gap-8 py-5 lg:py-10 max-w-7xl mx-auto mt-10 px-1">

                <div className=" lg:col-span-4 ">

                    <div className=" flex justify-between items-center bg-red-500 px-2 rounded-md shadow-lg shadow-slate-500 ">
                        <p className="font-sans text-sm  text-center py-4 font-semibold uppercase text-slate-200">Showing all {Data.length} results</p>
                        <div className="flex justify-center z-30">
                            <form className="w-52 mx-auto  ">
                                <select id="countries" className="font-sans pt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm  w-full p-2.5 cursor-pointer">
                                    <option selected>Choose a Products</option>
                                    {
                                        Data.map(item => <option key={item.id} value="US">{item.name}</option>)
                                    }
                                </select>
                            </form>

                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 lg:gap-16 pt-12">

                        {
                            Data.map((item) => <div key={item.id} className="card  bg-base-100 border w-80 lg:w-60 mx-auto rounded-sm shadow-lg relative group  ">
                                <figure className="px-5 pt-6 ">
                                    <div className="h-[180px] lg:h-[130px]">
                                        <img src="https://i.ibb.co/FYTK1NH/4a138584-3cac-4341-88b5-b05057948e85.jpg" alt="none" className="group-hover:scale-110 group-hover:rounded-lg duration-1000" />
                                    </div>
                                </figure>
                                <div className="card-body items-center text-center  ">

                                    <h2 className="card-title font-sans ">{item.name}</h2>
                                    <div className="rating rating-xs py-4">
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    <div className="card-actions">
                                        190$ - 255$
                                    </div>
                                </div>
                            </div>)
                        }


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



                    <div className="bg-gray-200 rounded-sm shadow-sm px-4 py-4 lg:mx-16 lg:my-16">
                        <div className="flex items-center gap-2 ml-1">
                            <div className="w-3 h-3 bg-lime-700">

                            </div>
                            <p className="font-serif">Filter By</p>
                        </div>
                        <div className="pt-5">
                            <form className="max-w-sm mx-auto">
                                <select id="countries" className="font-sans pt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm  w-full p-2.5 ">
                                    <option selected>Choose a Size</option>
                                    {
                                        Data.map(item => <option key={item.id} value="US">{item.name}</option>)
                                    }
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