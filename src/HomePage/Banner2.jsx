import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay, } from 'swiper/modules';

const Banner2 = () => {
    return (
        <div className="h-[88vh]  ">
            <Swiper
                zoom={true}
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Autoplay,]}
                className=" h-full w-full"
            >

                {/* <SwiperSlide>
                    <div className="test h-full w-full ">
                        <div className=" w-full h-full  bg-gradient-to-t from-black to-black opacity-60 ">

                        </div>
                    </div>

                    <div className="h-[88vh] w-full flex  justify-center  absolute top-6 z-20">
                        <div className="text-center mt-40 space-y-3">
                            <h1 className="text-xl font-serif text-white"><span className="text-[38px]">#1</span> MATRIMONY</h1>
                            <h1 className="text-6xl font-serif text-white font-bold tracking-wide">Find your</h1>
                            <h1 className="text-6xl font-serif text-white font-bold tracking-wide"><span className="text-[red]">Right Match</span> here</h1>
                            <h1 className="text-white text-xl font-medium tracking-wide pt-2">Most trusted Matrimony Brand in the World.</h1>
                        </div>
                    </div>


                </SwiperSlide> */}

                <SwiperSlide>
                    <div className="test1 h-full w-full ">
                        <div className="w-full h-full  bg-gradient-to-t from-black to-black opacity-60 ">

                        </div>
                    </div>

                    <div className=" w-full grid  justify-center  absolute top-6 z-20">
                        <div className="text-center mt-40 space-y-3">
                            <h1 className="text-xl font-serif text-white"><span className="text-[38px]">#1</span> MATRIMONY</h1>
                            <h1 className="text-6xl font-serif text-white font-bold tracking-wide">Find your</h1>
                            <h1 className="text-6xl font-serif text-white font-bold tracking-wide"><span className="text-[red]">Right Match</span> here</h1>
                            <h1 className="text-white text-xl font-medium tracking-wide pt-2">Most trusted Matrimony Brand in the World.</h1>
                        </div>


                        <div className='w-[1150px] h-24 bg-black bg-opacity-70 mt-10 rounded-md flex justify-around items-center px-4 '>
                            <div className='w-52 h-14 rounded-md bg-white'></div>
                            <div className='w-52 h-14 rounded-md bg-white'></div>
                            <div className='w-52 h-14 rounded-md bg-white'></div>
                            <div className='w-52 h-14 rounded-md bg-white'></div>
                            <div className='w-52 h-14 rounded-md bg-slate-600'></div>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className="test2 h-full w-full ">
                        <div className="w-full h-full  bg-gradient-to-t from-black to-black opacity-60 ">

                        </div>
                    </div>

                    <div className=" w-full grid  justify-center  absolute top-6 z-20">
                        <div className="text-center mt-40 space-y-3">
                            <h1 className="text-xl font-serif text-white"><span className="text-[38px]">#1</span> MATRIMONY</h1>
                            <h1 className="text-6xl font-serif text-white font-bold tracking-wide">Find your</h1>
                            <h1 className="text-6xl font-serif text-white font-bold tracking-wide"><span className="text-[red]">Right Match</span> here</h1>
                            <h1 className="text-white text-xl font-medium tracking-wide pt-2">Most trusted Matrimony Brand in the World.</h1>
                        </div>


                        <div className='w-[1150px] h-24 bg-black bg-opacity-70 mt-10 rounded-md flex justify-around items-center px-4 '>
                            <div className='w-52 h-14 rounded-md bg-white'></div>
                            <div className='w-52 h-14 rounded-md bg-white'></div>
                            <div className='w-52 h-14 rounded-md bg-white'></div>
                            <div className='w-52 h-14 rounded-md bg-white'></div>
                            <div className='w-52 h-14 rounded-md bg-slate-600'></div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>

    );
};

export default Banner2;