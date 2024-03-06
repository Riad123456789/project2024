import { useEffect, useState } from "react";

const GalleryPage = () => {

    const [Data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");

    useEffect(() => {
        fetch("./Fackdata.json")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setFilteredData(data);
            });
    }, []);

    const filterByCategory = (category) => {
        if (category === "all") {
            setFilteredData(Data);
        } else {
            const filtered = Data.filter((item) => item.category === category);
            setFilteredData(filtered);
        }
        setSelectedCategory(category);
    };


    return (
        <div className="pt-[72px] lg:pt-0">

            <div className="relative w-full bg2 h-36 lg:h-72 shadow-md shadow-amber-300 ">
                <div className=' bg-gradient-to-r from-[#1c1b1b] to-[#322d13] h-full opacity-60'>
                </div>
                <h1 className="  w-full font-serif text-white text-center  text-2xl lg:text-4xl absolute top-[50%] ">
                    OUR GALLERY
                </h1>
            </div>

            <div className="pb-8 mt-10">
                <div className=" flex  items-center justify-between gap-5 pt-3 flex-wrap bg-gradient-to-r  from-[#d1d6c9] to-[#8cada2] rounded-md shadow-lg shadow-slate-500 px-8 md:px-20 ">

                    <button
                        onClick={() => filterByCategory("all")}

                        className={` uppercase rounded-md text-base font-medium px-5 py-2.5 text-center me-3 mb-3 ${selectedCategory === "all" ? " bg-orange-500 text-black" :"bg-white text-gray-900"
                            }`}
                    >
                        All categories
                    </button>
                    <div className="">
                        <button
                            onClick={() => filterByCategory("spices")}
                            className={`uppercase  rounded-md text-base font-medium px-5 py-2.5 text-center me-3 mb-3  ${selectedCategory === "spices" ? "bg-orange-500 text-black " : "bg-white text-gray-900 "
                                }`}
                        >
                            Spices
                        </button>
                        <button
                            onClick={() => filterByCategory("DryFood")}
                            className={` uppercase  rounded-md text-base font-medium px-5 py-2.5 text-center me-3 mb-3 ${selectedCategory === "DryFood" ? "bg-orange-500 text-black" : "bg-white text-gray-900"
                                }`}
                        >
                            DryFood
                        </button>
                    </div>
                </div>


                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-6 md:px-28 py-10 md:py-20  ">
                    {filteredData.map((item) => (
                        <div key={item?.id} className="relative group overflow-hidden h-full md:w-72 mx-auto rounded-sm bg-white">
                            <img
                                className="h-[280px] md:h-72 md:w-72 mx-auto shadow-xl shadow-orange-100 duration-1000 cursor-pointer"
                                src={item?.image}
                                alt=""
                            />
                            <div className="absolute right-0 h-full w-full -bottom-[400px] group-hover:-bottom-56 transition-all duration-[1s] bg-gradient-to-r from-[#a32b97] to-[#d2156a] opacity-40">
                            </div>
                            <div className="absolute right-0 h-full w-full -bottom-[400px] group-hover:-bottom-56 transition-all duration-[1s]">
                                <div className="mt-4">
                                    <h1 className="text-lg md:text-xl text-white text-center mx-auto uppercase">{item?.name}</h1>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalleryPage;
