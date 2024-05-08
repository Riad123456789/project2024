


const Banner = () => {

    return (
        <div className=" bg-slate-100  px-40 pt-9  z-50">
            <p className="ml-10 font-medium text-yellow-800">WEDDING MATRIMONY</p>

            <div className="grid grid-cols-4 pb-8 pt-6 px-6 ml-9 gap-20">




                <div className="h-48 w-80 bg-red-500 rounded-md relative overflow-hidden cursor-pointer group">
                    <img className=" bg-cover group-hover:scale-110 duration-700 overflow-hidden" src="https://i.ibb.co/rZbDBvB/Adobe-Stock-650211873-Preview.jpg" alt="" />
                    <div className="absolute top-0 h-full w-full bg-gradient-to-r from-red-500 ">
                    </div>
                    <div className="absolute top-0 h-full w-full   ">
                        <div className=" space-y-1 px-6 pt-16 h-full ">
                            <p className="text-xl text-white">Browse Profiles </p>
                            <p className="text-xs text-white pb-4">1200+ VERIFIED PROFILES</p>
                            <button className="btn btn-sm bg-black text-white border-none hover:bg-black ">MORE DETAILS</button>
                        </div>
                    </div>
                </div>

                <div className="h-48 w-80  rounded-md relative overflow-hidden cursor-pointer group">
                    <img className=" bg-cover group-hover:scale-110 duration-700 overflow-hidden" src="https://i.ibb.co/bvsvRYc/pre-wedding-photoshoot-ideas-2023-1440x960.jpg" alt="" />
                    <div className="absolute top-0 h-full w-full bg-gradient-to-r from-blue-500 ">
                    </div>
                    <div className="absolute top-0 h-full w-full   ">
                        <div className=" space-y-1 px-6 pt-16 h-full ">
                            <p className="text-xl text-white">Wedding Pages </p>
                            <p className="text-xs text-white pb-4">MAKE RESERVATION</p>
                            <button className="btn btn-sm bg-black text-white border-none hover:bg-black ">MORE DETAILS</button>
                        </div>
                    </div>
                </div>

                <div className="h-48 w-80 bg-red-500 rounded-md relative overflow-hidden cursor-pointer group">
                    <img className=" bg-cover group-hover:scale-110 duration-700 overflow-hidden" src="https://i.ibb.co/FhkvvQX/stylish-woman-spending-time-summer-field-1157-36092.jpg" alt="" />
                    <div className="absolute top-0 h-full w-full bg-gradient-to-r from-green-500 ">
                    </div>
                    <div className="absolute top-0 h-full w-full   ">
                        <div className=" space-y-1 px-6 pt-16 h-full ">
                            <p className="text-xl text-white">All Services </p>
                            <p className="text-xs text-white pb-4">1200+ VERIFIED PROFILES</p>
                            <button className="btn btn-sm bg-black text-white border-none hover:bg-black ">MORE DETAILS</button>
                        </div>
                    </div>
                </div>

                <div className="h-48 w-80 bg-red-500 rounded-md relative overflow-hidden cursor-pointer group">
                    <img className=" bg-cover group-hover:scale-110 duration-700 overflow-hidden" src="https://i.ibb.co/zZsp0HC/BJ-494.jpg" alt="" />
                    <div className="absolute top-0 h-full w-full bg-gradient-to-r from-amber-300 ">
                    </div>
                    <div className="absolute top-0 h-full w-full   ">
                        <div className=" space-y-1 px-6 pt-16 h-full ">
                            <p className="text-xl text-white">Join Now </p>
                            <p className="text-xs text-white pb-4">1200+ VERIFIED PROFILES</p>
                            <button className="btn btn-sm bg-black text-white border-none hover:bg-black ">MORE DETAILS</button>
                        </div>
                    </div>
                </div>


            </div>

        </div>

    );
};

export default Banner;