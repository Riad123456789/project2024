import img from "../../public/Spices & herbs (1).png"
import img2 from "../../public/Spices & herbs.png"
import img3 from "../../public/vibes.png"

const Section1 = () => {
    return (
        <div className="max-w-6xl mx-auto mt-8">
            <div className="grid  grid-cols-1 gap-2 px-5 md:px-0 md:grid-cols-2 md:gap-4">

                <div className="relative overflow-hidden cursor-pointer group">
                    <img src={img} alt="" />
                    <div className="absolute top-0 h-full w-full  -left-[570px] group-hover:left-0 transition-all duration-[1s] opacity-40  bg-gradient-to-r from-[#000000] to-[#080000] ">

                    </div>
                </div>

                <div className="relative overflow-hidden cursor-pointer group">
                    <img src={img2} alt="" />
                    <div className="absolute top-0 h-full w-full  -left-[570px] group-hover:left-0 transition-all duration-[1s] opacity-40  bg-gradient-to-r from-[#000000] to-[#080000] ">

                    </div>
                </div>
                <div className="relative overflow-hidden cursor-pointer group">
                    <img src={img3} alt="" />
                    <div className="absolute top-0 h-full w-full  -left-[570px] group-hover:left-0 transition-all duration-[1s] opacity-40  bg-gradient-to-r from-[#000000] to-[#080000] ">

                    </div>
                </div>

                <div className="relative overflow-hidden cursor-pointer group">
                    <img src={img} alt="" />
                    <div className="absolute top-0 h-full w-full  -left-[570px] group-hover:left-0 transition-all duration-[1s] opacity-40  bg-gradient-to-r from-[#000000] to-[#080000] ">

                    </div>
                </div>
                <div className="relative overflow-hidden cursor-pointer group">
                    <img src={img} alt="" />
                    <div className="absolute top-0 h-full w-full  -left-[570px] group-hover:left-0 transition-all duration-[1s] opacity-40  bg-gradient-to-r from-[#000000] to-[#080000] ">

                    </div>
                </div>

                <div className="relative overflow-hidden cursor-pointer group">
                    <img src={img3} alt="" />
                    <div className="absolute top-0 h-full w-full  -left-[570px] group-hover:left-0 transition-all duration-[1s] opacity-40  bg-gradient-to-r from-[#000000] to-[#080000] ">

                    </div>
                </div>
             
            </div>
        </div>
    );
};

export default Section1;