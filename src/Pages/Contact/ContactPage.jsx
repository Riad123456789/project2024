import { IoMdMailUnread } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FcCellPhone } from "react-icons/fc";
import Damo from "./Damo";

const ContactPage = () => {
    return (
        <div className="pt-[64px] lg:pt-0">

            <div className="relative w-full bg4 h-36 lg:h-72 shadow-md shadow-lime-400 ">
                <div className=' bg-gradient-to-r from-[#291d1d] to-[#0a3614] h-full opacity-60'>
                </div>
                <h1 className="h-full w-full font-serif text-white text-center  text-2xl lg:text-4xl absolute top-[48%]">
                    CONTACT US
                </h1>
            </div>

            <div className="grid  md:grid-cols-3 max-w-6xl mx-auto gap-5 md:gap-24 mt-12 px-4">

                <div className="border bg-white md:h-64 md:w-[325px] py-4 px-5 md:px-4  space-y-3 rounded-md shadow-lg">
                    <div className="flex justify-center items-center mx-auto">
                        <IoLocationSharp className="border-4 border-red-600 rounded-full p-3  mx-3" size={80} color="red"></IoLocationSharp>
                    </div>
                    <h2 className=" font-serif text-lg md:text-2xl font-semibold text-center">ADDRESS</h2>

                    <p className="font-sans   text-center md:text-center text-sm md:text-sm font-semibold ">
                     Swan Garments Road,Uttara,Dhaka-1230
                    </p>
                    <p className="font-sans   text-center md:text-center text-sm md:text-base font-semibold ">
                        Wapda Road,Ullahpara,Sirajgonj
                    </p>

                </div>

                <div className="border bg-white md:h-64 md:w-[325px] py-4 px-5 md:px-4  space-y-3 rounded-md shadow-lg">
                    <div className="flex justify-center items-center mx-auto">
                        <IoMdMailUnread className="border-4 border-[#2c88de] rounded-full p-3 mx-3" size={80} color="#2c88de"></IoMdMailUnread>
                    </div>
                    <h2 className=" font-serif text-lg md:text-2xl font-semibold text-center">E-MAIL</h2>
                    <p className="font-sans  text-center md:text-center text-base md:text-base font-semibold">
                        rktradingbd777@gmail.com
                    </p>
                </div>

                <div className="border bg-white md:h-64 md:w-[325px] py-4 px-5 md:px-4  space-y-3 rounded-md shadow-lg">
                    <div className="flex justify-center items-center mx-auto">
                        <FcCellPhone className="border-4 border-[#55779e] rounded-full p-3  mx-3" size={80} color="green"></FcCellPhone>
                    </div>
                    <h2 className=" font-serif text-lg md:text-2xl font-semibold text-center uppercase">PHONE</h2>
                    <p className="font-sans  text-center md:text-center text-base md:text-lg font-semibold">+8801795579568</p>
                </div>

            </div>

            <div>
                <Damo></Damo>
            </div>
        </div>
    );
};

export default ContactPage;