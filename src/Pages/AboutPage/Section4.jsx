

const Section4 = () => {
    return (
        <div >
            <div className=" bg h-36 lg:h-72">
                <h1 className="text-center font-serif text-2xl lg:text-4xl flex  justify-center pt-20 lg:pt-36">ABOUT US</h1>
            </div>


            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 lg:gap-5 pt-10">

                <div className="  flex-1 p-10 lg:p-16 relative ">
                    <img src="https://i.ibb.co/zP7DhsY/423422654-6984580211654130-6927551126586771729-n-1.jpg" alt="" />
                    <div className=" bg-red-700 absolute bottom-10 lg:bottom-16 opacity-60  border h-16 lg:h-20   w-[347px] lg:w-[503px] ">
                    </div>
                    <div className="absolute px-5 py-2 bottom-10 lg:bottom-16">
                        <p className=" text-white font-sans  lg:text-xl  ">ENGR. MD HUMAYUN KABIR</p>
                        <p className=" text-white font-sans text-sm pt-1 lg:text-base  ">CEO & PROPRIETOR</p>
                    </div>
                </div>




                <div className="flex-1 pt-14 ">
                    <div className="space-y-5 pb-10">
                        <h1 className="font-sans text-2xl  ">OUR MISSION </h1>
                        <p className="border-b-2 border-red-600 w-40"></p>
                        <p className="font-sans">To become the first choice of customer for dates, dry fruits, nuts and other precious items in fruits and vegetables along with imported drinks and wines by bringing the freshest and highest quality to maximum number of customers through our own shops across India. Our priority lies with consistently keeping up our customers by serving them the products without compromising the level of quality.</p>
                    </div>

                    <div className="space-y-5">
                        <h1 className="font-sans text-2xl">OUR VISION</h1>
                        <p className="border-b-2 border-red-600 w-40"></p>
                        <p className="font-sans">We endeavour to achieve our vision by following international standards of quality, right from selection till after sales service. For that we have our own dates farm in the Middle East and we cultivate and sale pure organic dates in 40 + varieties. On the other hand we import fine quality Nuts, dry fruits, exotic fruits, vegetables and drinks from the source from which they are available at their best.</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Section4;