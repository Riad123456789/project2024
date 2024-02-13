import { FaCarSide } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import { FaBirthdayCake } from "react-icons/fa";
import { BiSolidParty } from "react-icons/bi";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import img from "../../../public/qqq.jpeg"

const Section1 = () => {
    return (
        <div className="my-12 lg:my-12 max-w-6xl mx-auto ">
            <div className="pt-5 lg:pt-16 ">
                <h1 className="text-4xl font-serif px-6">PRACTICE AREAS</h1>


                <div className="flex flex-col lg:flex-row  gap-5 pt-10 md:pt-16 px-6">

                    <div className="flex-1 space-y-14 ">

                        <div className="flex-1">
                            <div className="lg:flex items-center gap-10 space-y-9 lg:space-y-0 ">
                                <div className="flex-1 space-y-2   px-3 py-5 lg:px-0 lg:py-0 shadow-2xl  lg:shadow-none ">
                                    <h1 className="text-2xl font-serif flex gap-4 items-center">
                                        <span><FaCarSide size={28}></FaCarSide></span>Home Delivery</h1>
                                    <p className="font-sans text-xs ml-[45px]">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="flex-1 space-y-2   px-3 py-5 lg:px-0 lg:py-0 shadow-2xl  lg:shadow-none ">
                                    <h1 className="text-2xl font-serif flex gap-4 items-center">
                                        <span><FaGift size={23}></FaGift></span>Wedding party</h1>
                                    <p className="font-sans text-xs ml-[45px]" >Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>


                        <div className="flex-1">
                            <div className="lg:flex items-center gap-10 space-y-9 lg:space-y-0 ">
                                <div className="flex-1 space-y-2  px-3 py-5 lg:px-0 lg:py-0 shadow-2xl  lg:shadow-none">
                                    <h1 className="text-2xl font-serif flex gap-4 items-center">
                                        <span><BiSolidParty size={28}></BiSolidParty></span>Breakup party</h1>
                                    <p className="font-sans text-xs ml-[45px]">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="flex-1 space-y-2  px-3 py-5 lg:px-0 lg:py-0 shadow-2xl  lg:shadow-none">
                                    <h1 className="text-2xl font-serif flex gap-4 items-center">
                                        <span><FaBirthdayCake size={23}></FaBirthdayCake></span>Birthday party</h1>
                                    <p className="font-sans text-xs ml-[45px]" >Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>


                        <div className="flex-1">
                            <div className="lg:flex items-center gap-10 space-y-9 lg:space-y-0 ">
                                <div className="flex-1 space-y-2  px-3 py-5 lg:px-0 lg:py-0 shadow-2xl  lg:shadow-none">
                                    <h1 className="text-2xl font-serif flex gap-4 items-center">
                                        <span><BsFillCalendarEventFill size={22}></BsFillCalendarEventFill></span>Event party</h1>
                                    <p className="font-sans text-xs ml-[45px]">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="flex-1 space-y-2   px-3 py-5 lg:px-0 lg:py-0 shadow-2xl  lg:shadow-none" >
                                    <h1 className="text-2xl font-serif flex gap-4 items-center">
                                        <span><FaPeopleGroup size={28}></FaPeopleGroup></span>General Meeting </h1>
                                    <p className="font-sans text-xs ml-[45px]" >Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="flex-1  ">
                        <div className="mt-4 lg:mt-0 lg:pl-14 flex justify-center ">
                            <img className="h-[385px] md:w-full border-2 " src={img} alt="" />
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Section1;