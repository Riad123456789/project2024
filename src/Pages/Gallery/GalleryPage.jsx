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
                        className={`text-gray-900 border bg-white rounded-md text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800  ${selectedCategory === "all" && "bg-orange-400 text-black"
                            }`}
                    >
                        All categories
                    </button>
                    <div className="">
                        <button
                            onClick={() => filterByCategory("spices")}
                            className={`text-gray-900 border   bg-white rounded-md text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800  ${selectedCategory === "spices" && "bg-orange-400 text-white"
                                }`}
                        >
                            Spices
                        </button>
                        <button
                            onClick={() => filterByCategory("DryFood")}
                            className={`text-gray-900 border   bg-white rounded-md text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800  ${selectedCategory === "DryFood" && "bg-orange-400 text-white"
                                }`}
                        >
                            DryFood
                        </button>
                    </div>
                </div>


                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-20 py-10">
                    {filteredData.map((item) => (
                        <div key={item.id}>
                            <img className="h-auto w-96 mx-auto rounded-lg" src="https://i.ibb.co/M8tRbyk/Sliding-Image-2.jpg" alt="" />

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalleryPage;
