import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';




const Section5 = () => {
    return (
        <div className=" max-w-6xl mx-auto">
            <h1 className="text-2xl lg:text-5xl text-center font-serif pt-4 md:pt-12">Customers Love Our Spices & Service</h1>
            <div className='py-9 lg:py-16'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        540: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 60,
                        },
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >


                    <SwiperSlide className=''>
                        <div className='w-96 mx-auto border shadow-xl rounded-md'>
                            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
                                    <p className="my-4">If you care for your time, I hands down would go with this."</p>
                                </blockquote>
                                <figcaption className="flex items-center justify-center ">
                                    <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                                    <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                                        <div>Bonnie Green</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 ">Developer at Open AI</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='w-96 mx-auto border shadow-xl rounded-md'>
                            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
                                    <p className="my-4">If you care for your time, I hands down would go with this."</p>
                                </blockquote>
                                <figcaption className="flex items-center justify-center ">
                                    <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                                    <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                                        <div>Bonnie Green</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 ">Developer at Open AI</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='w-96 mx-auto border shadow-xl rounded-md'>
                            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
                                    <p className="my-4">If you care for your time, I hands down would go with this."</p>
                                </blockquote>
                                <figcaption className="flex items-center justify-center ">
                                    <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                                    <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                                        <div>Bonnie Green</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 ">Developer at Open AI</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='w-96 mx-auto border shadow-xl rounded-md'>
                            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
                                    <p className="my-4">If you care for your time, I hands down would go with this."</p>
                                </blockquote>
                                <figcaption className="flex items-center justify-center ">
                                    <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                                    <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                                        <div>Bonnie Green</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 ">Developer at Open AI</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='w-96 mx-auto border shadow-xl rounded-md'>
                            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
                                    <p className="my-4">If you care for your time, I hands down would go with this."</p>
                                </blockquote>
                                <figcaption className="flex items-center justify-center ">
                                    <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                                    <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                                        <div>Bonnie Green</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 ">Developer at Open AI</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </SwiperSlide>



                </Swiper>

            </div>
        </div>
    );
};

export default Section5;