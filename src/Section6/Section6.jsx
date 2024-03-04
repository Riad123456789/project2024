import { useEffect, useState } from "react";


const Section6 = () => {
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
        <div className="py-10 max-w-7xl mx-auto mt-10">
            <div data-aos="zoom-out-up" data-aos-duration="1500" className="text-center ">
                <h1
                    style={{
                        textTransform: "uppercase",
                        color: "transparent",
                        WebkitBackgroundClip: "text",
                    }}
                    className="text-4xl px-2 md:text-4xl lg:text-5xl font-semibold font-serif pt-2 pb-16 md:pb-20 md:pt-6 my-3 bg-gradient-to-r from-red-700 to-amber-500  "
                >
                    OUR PRODUCTS
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center ">
                {currentProducts.map((item) => (
                    <div
                        key={item.id}
                        className="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 rounded-xl bg-gradient-to-r from-[#dbdddc] to-[#b8b8b8] hover:from-[#0ba360] hover:to-[#3cba92] bg-clip-border text-gray-700 shadow-xl group-hover:shadow-lg h-96 w-80 mx-auto "
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

                                <button
                                    className="text-white bg-black hover:bg-red-500 font-medium rounded-lg text-xs px-5 py-2.5 text-center"
                                    onClick={() => handleClick(item.id)}
                                >
                                    DETAILS
                                </button>
                                <dialog id="my_modal_4" className="modal">
                                    <div className="modal-box  w-11/12 max-w-5xl rounded-none">
                                        <form method="dialog">

                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        </form>
                                        <h3 className="font-semibold font-sans text-xl border-b-2 border-black uppercase pb-2">{selectedProduct.name}</h3>
                                        <div className='md:flex '>
                                            <div className=' md:w-[78%]'>
                                                <p className='text-justify text-xs font-medium pt-1'> <span className='font-bold text-black'> Black pepper </span> (Piper nigrum) is a flowering vine in the family Piperaceae, cultivated for its fruit (the peppercorn), which is usually dried and used as a spice and seasoning. The fruit is a drupe (stonefruit) which is about 5 mm (0.20 in) in diameter (fresh and fully mature), dark red, and contains a stone which encloses a single pepper seed. Peppercorns and the ground pepper derived from them may be described simply as pepper, or more precisely as black pepper (cooked and dried unripe fruit), green pepper (dried unripe fruit), or white pepper (ripe fruit seeds).[2]</p>

                                                <p className='text-justify text-xs font-medium pt-4'>Black pepper is native to the Malabar Coast of India,[3][4] and the Malabar pepper is extensively cultivated there and in other tropical regions. Ground, dried, and cooked peppercorns have been used since antiquity, both for flavour and as a traditional medicine. Black pepper is the world's most traded spice,[5] and is one of the most common spices added to cuisines around the world. Its spiciness is due to the chemical compound piperine, which is a different kind of spiciness from that of capsaicin characteristic of chili peppers. It is ubiquitous in the Western world as a seasoning, and is often paired with salt and available on dining tables in shakers or mills.</p>

                                                <h3 className="font-medium  text-lg border-b-2 border-black uppercase pb-1 pt-4 font-serif">Etymology</h3>
                                                <p className='text-justify text-xs font-medium pt-4'>The word pepper derives from Old English pipor, Latin piper, and Greek: πέπερι.[6] The Greek likely derives from Dravidian pippali, meaning "long pepper".[7] Sanskrit pippali shares the same meaning.[6]</p>
                                                <h3 className="font-medium  text-lg border-b-2 border-black uppercase pb-1 pt-4 font-serif">History</h3>
                                                <p className='text-justify text-xs font-medium pt-2'>Black pepper is native to South Asia and Southeast Asia, and has been known to Indian cooking since at least 2000 BCE.[20][how?] J. Innes Miller notes that while pepper was grown in southern Thailand and in Malaysia,[when?] its most important source was India, particularly the Malabar Coast, in what is now the state of Kerala.[21] The lost ancient port city of Muziris in Kerala, famous for exporting black pepper and various other spices, gets mentioned in a number of classical historical sources for its trade with Roman Empire, Egypt, Mesopotamia, Levant, and Yemen.[22][23][24][25] Peppercorns were a much-prized trade good, often referred to as "black gold" and used as a form of commodity money. The legacy of this trade remains in some Western legal systems that recognize the term "peppercorn rent" as a token payment for something that is, essentially, a gift.</p>
                                            </div>
                                            <div className=' mt-2 md:m-2'>
                                                <div className='border-[1px] border-black'>
                                                    <h1 className='bg-green-400 text-center text-sm font-bold m-2'>{selectedProduct.name}</h1>
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


            <div className="pt-20 flex justify-end mr-7 cursor-pointer">
                <nav aria-label="Page navigation example">
                    <ul className="inline-flex -space-x-px text-base h-10">
                        <li>
                            <a
                                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            >
                                Previous
                            </a>
                        </li>
                        {Array.from({ length: Math.ceil(Data.length / productsPerPage) }, (_, i) => i + 1).map((page) => (
                            <li key={page}>
                                <a
                                    className={`flex items-center justify-center px-4 h-10 leading-tight ${page === currentPage
                                        ? 'text-blue-600 border bg-blue-50'
                                        : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                                        }`}
                                    onClick={() => setCurrentPage(page)}
                                >
                                    {page}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
    );
};

export default Section6;
