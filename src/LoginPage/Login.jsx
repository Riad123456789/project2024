import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";



const Login = () => {

    const [details, setDeatails] = useState({});
    const { id } = useParams();
    const Details = useLoaderData();


    useEffect(() => {
        const detailsCard = Details?.find(SingleDetails => SingleDetails.id == id)
        setDeatails(detailsCard);
    }, [])
   

    return (
        <div className="pt-20 max-w-7xl mx-auto">
            <div className="py-6  w-11/12 max-w-5xl rounded-none">
                <h3 className="font-semibold font-sans text-xl border-b-2 border-black uppercase pb-2">{details.name}</h3>
                <div className='md:flex '>
                    <div className=' md:w-[78%]'>
                        <p className='text-justify text-xs font-medium pt-1'> <span className='font-bold text-black'> Black pepper </span> (Piper nigrum) is a flowering vine in the family Piperaceae, cultivated for its fruit (the peppercorn), which is usually dried and used as a spice and seasoning. The fruit is a drupe (stonefruit) which is about 5 mm (0.20 in) in diameter (fresh and fully mature), dark red, and contains a stone which encloses a single pepper seed. Peppercorns and the ground pepper derived from them may be described simply as pepper, or more precisely as black pepper (cooked and dried unripe fruit), green pepper (dried unripe fruit), or white pepper (ripe fruit seeds).[2]</p>
                        <p className='text-justify text-xs font-medium pt-4'>Black pepper is native to the Malabar Coast of India,[3][4] and the Malabar pepper is extensively cultivated there and in other tropical regions. Ground, dried, and cooked peppercorns have been used since antiquity, both for flavour and as a traditional medicine. Black pepper is the world's most traded spice,[5] and is one of the most common spices added to cuisines around the world. Its spiciness is due to the chemical compound piperine, which is a different kind of spiciness from that of capsaicin characteristic of chili peppers. It is ubiquitous in the Western world as a seasoning, and is often paired with salt and available on dining tables in shakers or mills.</p>
                        <h3 className="font-medium  text-lg border-b-2 border-black uppercase pb-1 pt-4 font-serif">Etymology</h3>
                        <p className='text-justify text-xs font-medium pt-4'>The word pepper derives from Old English pipor, Latin piper, and Greek: πέπερι.[6] The Greek likely derives from Dravidian pippali, meaning "long pepper".[7] Sanskrit pippali shares the same meaning.[6]</p>
                        <h3 className="font-medium  text-lg border-b-2 border-black uppercase pb-1 pt-4 font-serif">History</h3>
                        <p className='text-justify text-xs font-medium pt-2'>Black pepper is native to South Asia and Southeast Asia, and has been known to Indian cooking since at least 2000 BCE.[20][how?] J. Innes Miller notes that while pepper was grown in southern Thailand and in Malaysia,[when?] its most important source was India, particularly the Malabar Coast, in what is now the state of Kerala.[21] The lost ancient port city of Muziris in Kerala, famous for exporting black pepper and various other spices, gets mentioned in a number of classical historical sources for its trade with Roman Empire, Egypt, Mesopotamia, Levant, and Yemen.[22][23] "peppercorn rent" as a token payment for something that is, essentially, a gift.</p>
                    </div>
                    <div className=' mt-2 md:m-2'>
                        <div className='border-[1px] border-black'>
                            <h1 className='bg-green-400 text-center text-sm font-bold m-2'>{details.name}</h1>
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
        </div>
    );
};

export default Login;