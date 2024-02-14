import { FaCarSide } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
const Section2 = () => {
    return (
        <div className="my-16 overflow-hidden">
            <div style={{
                backgroundImage: `url("https://i.ibb.co/NWN5SH8/riad1.jpg")`,
                backgroundRepeat: "no-repeat",
                 backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",

            }}
                className="w-full h-[500px] md:h-[340px] ">
                <div className=" bg-gradient-to-r from-[#270f0f] to-[#210303] opacity-70 w-full h-full pt-8 ">

                    <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-10 lg:space-y-0  max-w-6xl mx-auto mt-16  lg:pt-14 ">
                        <div className=" space-y-2 ">
                            <h1 className=" md:text-2xl lg:text-3xl  font-serif flex gap-4 items-center text-white">
                                <span><FaCarSide color="white" size={28}></FaCarSide></span>Free Shipping</h1>
                            <p className="font-sans md:text-sm lg:text-base ml-[45px] text-white ">On order over $500</p>
                        </div>
                        <div className=" space-y-2   ">
                            <h1 className=" md:text-2xl lg:text-3xl font-serif flex gap-4 items-center text-white">
                                <span><MdPayment color="white" size={28}></MdPayment></span>Safe Payment</h1>
                            <p className="font-sans md:text-sm lg:text-base ml-[45px] text-white ">Easy paymen</p>
                        </div>
                        <div className=" space-y-2   ">
                            <h1 className=" md:text-2xl lg:text-3xl font-serif flex gap-4 items-center text-white">
                                <span><BiSupport color="white" size={28}></BiSupport></span>Support</h1>
                            <p className="font-sans md:text-sm lg:text-base ml-[45px] text-white ">On order over $500</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section2;