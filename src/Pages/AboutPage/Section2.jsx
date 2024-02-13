import { FaCarSide } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";

const Section2 = () => {
    return (
        <div className="my-16">
            <div style={{
                backgroundImage: `url("../../public/qqq.jpeg")`,
                backgroundRepeat: "no-repeat"
                , backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                height: "270px"
            }}
                className="w-full h-[200px] md:h-[340px] ">
                <div className=" bg-gradient-to-r from-[black] to-[#210303] opacity-60 w-full h-full pt-8 ">
                    <div className="grid grid-cols-3 items-center gap-10 space-y-9 lg:space-y-0  max-w-6xl mx-auto pt-16 ">
                        <div className=" space-y-2   ">
                            <h1 className="text-3xl font-serif flex gap-4 items-center text-white">
                                <span><FaCarSide color="white" size={28}></FaCarSide></span>Free Shipping</h1>
                            <p className="font-sans text-base ml-[45px] text-white ">On order over $500</p>
                        </div>
                        <div className=" space-y-2   ">
                            <h1 className="text-3xl font-serif flex gap-4 items-center text-white">
                                <span><FaCarSide color="white" size={28}></FaCarSide></span>Safe Payment</h1>
                            <p className="font-sans text-base ml-[45px] text-white ">Easy paymen</p>
                        </div>
                        <div className=" space-y-2   ">
                            <h1 className="text-3xl font-serif flex gap-4 items-center text-white">
                                <span><FaCarSide color="white" size={28}></FaCarSide></span>Support</h1>
                            <p className="font-sans text-base ml-[45px] text-white ">On order over $500</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section2;