const GalleryPage = () => {
    return (
        <div className="pt-[64px]">

            <div className="relative w-full bg2 h-36 lg:h-72 shadow-md shadow-amber-300 ">
                <div className=' bg-gradient-to-r from-[#1c1b1b] to-[#322d13] h-full opacity-60'>
                </div>
                <h1 className=" h-full w-full font-serif text-white text-center  text-2xl lg:text-4xl absolute top-[50%] ">
                    OUR GALLERY
                </h1>
            </div>


            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 py-5  lg:px-28 lg:py-10 overflow-hidden">

                <div className="relative group overflow-hidden ">
                    <img src="https://i.ibb.co/D795d02/Whats-App-Image-2024-02-11-at-1-58-44-PM.jpg" alt="Shoes"
                        className="h-auto max-w-full relative  p-[6px] shadow-inner duration-1000 group-hover:scale-110"></img>
                    <div className="h-14 w-[410px] group absolute bottom-[0px] group-hover:opacity-70 group-hover:bg-gray-900 duration-1000 ">
                    </div>

                    <p className=" text-center pt-4 absolute bottom-[20px] left-[155px] opacity-0 group-hover:opacity-100 group-hover:text-white  duration-700 ">Spices & Herbs</p>
                    <div
                        className="absolute  rounded-full  bg-lime-600 p-2 top-28 left-[184px] opacity-0 group-hover:opacity-100  group-hover:top-28 duration-700 delay-200 ">
                        <RiSearch2Line size={20} color="white"></RiSearch2Line>
                    </div>
                </div>
                <div className="    relative group  ">
                    <img src="https://i.ibb.co/19BLvdv/Whats-App-Image-2024-02-11-at-1-58-38-PM.jpg" alt="Shoes"
                        className="h-auto max-w-full relative  p-[6px] shadow-inner duration-1000 group-hover:scale-110"></img>
                    <div className="h-14 w-[410px] group absolute bottom-[0px] group-hover:opacity-70 group-hover:bg-gray-900 duration-1000 ">
                    </div>

                    <p className=" text-center pt-4 absolute bottom-[20px] left-[155px] opacity-0 group-hover:opacity-100 group-hover:text-white  duration-700 ">Spices & Herbs</p>
                    <div
                        className="absolute  rounded-full  bg-lime-600 p-2 top-28 left-[184px] opacity-0 group-hover:opacity-100  group-hover:top-28 duration-700 delay-200 ">
                        <RiSearch2Line size={20} color="white"></RiSearch2Line>
                    </div>
                </div>

            </div> */}

            <div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-7 lg:px-16 py-9 lg:py-16">

                    <div className="grid gap-4">
                        <div className="overflow-hidden shadow-md cursor-pointer shadow-slate-600 rounded-lg">
                            <img className="border h-full max-w-full rounded-lg hover:scale-110 duration-700" src="https://i.ibb.co/Z1Nwqhg/istockphoto-821853124-612x612.jpg" alt="" />
                        </div>
                        <div className="overflow-hidden shadow-md cursor-pointer shadow-slate-700 rounded-lg">
                            <img className="h-full max-w-full rounded-lg hover:scale-110 duration-700" src="https://i.ibb.co/rGdsbtF/pngtree-woodnut-image-of-walnuts-and-shelled-nuts-image-12966408.jpg" alt="" />
                        </div>
                        <div className="overflow-hidden shadow-md cursor-pointer shadow-red-400 rounded-lg">
                            <img className="h-full max-w-full rounded-lg hover:scale-110 duration-700" src="https://i.ibb.co/rdz9kBF/depositphotos-4059470-stock-photo-ripe-cashew-nuts-with-leaves.webp" alt="" />
                        </div>
                    </div>

                    <div className="grid gap-4">
                        <div className="overflow-hidden shadow-md cursor-pointer shadow-orange-400 rounded-lg">
                            <img className="h-full max-w-full rounded-lg hover:scale-110 duration-700" src="https://i.ibb.co/Wp8wr0R/pngtree-mixed-nuts-in-a-wooden-bowl-image-13834727.png" alt="" />
                        </div>
                        <div className="overflow-hidden shadow-md cursor-pointer shadow-slate-700 rounded-lg">
                            <img className="h-full max-w-full rounded-lg hover:scale-110 duration-700" src="https://i.ibb.co/q0gR6RF/68411124.jpg" alt="" />
                        </div>
                        <div className="overflow-hidden shadow-md cursor-pointer shadow-lime-500 rounded-lg">
                            <img className="h-full max-w-full rounded-lg hover:scale-110 duration-700" src="https://i.ibb.co/8rDT68w/istockphoto-1307206850-612x612.jpg" alt="" />
                        </div>
                    </div>

                    <div className="grid gap-4">
                        <div className="overflow-hidden shadow-md cursor-pointer shadow-green-500 rounded-lg">
                            <img className="h-full max-w-full rounded-lg hover:scale-110 duration-700" src="https://i.ibb.co/ByWYFwz/raisins-88532-640.jpg" alt="" />
                        </div>
                        <div className="overflow-hidden shadow-md cursor-pointer shadow-cyan-500 rounded-lg">
                            <img className="h-full max-w-full rounded-lg hover:scale-110 duration-700" src="https://i.ibb.co/QbbLwBd/cd990f21fce39de7d5cebe53b87f5bdd-jpg-750x750-jpg.webp" alt="" />
                        </div>
                        <div className="overflow-hidden shadow-md cursor-pointer shadow-violet-700 rounded-lg">
                            <img className="h-full max-w-full rounded-lg hover:scale-110 duration-700" src="https://i.ibb.co/wM7p6X0/23d687c8-163e-4211-97ba-68f025fd7974.jpg" alt="" />
                        </div>
                    </div>

                    <div className="grid gap-4">
                        <div className="overflow-hidden shadow-md cursor-pointer shadow-slate-600 rounded-lg">
                            <img className="h-full max-w-full rounded-lg hover:scale-110 duration-700" src="https://i.ibb.co/b2SvTfN/470639e0-bac4-4f69-874a-230f0662ba8c.jpg" alt="" />
                        </div>
                        <div className="overflow-hidden shadow-md cursor-pointer shadow-red-400 rounded-lg">
                            <img className="h-full max-w-full rounded-lg hover:scale-110 duration-700" src="https://i.ibb.co/tKMkhc2/98149633.webp" alt="" />
                        </div>
                        <div className="overflow-hidden shadow-md cursor-pointer shadow-fuchsia-600 rounded-lg">
                            <img className="h-full max-w-full rounded-lg hover:scale-110 duration-700" src="https://i.ibb.co/ch0fw3w/ee635573-6d93-4aab-bd87-cbf8ad4e551d-1.jpg" alt="" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default GalleryPage;