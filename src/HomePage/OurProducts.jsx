import { useEffect, useState } from "react";


const OurProducts = () => {
    const [Data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6; // Number of products to show per page
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetch("./Fackdata.json")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = Data.slice(indexOfFirstProduct, indexOfLastProduct);

    const handleClick = (id) => {
        const selectedProduct = Data.find((item) => item.id === id);
        setSelectedProduct(selectedProduct);
        document.getElementById('my_modal_4').showModal();
    };



    return (
        <div className="relative">

            <img className=" absolute -top-12 -left-10  md:-top-[80px]  w-32 md:w-[250px] " src="https://i.ibb.co/BLmqgvj/garam-masala-whole-2-removebg-preview.png" alt="" />

            <img className=" absolute -top-12 right-0 md:-top-[110px] md:right-0 w-44 md:w-[480px] " src="https://i.ibb.co/5GcKD9L/various-spices-isolated-on-white-background-top-view-photo-removebg.png" alt="" />


            <div className="  mt-20 md:mt-32 pb-14 md:pb-24 pt-10 bg-[#d6d5d0]">

                <img className='h-14 w-80  md:h-16 md:w-[430px] mx-auto mb-2 mt-8 md:mt-12' src="https://i.ibb.co/tPyyKhT/e51ab9683522f0c3f68c8308fb8b161d-1-removebg-preview.png" alt="" />

                <div className="text-center ">
                    <h1
                        style={{
                            textTransform: "uppercase",
                            color: "transparent",
                            WebkitBackgroundClip: "text",
                        }}
                        className="text-4xl px-2 md:text-4xl lg:text-5xl font-semibold font-serif pb-7 md:pt-2 md:pb-16  bg-gradient-to-r from-red-700 to-amber-500  "
                    >
                        OUR PRODUCTS
                    </h1>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-16 items-center px-2 pt-3">
                    {currentProducts.map((item) => (
                        <div
                            key={item?.id}
                            className="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 rounded-xl bg-gradient-to-r from-[#dbdddc] to-[#b8b8b8] hover:from-[#0ba360] hover:to-[#3cba92] bg-clip-border text-gray-700 shadow-xl group-hover:shadow-lg 
                     w-full  md:h-96 md:w-80 mx-auto "
                        >
                            <div className="overflow-hidden h-[214px]">
                                <img
                                    className="h-full w-full rounded-t-xl"
                                    src={item?.image}
                                    alt="product image"
                                />
                            </div>

                            <div className="px-3 pb-5 pt-1">
                                <a >
                                    <h5 className="text-sm md:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        {item?.name}
                                    </h5>
                                </a>
                                <div className="flex items-center mt-2.5 mb-5 pt-1">
                                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                        {/* Rating stars SVGs */}
                                        <span className="  text-xs font-medium md:font-semibold text-justify  ">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore non nam dolore odit tenetur porro  Tempore non nam !
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">

                                    <div className="hidden md:flex items-center">
                                        <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                    </div>
                                    <button
                                        className="text-white bg-black hover:bg-red-500 font-medium rounded-lg text-xs   text-center btn-xs px-3 shadow-md shadow-slate-400 md:btn-sm"
                                        onClick={() => handleClick(item?.id)}
                                    >
                                        MORE  DETAILS
                                    </button>
                                    <dialog id="my_modal_4" className="modal">
                                        <div className="modal-box  w-11/12 max-w-5xl rounded-none">
                                            <form method="dialog">

                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </form>
                                            <h3 className="font-semibold font-sans text-xl border-b-2 border-black uppercase pb-2">{selectedProduct?.name}</h3>
                                            <div className='md:flex '>
                                                <div className=' md:w-[78%]'>
                                                    <p className='text-justify text-xs font-medium pt-1'> <span className='font-bold text-black'> Black pepper </span> (Piper nigrum) is a flowering vine in the family Piperaceae, cultivated for its fruit (the peppercorn), which is usually dried and used as a spice and seasoning. The fruit is a drupe (stonefruit) which is about 5 mm (0.20 in) in diameter (fresh and fully mature), dark red, and contains a stone which encloses a single pepper seed. Peppercorns and the ground pepper derived from them may be described simply as pepper, or more precisely as black pepper (cooked and dried unripe fruit), green pepper (dried unripe fruit), or white pepper (ripe fruit seeds).[2]</p>

                                                    <p className='text-justify text-xs font-medium pt-4'>Black pepper is native to the Malabar Coast of India,[3][4] and the Malabar pepper is extensively cultivated there and in other tropical regions. Ground, dried, and cooked peppercorns have been used since antiquity, both for flavour and as a traditional medicine. Black pepper is the world's most traded spice,[5] and is one of the most common spices added to cuisines around the world. Its spiciness is due to the chemical compound piperine, which is a different kind of spiciness from that of capsaicin characteristic of chili peppers. It is ubiquitous in the Western world as a seasoning, and is often paired with salt and available on dining tables in shakers or mills.</p>

                                                    <h3 className="font-medium  text-lg border-b-2 border-black uppercase pb-1 pt-4 font-serif">Etymology</h3>
                                                    <p className='text-justify text-xs font-medium pt-4'>The word pepper derives from Old English pipor, Latin piper, and Greek: πέπερι.[6] The Greek likely derives from Dravidian pippali, meaning "long pepper".[7] Sanskrit pippali shares the same meaning.[6]</p>
                                                    <h3 className="font-medium  text-lg border-b-2 border-black uppercase pb-1 pt-4 font-serif">History</h3>
                                                    <p className='text-justify text-xs font-medium pt-2'>Black pepper is native to South Asia and Southeast Asia, and has been known to Indian cooking since at least 2000 BCE.[20][how?] J. Innes Miller notes that while pepper was grown in southern Thailand and in Malaysia,[when?] its most important source was India, particularly the Malabar Coast, in what is now the state of Kerala.[21] The lost ancient port city of Muziris in Kerala, famous for exporting black pepper and various other spices, gets mentioned in a number of classical historical sources for its trade with Roman Empire, Egypt, Mesopotamia, Levant, and Yemen.[22][23][24][25] Peppercorns were a much-prized trade good, often referred term "peppercorn rent" as a token payment for something that is, essentially, a gift.</p>
                                                </div>
                                                <div className=' mt-2 md:m-2'>
                                                    <div className='border-[1px] border-black'>
                                                        <h1 className='bg-green-400 text-center text-sm font-bold m-2'>{selectedProduct?.name}</h1>
                                                        <img className='  md:w-52 h-60 p-2 mx-auto' src="https://i.ibb.co/3F4mpW5/Piper-nigrum-K-hler-s-Medizinal-Pflanzen-107.jpg" alt="" />
                                                        <h1 className='bg-green-400 text-center text-sm font-bold m-2'>Scientific classification</h1>
                                                        <div className='py-1 space-y-1'>

                                                            <div className='flex  items-center gap-5'>
                                                                <p className='text-xs font-semibold pl-2 '>Kingdom :</p>
                                                                <p className='text-xs font-semibold pl-2 text-blue-700'>Plantae</p>
                                                            </div>
                                                            <div className='flex  items-center gap-10'>
                                                                <p className='text-xs font-semibold pl-2 '>Clade :</p>
                                                                <p className='text-xs font-semibold pl-2 text-blue-700'>Tracheophytes</p>
                                                            </div>
                                                            <div className='flex  items-center gap-10'>
                                                                <p className='text-xs font-semibold pl-2 '>Order :</p>
                                                                <p className='text-xs font-semibold pl-2 text-blue-700'>Angiosperms</p>
                                                            </div>
                                                            <div className='flex  items-center gap-9'>
                                                                <p className='text-xs font-semibold pl-2 '>Family :</p>
                                                                <p className='text-xs font-semibold pl-2 text-blue-700'>Piperaceae</p>
                                                            </div>
                                                            <div className='flex  items-center gap-9'>
                                                                <p className='text-xs font-semibold pl-2 '>Genus :</p>
                                                                <p className='text-xs font-semibold pl-2 text-blue-700'>Piper</p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </dialog>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="pt-20 flex justify-center cursor-pointer">
                    <nav aria-label="Page navigation example">
                        <ul className="inline-flex gap-2 -space-x-px text-base h-10">
                            <li>
                                <a
                                    className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-2xl hover:bg-gray-100 hover:text-gray-700 "
                                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                >
                                    Previous
                                </a>
                            </li>
                            {Array.from({ length: Math.ceil(Data.length / productsPerPage) }, (_, i) => i + 1).map((page) => (
                                <li key={page}>
                                    <a
                                        className={`flex border rounded-2xl items-center justify-center px-4 h-10 leading-tight ${page === currentPage
                                            ? 'text-black border bg-orange-400'
                                            : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 '
                                            }`}
                                        onClick={() => setCurrentPage(page)}
                                    >
                                        {page}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a
                                    className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-2xl hover:bg-gray-100 hover:text-gray-700 "
                                    onClick={() =>
                                        setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(Data.length / productsPerPage)))
                                    }
                                >
                                    Next
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default OurProducts;
