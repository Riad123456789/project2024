import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';




const Reviews = () => {
    return (

        <div className='pt-2 bg-[#d3e8d8] '>
            <div className="  overflow-x-hidden ">
                {/* heading  */}
                <img className='h-14 w-80  md:h-16 md:w-[490px] mx-auto mb-2 mt-8 md:mt-12' src="https://i.ibb.co/tPyyKhT/e51ab9683522f0c3f68c8308fb8b161d-1-removebg-preview.png" alt="" />

                <div className="text-center ">
                    <h1
                        style={{
                            textTransform: "uppercase",
                            color: "transparent",
                            WebkitBackgroundClip: "text",
                        }}
                        className="text-3xl px-2 md:text-4xl lg:text-5xl font-semibold font-serif pb-7 md:pt-2 md:pb-16  bg-gradient-to-r from-red-700 to-amber-500  "
                    >
                        customer reviews
                    </h1>
                </div>

                <div className='max-w-7xl mx-auto pt-12 px-3'>
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
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >

                        <SwiperSlide className=''>
                            <div className='w-[95%] h-[50%] mx-auto  shadow-xl rounded-md'>
                                <div className="px-6 p-8 text-justify bg-white border-b border-gray-200 rounded-md shadow-md shadow-slate-400  ">

                                    <figcaption className="flex items-center   ">
                                        <img className="rounded-full w-9 h-9" src="https://i.ibb.co/MDd8QB7/images.jpg" alt="profile picture" />
                                        <div className="space-y-0.5 font-medium dark:text-white text-left  ms-3">
                                            <div>Bonnie Green</div>
                                            <div className="ml-1 text-sm text-gray-500 dark:text-gray-400 ">
                                                <div className="rating rating-xs">
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                </div>
                                            </div>
                                        </div>
                                    </figcaption>
                                    <blockquote className=" mt-4 text-gray-500  ">
                                        <h3 className="text-sm font-medium text-gray-500 ">
                                            I stumbled upon this website while looking for some unique spices to spice up my cooking, and I must say I was blown away by the variety they offer. From exotic blends to everyday staples, they have it all!
                                        </h3>
                                    </blockquote>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className=''>
                            <div className='w-[95%] h-[50%] mx-auto  shadow-xl rounded-md'>
                                <div className="px-6 p-8 text-justify bg-white border-b border-gray-200 rounded-md shadow-md shadow-slate-400  ">

                                    <figcaption className="flex items-center   ">
                                        <img className="rounded-full w-9 h-9" src="https://i.ibb.co/MDd8QB7/images.jpg" alt="profile picture" />
                                        <div className="space-y-0.5 font-medium dark:text-white text-left  ms-3">
                                            <div>Bonnie Green</div>
                                            <div className="ml-1 text-sm text-gray-500 dark:text-gray-400 ">
                                                <div className="rating rating-xs">
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                </div>
                                            </div>
                                        </div>
                                    </figcaption>
                                    <blockquote className=" mt-4 text-gray-500  ">
                                        <h3 className="text-sm font-medium text-gray-500 pb-10">
                                            Impressed by their quality control. Freshness and flavor are always on point.
                                        </h3>
                                    </blockquote>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className=''>
                            <div className='w-[95%] h-[50%] mx-auto  shadow-xl rounded-md'>
                                <div className="px-6 p-8 text-justify bg-white border-b border-gray-200 rounded-md shadow-md shadow-slate-400  ">

                                    <figcaption className="flex items-center   ">
                                        <img className="rounded-full w-9 h-9" src="https://i.ibb.co/MDd8QB7/images.jpg" alt="profile picture" />
                                        <div className="space-y-0.5 font-medium dark:text-white text-left  ms-3">
                                            <div>Bonnie Green</div>
                                            <div className="ml-1 text-sm text-gray-500 dark:text-gray-400 ">
                                                <div className="rating rating-xs">
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                </div>
                                            </div>
                                        </div>
                                    </figcaption>
                                    <blockquote className=" mt-4 text-gray-500  ">
                                        <h3 className="text-sm font-medium text-gray-500 ">
                                            The quality of the spices is top-notch, and the packaging ensures that they retain their freshness. I highly recommend this website to any home cook or chef looking to elevate their dishes.
                                        </h3>
                                    </blockquote>
                                </div>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide className=''>
                            <div className='w-[95%] h-[50%] mx-auto  shadow-xl rounded-md'>
                                <div className="px-6 p-8 text-justify bg-white border-b border-gray-200 rounded-md shadow-md shadow-slate-400  ">

                                    <figcaption className="flex items-center   ">
                                        <img className="rounded-full w-9 h-9" src="https://i.ibb.co/MDd8QB7/images.jpg" alt="profile picture" />
                                        <div className="space-y-0.5 font-medium dark:text-white text-left  ms-3">
                                            <div>Bonnie Green</div>
                                            <div className="ml-1 text-sm text-gray-500 dark:text-gray-400 ">
                                                <div className="rating rating-xs">
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                </div>
                                            </div>
                                        </div>
                                    </figcaption>
                                    <blockquote className=" mt-4 text-gray-500  ">
                                        <h3 className="text-sm font-medium text-gray-500 pb-10">
                                            The quality of the spices is top-notch, and the packaging ensures that they retain their freshness.                                         </h3>
                                    </blockquote>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className=''>
                            <div className='w-[95%] h-[50%] mx-auto  shadow-xl rounded-md'>
                                <div className="px-6 p-8 text-justify bg-white border-b border-gray-200 rounded-md shadow-md shadow-slate-400  ">

                                    <figcaption className="flex items-center   ">
                                        <img className="rounded-full w-9 h-9" src="https://i.ibb.co/MDd8QB7/images.jpg" alt="profile picture" />
                                        <div className="space-y-0.5 font-medium dark:text-white text-left  ms-3">
                                            <div>Bonnie Green</div>
                                            <div className="ml-1 text-sm text-gray-500 dark:text-gray-400 ">
                                                <div className="rating rating-xs">
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                </div>
                                            </div>
                                        </div>
                                    </figcaption>
                                    <blockquote className=" mt-4 text-gray-500  ">
                                        <h3 className="text-sm font-medium text-gray-500 ">
                                            I've been a loyal customer of this spices website for several years now, and one thing that has always stood out to me is their commitment to quality control.
                                        </h3>
                                    </blockquote>
                                </div>
                            </div>
                        </SwiperSlide>



                    </Swiper>
                </div>
                <section className="relative h-[18vh] lg:h-[10vh]">
                    <svg
                        id="svg"
                        viewBox="0 0 1440 390"
                        xmlns="http://www.w3.org/2000/svg"
                        className="
                   absolute bottom-0 left-0  "
                    >
                        <style>
                            {`
                        .path-0 {
                            animation: pathAnim-0 4s;
                            animation-timing-function: linear;
                            animation-iteration-count: infinite;
                        }
                        @keyframes pathAnim-0 {
                            0% {
                                d: path("M 0,400 L 0,150 C 83.3830298866369,116.9110271384404 166.7660597732738,83.82205427688079 224,84 C 281.2339402267262,84.17794572311921 312.3187907935417,117.62281003091724 372,155 C 431.6812092064583,192.37718996908276 519.9587770525593,233.68670559945036 592,211 C 664.0412229474407,188.31329440054964 719.8461009962213,101.63036757128137 784,99 C 848.1538990037787,96.36963242871863 920.6568189625557,177.79182411542422 1007,186 C 1093.3431810374443,194.20817588457578 1193.5266231535554,129.20233596702164 1268,111 C 1342.4733768464446,92.79766403297836 1391.2366884232224,121.39883201648918 1440,150 L 1440,400 L 0,400 Z");
                            }
                            25% {
                                d: path("M 0,400 L 0,150 C 85.98282377189972,149.54723462727586 171.96564754379943,149.0944692545517 241,142 C 310.03435245620057,134.9055307454483 362.12023359670206,121.16935760906907 428,107 C 493.87976640329794,92.83064239093093 573.5534180693921,78.22810030917209 633,89 C 692.4465819306079,99.77189969082791 731.6660941257297,135.91824115424254 798,153 C 864.3339058742703,170.08175884575746 957.7822054276883,168.09893507385775 1029,155 C 1100.2177945723117,141.90106492614225 1149.2050841635178,117.68601855032635 1214,115 C 1278.7949158364822,112.31398144967365 1359.3974579182411,131.15699072483682 1440,150 L 1440,400 L 0,400 Z");
                            }
                            50% {
                                d: path("M 0,400 L 0,150 C 48.07694950188936,195.9120577121264 96.15389900377872,241.82411542425282 172,221 C 247.84610099622128,200.17588457574718 351.4613534867744,112.61559601511506 431,109 C 510.5386465132256,105.38440398488494 566.0006870491239,185.71350051528685 635,191 C 703.9993129508761,196.28649948471315 786.5358983167298,126.53040192373754 860,90 C 933.4641016832702,53.46959807626246 997.8557196839574,50.164891789762976 1059,79 C 1120.1442803160426,107.83510821023702 1178.0412229474407,168.81003091721058 1241,186 C 1303.9587770525593,203.18996908278942 1371.9793885262798,176.5949845413947 1440,150 L 1440,400 L 0,400 Z");
                            }
                            75% {
                                d: path("M 0,400 L 0,150 C 50.632772243215385,123.07179663345929 101.26554448643077,96.14359326691859 178,103 C 254.73445551356923,109.85640673308141 357.57059429749233,150.49742356578494 440,174 C 522.4294057025077,197.50257643421506 584.4520783236001,203.8667124699416 640,204 C 695.5479216763999,204.1332875300584 744.6210924081073,198.03572655444864 807,180 C 869.3789075918927,161.96427344555136 945.0635520439712,131.99038131226382 1020,126 C 1094.9364479560288,120.00961868773616 1169.1246994160083,138.00274819649604 1239,146 C 1308.8753005839917,153.99725180350396 1374.4376502919959,151.99862590175198 1440,150 L 1440,400 L 0,400 Z");
                            }
                            100% {
                                d: path("M 0,400 L 0,150 C 83.3830298866369,116.9110271384404 166.7660597732738,83.82205427688079 224,84 C 281.2339402267262,84.17794572311921 312.3187907935417,117.62281003091724 372,155 C 431.6812092064583,192.37718996908276 519.9587770525593,233.68670559945036 592,211 C 664.0412229474407,188.31329440054964 719.8461009962213,101.63036757128137 784,99 C 848.1538990037787,96.36963242871863 920.6568189625557,177.79182411542422 1007,186 C 1093.3431810374443,194.20817588457578 1193.5266231535554,129.20233596702164 1268,111 C 1342.4733768464446,92.79766403297836 1391.2366884232224,121.39883201648918 1440,150 L 1440,400 L 0,400 Z");
                            }
                        }
                        `}
                        </style>
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                                <stop offset="5%" stopColor="#00d084" />
                                <stop offset="95%" stopColor="#8ED1FC" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M 0,400 L 0,150 C 83.3830298866369,116.9110271384404 166.7660597732738,83.82205427688079 224,84 C 281.2339402267262,84.17794572311921 312.3187907935417,117.62281003091724 372,155 C 431.6812092064583,192.37718996908276 519.9587770525593,233.68670559945036 592,211 C 664.0412229474407,188.31329440054964 719.8461009962213,101.63036757128137 784,99 C 848.1538990037787,96.36963242871863 920.6568189625557,177.79182411542422 1007,186 C 1093.3431810374443,194.20817588457578 1193.5266231535554,129.20233596702164 1268,111 C 1342.4733768464446,92.79766403297836 1391.2366884232224,121.39883201648918 1440,150 L 1440,400 L 0,400 Z"
                            stroke="none"
                            strokeWidth="0"
                            fill="url(#gradient)"
                            fillOpacity="1"
                            className="transition-all duration-300 ease-in-out delay-150 path-0"
                        ></path>
                    </svg>

                </section>
            </div>
        </div>
    );
};

export default Reviews;