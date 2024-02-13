import img from "../../../public/qqq.jpeg"

const Section3 = () => {
    return (
        <div className="my-16 max-w-7xl mx-auto space-y-6 lg:pt-16">


            <div className="lg:flex items-center px-3 md:px-20">
                <div className="flex-1 space-y-5  w-[390px]  md:w-[550px] mx-auto">
                    <h1 className="text-3xl font-serif">Koreni</h1>
                    <p className="text-sm font-sans lg:w-[470px] ">I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <button type="button" className="text-black bg-gradient-to-r  from-lime-500 via-lime-400 to-lime-200 hover:bg-gradient-to-br  focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 font-sans  ">Shop Now</button>
                </div>
                <div className="flex-1">
                    <div className="mt-6 lg:mt-0 lg:pl-14 flex justify-center ">
                        <img className="h-[350px] p-2 shadow-2xl md:w-full border-2 " src={img} alt="" />
                    </div>
                </div>
            </div>



            <div className=" flex flex-col-reverse lg:flex-row items-center">
                <div className="flex-1 ">
                    <div className="mt-4 lg:mt-0 lg:pl-16 flex justify-center  ">
                        <img className="h-[350px]  p-2 shadow-2xl md:w-full border-2 " src={img} alt="" />
                    </div>
                </div>
                <div className="flex-1 space-y-5 lg:ml-32 lg:pl-2 w-[390px]  md:w-[550px] mx-auto ">
                    <h1 className="text-3xl font-serif">Spices and herbs</h1>
                    <p className="text-sm font-sans lg:w-[450px] ">I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <button type="button" className="text-black bg-gradient-to-r  from-lime-500 via-lime-400 to-lime-200 hover:bg-gradient-to-br  focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 font-sans  ">Shop Now</button>
                </div>
            </div>


            <div className="lg:flex items-center px-3 md:px-20">
                <div className="flex-1 space-y-5  w-[390px]  md:w-[550px] mx-auto">
                    <h1 className="text-3xl font-serif">Fine Food Cuisine</h1>
                    <p className="text-sm font-sans lg:w-[470px] ">I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <button type="button" className="text-black bg-gradient-to-r  from-lime-500 via-lime-400 to-lime-200 hover:bg-gradient-to-br  focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 font-sans  ">Shop Now</button>
                </div>
                <div className="flex-1">
                    <div className="mt-6 lg:mt-0 lg:pl-14 flex justify-center ">
                        <img className="h-[350px] p-2 shadow-2xl md:w-full border-2 " src={img} alt="" />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Section3;