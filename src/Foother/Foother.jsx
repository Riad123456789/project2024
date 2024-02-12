import { HiOutlineMailOpen } from 'react-icons/hi'
import { MdOutlineLocationOn } from 'react-icons/md'
import { MdOutlinePhoneInTalk } from "react-icons/md"
import { IoIosArrowForward } from "react-icons/io";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { SiGmail } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";

const Foother = () => {
    return (
        <div>
            <footer className="p-6 text-black mx-auto bg-gray-800 bg-opacity-80 overflow-hidden">
                <div className="container sm:grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4 items-start justify-center">

                    <div className="flex flex-col my-8 lg:pl-10 ">
                        <h2 className="font-medium text-2xl font-serif text-lime-600">NAVIGATION MENU</h2>
                        <div className="flex flex-wrap sm:flex-col gap-1 text-sm mt-3 ">
                            <p className=' active:scale-95 text-white font-sans flex items-center gap-3' >
                                <IoIosArrowForward></IoIosArrowForward>  HOME
                            </p>
                            <p className='  text-white font-sans flex items-center gap-3' >
                                <IoIosArrowForward></IoIosArrowForward>  ABOUT
                            </p>
                            <p className=' active:scale-95 text-white font-sans flex items-center gap-3'>
                                <IoIosArrowForward></IoIosArrowForward>   CONTACT
                            </p>
                            <p className=' active:scale-95 text-white font-sans flex items-center gap-3' >
                                <IoIosArrowForward></IoIosArrowForward>   GALLERY
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col my-8  ">
                        <h2 className="font-medium  text-2xl font-serif text-lime-600">COMMUNITY</h2>
                        <div className="flex sm:flex-col flex-wrap gap-1 text-sm text-white font-sans mt-3 ">
                            <p className='  text-white font-sans flex items-center gap-2' >
                                <BiLogoFacebookSquare size={20}></BiLogoFacebookSquare>  FACEBOOK
                            </p>
                            <p className='  text-white font-sans flex items-center gap-2 ml-[2px]' >
                                <SiGmail size={17}></SiGmail>Gmail
                            </p>
                            <p className='  text-white font-sans flex items-center gap-2 ml-[]' >
                                <AiFillYoutube size={20}></AiFillYoutube>YouTube
                            </p>
                            <p className='  text-white font-sans flex items-center gap-2 ml-[1px]' >
                                <BsTwitter size={17}></BsTwitter>Twitter
                            </p>
                           

                        </div>
                    </div>
                    <div className="flex flex-col my-8  ">
                        <h2 className="font-medium text-2xl font-serif text-lime-600 ">ABOUT  RK TRADING</h2>
                        <div className="flex  flex-col gap-1 text-xs text-white font-serif mt-2">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
                        </div>
                    </div>
                    <div className="flex flex-col my-8  lg:pl-20 ">
                        <h2 className="font-medium text-2xl font-serif text-lime-600">GET IN TOUCH</h2>
                        <div className="flex sm:flex-col flex-wrap gap-1 text-sm dark:text-blacK mt-2">
                            <span className='flex justify-start items-center gap-1  py-2 pl-2 text-white font-sans'><MdOutlineLocationOn />  12 Tottina, NY, USA</span>
                            <a className='flex justify-start items-center gap-1 py-2 pl-2 text-white font-sans' ><HiOutlineMailOpen /> riad0273@gmail.com</a>
                            <a className='flex justify-start items-center gap-1 py-2 pl-2 text-white font-sans' ><MdOutlinePhoneInTalk /> riad0273@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center px-6 pt-8 text-sm ">
                    <span className=" text-white font-sans ">© Copyright 2024. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    );
};

export default Foother;