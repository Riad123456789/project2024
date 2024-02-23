import { IoMdMailUnread } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import Damo from "./Damo";

const ContactPage = () => {
    return (
        <div className="">

            <div className="relative w-full bg3 h-36 lg:h-72 shadow-lg shadow-lime-400 ">
                <div className=' bg-gradient-to-r from-[#1c1b1b] to-[#210d0d] h-full opacity-60'>
                </div>
                <h1 className="h-full w-full font-serif text-white text-center  text-2xl lg:text-4xl absolute top-[48%]">
                    CONTACT US
                </h1>
            </div>

            <div className="grid  lg:grid-cols-3 gap-5 max-w-6xl mx-auto pt-16 md:px-6 lg:px-0">

                <div className=" w-[350px] md:w-full lg:w-[350px] mx-auto bg-base-100 shadow-md  shadow-gray-700 ">
                    <figure className="pt-10   ">
                        <div className=" border-4 border-green-600 flex justify-center items-center rounded-full px-2 py-[16px] w-[90px] mx-auto ">
                            <IoLocationSharp size={45} color="green"></IoLocationSharp>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-serif">ADDRESS</h2>
                        <p className="font-sans">Dakhshin Mollartek,Uttara Dhaka-1230</p>
                        <div className="card-actions">
                        </div>
                    </div>
                </div>


                <div className=" w-[350px] md:w-full lg:w-[350px] mx-auto bg-base-100 shadow-md shadow-gray-700 ">
                    <figure className="pt-10   ">
                        <div className=" border-4 border-green-600 flex justify-center items-center rounded-full px-2 py-[16px] w-[90px] mx-auto ">
                            <MdPhoneInTalk size={45} color="green"></MdPhoneInTalk>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-serif">PHONE</h2>
                        <p className="font-sans">+8801919509903</p>
                        <div className="card-actions">
                        </div>
                    </div>
                </div>


                <div className=" w-[350px] md:w-full lg:w-[350px] mx-auto bg-base-100 shadow-md  shadow-gray-700 ">
                    <figure className="pt-10   ">
                        <div className=" border-4 border-green-600 flex justify-center items-center rounded-full px-2 py-[16px] w-[90px] mx-auto ">
                            <IoMdMailUnread size={45} color="green"></IoMdMailUnread>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-serif">E-MAIL</h2>
                        <p className="font-sans">rktradingbd777@gmail.com</p>
                        <div className="card-actions">
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Damo></Damo>
            </div>
        </div>
    );
};

export default ContactPage;