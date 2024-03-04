import { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import Modal from "../../component/Modal/Modal";




const AllProducts = () => {

    
    const [Data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("./Fackdata.json")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        // You can return a loading indicator or a message here
        return <p>Loading...</p>;
    }

    const filteredData = Data.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );


    const handleSearchChange = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
    };





    return (
        <div className='pt-[70px] lg:pt-0'>
            <div className="relative w-full bg3 h-36 lg:h-72 shadow-md shadow-sky-600">
                <div className='bg-gradient-to-r from-[#1c1b1b] to-[#052f33] h-full opacity-60'></div>
                <h1 className="h-full w-full font-serif text-white text-center  text-2xl lg:text-4xl absolute top-[48%]">
                    ALL PRODUCTS
                </h1>
            </div>

            <div className="  mt-10 px-1 ">
                <div className="flex justify-between items-center bg-gradient-to-r  from-[#5d7a2e] to-[#4a7668]  rounded-md shadow-lg shadow-slate-500   px-3 md:px-20 py-1">
                    <p className="font-sans text-sm  text-center py-4 font-semibold uppercase text-slate-200 ">
                        Showing all {filteredData.length} results
                    </p>
                    <div className="flex items-center ">

                        <form className="flex items-center w-56 md:w-64 mx-auto  gap-1">
                            <label className="sr-only">Search</label>

                            <div className="relative w-full">
                                <input
                                    type="text"
                                    id="simple-search"
                                    className="font-serif bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Search Product Name"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    required
                                />

                            </div>
                        </form>
                        <div className="ml-[-26px] border z-30"><LuSearch ></LuSearch></div>
                    </div>
                </div>


                <div className="pt-12 grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto my-3 mb-10 ">
                    {filteredData.slice(0, 8).map((item) => (
                        <div
                            key={item.id}
                            className="relative transition-all duration-300 cursor-pointer rounded-xl bg-gradient-to-r  from-[#0ba360] to-[#3cba92] bg-clip-border text-gray-700 shadow-xl group-hover:shadow-lg h-96 w-72 mx-auto "
                        >
                            <div className="overflow-hidden h-[214px]" href="#">
                                <img
                                    className="h-full w-full rounded-t-xl"
                                    src="https://i.ibb.co/2sVJtqr/White-Pepper-2.jpg"
                                    alt="product image"
                                />
                            </div>

                            <div className="px-5 pb-5 pt-1">
                                <a href="#">
                                    <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        {item.name}
                                    </h5>
                                </a>
                                <div className="flex items-center mt-2.5 mb-5 pt-1">
                                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                        {/* Rating stars SVGs */}

                                    </div>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                                        5.0
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xl font-medium text-gray-900 dark:text-white">
                                        {item.id}
                                    </span>
                                    <Modal></Modal>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProducts;
