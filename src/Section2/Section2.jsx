import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay,  } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import 'swiper/css/effect-cube';


const Section2 = () => {

    return (
        <div className=" md:my-14 md:mt-16  px-2 md:px-0 ">

            <div className='max-w-7xl mx-auto  md:flex gap-5'>

                <div className='px-5 md:px-0 space-y-2 '>
                    <div className='bg h-11 w-full mt-2'>
                    </div>
                    <h1 className='text-3xl md:text-2xl font-semibold text-orange-500  border-b-4 border-orange-500 py-3 text-center'>
                        OUR POPULAR  SPICES
                    </h1>
                    <p className='text-xs md:w-60 font-semibold text-gray-600  pt-2 text-center mx-auto pb-4 md:pb-20 md:text-justify '>To become the first choice of customer for dates, dry fruits, nuts and other precious items in fruits and  wines by bringing the freshest and highest quality .</p>
                  
                </div>

                <div className="w-full md:flex-1 overflow-hidden ">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCards]}
                        autoplay={{
                            delay: 2500,
                            // disableOnInteraction: false,
                        }}

                        breakpoints={{
                            425: {
                                slidesPerView: 3,
                                spaceBetween: 3,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 5,
                            },
                        }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide className='border-black'>
                            <div className="relative   transition-all duration-300 cursor-pointer filter  rounded-xl bg-gradient-to-r  from-[#0ba360] to-[#3cba92] bg-clip-border text-gray-700 shadow-xl group-hover:shadow-lg h-[270px] md:h-[335px] w-32 md:w-56 mx-auto  ">
                                <div className=" h-[145px] md:h-[206px] " href="#">
                                    <img className="h-[150px] md:h-[187px] rounded-t-xl w-full" src="https://i.ibb.co/zf1zFWs/Coriender-Seeds-6.jpg" alt="product image" />
                                </div>
                                <div className=" pt-4 px-1 md:pt-0 md:px-2 md:pb-5 ">
                                    <a href="#">
                                        <h5 className="text-base md:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Coriender Seeds</h5>
                                    </a>
                                    <div className=' pt-1 space-y-[1px] '>
                                        <div className='flex  items-center md:gap-5'>
                                            <p className='text-xs md:font-semibold  md:pl-1 '>Kingdom :</p>
                                            <p className='text-xs md:font-semibold pl-[10px] md:pl-2 text-blue-700'>Plantae</p>
                                        </div>
                                        <div className='flex  items-center md:gap-10'>
                                            <p className='text-xs md:font-semibold md:pl-1 '>Clade :</p>
                                            <p className='text-xs md:font-semibold pl-[6px] md:pl-2 text-blue-700'>Tracheophytes</p>
                                        </div>
                                        <div className='flex  items-center md:gap-10'>
                                            <p className='text-xs md:font-semibold md:pl-1 '>Order :</p>
                                            <p className='text-xs md:font-semibold pl-[6px] md:pl-2 text-blue-700'>Angiosperms</p>
                                        </div>
                                        <div className=' flex  items-center md:gap-9'>
                                            <p className='text-xs md:font-semibold md:pl-1 '>Family :</p>
                                            <p className='text-xs md:font-semibold pl-[6px] md:pl-2 text-blue-700'>Piperaceae</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='border-black'>
                            <div className="relative   transition-all duration-300 cursor-pointer filter  rounded-xl bg-gradient-to-r  from-[#0ba360] to-[#3cba92] bg-clip-border text-gray-700 shadow-xl group-hover:shadow-lg h-[270px] md:h-[335px] w-32 md:w-56 mx-auto  ">
                                <div className=" h-[145px] md:h-[206px] " href="#">
                                    <img className="h-[150px] md:h-[187px] rounded-t-xl w-full" src="https://i.ibb.co/zf1zFWs/Coriender-Seeds-6.jpg" alt="product image" />
                                </div>
                                <div className=" pt-4 px-1 md:pt-0 md:px-2 md:pb-5 ">
                                    <a href="#">
                                        <h5 className="text-base md:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Coriender Seeds</h5>
                                    </a>
                                    <div className=' pt-1 space-y-[1px] '>
                                        <div className='flex  items-center md:gap-5'>
                                            <p className='text-xs md:font-semibold  md:pl-1 '>Kingdom :</p>
                                            <p className='text-xs md:font-semibold pl-[10px] md:pl-2 text-blue-700'>Plantae</p>
                                        </div>
                                        <div className='flex  items-center md:gap-10'>
                                            <p className='text-xs md:font-semibold md:pl-1 '>Clade :</p>
                                            <p className='text-xs md:font-semibold pl-[6px] md:pl-2 text-blue-700'>Tracheophytes</p>
                                        </div>
                                        <div className='flex  items-center md:gap-10'>
                                            <p className='text-xs md:font-semibold md:pl-1 '>Order :</p>
                                            <p className='text-xs md:font-semibold pl-[6px] md:pl-2 text-blue-700'>Angiosperms</p>
                                        </div>
                                        <div className=' flex  items-center md:gap-9'>
                                            <p className='text-xs md:font-semibold md:pl-1 '>Family :</p>
                                            <p className='text-xs md:font-semibold pl-[6px] md:pl-2 text-blue-700'>Piperaceae</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='border-black'>
                            <div className="relative   transition-all duration-300 cursor-pointer filter  rounded-xl bg-gradient-to-r  from-[#0ba360] to-[#3cba92] bg-clip-border text-gray-700 shadow-xl group-hover:shadow-lg h-[270px] md:h-[335px] w-32 md:w-56 mx-auto  ">
                                <div className=" h-[145px] md:h-[206px] " href="#">
                                    <img className="h-[150px] md:h-[187px] rounded-t-xl w-full" src="https://i.ibb.co/zf1zFWs/Coriender-Seeds-6.jpg" alt="product image" />
                                </div>
                                <div className=" pt-4 px-1 md:pt-0 md:px-2 md:pb-5 ">
                                    <a href="#">
                                        <h5 className="text-base md:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Coriender Seeds</h5>
                                    </a>
                                    <div className=' pt-1 space-y-[1px] '>
                                        <div className='flex  items-center md:gap-5'>
                                            <p className='text-xs md:font-semibold  md:pl-1 '>Kingdom :</p>
                                            <p className='text-xs md:font-semibold pl-[10px] md:pl-2 text-blue-700'>Plantae</p>
                                        </div>
                                        <div className='flex  items-center md:gap-10'>
                                            <p className='text-xs md:font-semibold md:pl-1 '>Clade :</p>
                                            <p className='text-xs md:font-semibold pl-[6px] md:pl-2 text-blue-700'>Tracheophytes</p>
                                        </div>
                                        <div className='flex  items-center md:gap-10'>
                                            <p className='text-xs md:font-semibold md:pl-1 '>Order :</p>
                                            <p className='text-xs md:font-semibold pl-[6px] md:pl-2 text-blue-700'>Angiosperms</p>
                                        </div>
                                        <div className=' flex  items-center md:gap-9'>
                                            <p className='text-xs md:font-semibold md:pl-1 '>Family :</p>
                                            <p className='text-xs md:font-semibold pl-[6px] md:pl-2 text-blue-700'>Piperaceae</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='border-black'>
                            <div className="relative   transition-all duration-300 cursor-pointer filter  rounded-xl bg-gradient-to-r  from-[#0ba360] to-[#3cba92] bg-clip-border text-gray-700 shadow-xl group-hover:shadow-lg h-[270px] md:h-[335px] w-32 md:w-56 mx-auto  ">
                                <div className=" h-[145px] md:h-[206px] " href="#">
                                    <img className="h-[150px] md:h-[187px] rounded-t-xl w-full" src="https://i.ibb.co/zf1zFWs/Coriender-Seeds-6.jpg" alt="product image" />
                                </div>
                                <div className=" pt-4 px-1 md:pt-0 md:px-2 md:pb-5 ">
                                    <a href="#">
                                        <h5 className="text-base md:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Coriender Seeds</h5>
                                    </a>
                                    <div className=' pt-1 space-y-[1px] '>
                                        <div className='flex  items-center md:gap-5'>
                                            <p className='text-xs md:font-semibold  md:pl-1 '>Kingdom :</p>
                                            <p className='text-xs md:font-semibold pl-[10px] md:pl-2 text-blue-700'>Plantae</p>
                                        </div>
                                        <div className='flex  items-center md:gap-10'>
                                            <p className='text-xs md:font-semibold md:pl-1 '>Clade :</p>
                                            <p className='text-xs md:font-semibold pl-[6px] md:pl-2 text-blue-700'>Tracheophytes</p>
                                        </div>
                                        <div className='flex  items-center md:gap-10'>
                                            <p className='text-xs md:font-semibold md:pl-1 '>Order :</p>
                                            <p className='text-xs md:font-semibold pl-[6px] md:pl-2 text-blue-700'>Angiosperms</p>
                                        </div>
                                        <div className=' flex  items-center md:gap-9'>
                                            <p className='text-xs md:font-semibold md:pl-1 '>Family :</p>
                                            <p className='text-xs md:font-semibold pl-[6px] md:pl-2 text-blue-700'>Piperaceae</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='border-black'>
                            <div className="relative   transition-all duration-300 cursor-pointer filter  rounded-xl bg-gradient-to-r  from-[#0ba360] to-[#3cba92] bg-clip-border text-gray-700 shadow-xl group-hover:shadow-lg h-[270px] md:h-[335px] w-32 md:w-56 mx-auto  ">
                                <div className=" h-[145px] md:h-[206px] " href="#">
                                    <img className="h-[150px] md:h-[187px] rounded-t-xl w-full" src="https://i.ibb.co/zf1zFWs/Coriender-Seeds-6.jpg" alt="product image" />
                                </div>
                                <div className=" pt-4 px-1 md:pt-0 md:px-2 md:pb-5 ">
                                    <a href="#">
                                        <h5 className="text-base md:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Coriender Seeds</h5>
                                    </a>
                                    <div className=' pt-1 space-y-[1px] '>
                                        <div className='flex  items-center md:gap-5'>
                                            <p className='text-xs md:font-semibold  md:pl-1 '>Kingdom :</p>
                                            <p className='text-xs md:font-semibold pl-[10px] md:pl-2 text-blue-700'>Plantae</p>
                                        </div>
                                        <div className='flex  items-center md:gap-10'>
                                            <p className='text-xs md:font-semibold md:pl-1 '>Clade :</p>
                                            <p className='text-xs md:font-semibold pl-[6px] md:pl-2 text-blue-700'>Tracheophytes</p>
                                        </div>
                                        <div className='flex  items-center md:gap-10'>
                                            <p className='text-xs md:font-semibold md:pl-1 '>Order :</p>
                                            <p className='text-xs md:font-semibold pl-[6px] md:pl-2 text-blue-700'>Angiosperms</p>
                                        </div>
                                        <div className=' flex  items-center md:gap-9'>
                                            <p className='text-xs md:font-semibold md:pl-1 '>Family :</p>
                                            <p className='text-xs md:font-semibold pl-[6px] md:pl-2 text-blue-700'>Piperaceae</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='border-black'>
                            <div className="relative   transition-all duration-300 cursor-pointer filter  rounded-xl bg-gradient-to-r  from-[#0ba360] to-[#3cba92] bg-clip-border text-gray-700 shadow-xl group-hover:shadow-lg h-[270px] md:h-[335px] w-32 md:w-56 mx-auto  ">
                                <div className=" h-[145px] md:h-[206px] " href="#">
                                    <img className="h-[150px] md:h-[187px] rounded-t-xl w-full" src="https://i.ibb.co/zf1zFWs/Coriender-Seeds-6.jpg" alt="product image" />
                                </div>
                                <div className=" pt-4 px-1 md:pt-0 md:px-2 md:pb-5 ">
                                    <a href="#">
                                        <h5 className="text-base md:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Coriender Seeds</h5>
                                    </a>
                                    <div className=' pt-1 space-y-[1px] '>
                                        <div className='flex  items-center md:gap-5'>
                                            <p className='text-xs md:font-semibold  md:pl-1 '>Kingdom :</p>
                                            <p className='text-xs md:font-semibold pl-[10px] md:pl-2 text-blue-700'>Plantae</p>
                                        </div>
                                        <div className='flex  items-center md:gap-10'>
                                            <p className='text-xs md:font-semibold md:pl-1 '>Clade :</p>
                                            <p className='text-xs md:font-semibold pl-[6px] md:pl-2 text-blue-700'>Tracheophytes</p>
                                        </div>
                                        <div className='flex  items-center md:gap-10'>
                                            <p className='text-xs md:font-semibold md:pl-1 '>Order :</p>
                                            <p className='text-xs md:font-semibold pl-[6px] md:pl-2 text-blue-700'>Angiosperms</p>
                                        </div>
                                        <div className=' flex  items-center md:gap-9'>
                                            <p className='text-xs md:font-semibold md:pl-1 '>Family :</p>
                                            <p className='text-xs md:font-semibold pl-[6px] md:pl-2 text-blue-700'>Piperaceae</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};



export default Section2;