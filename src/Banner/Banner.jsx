import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {

    return (
        <div className="pt-[72px] md:pt-0">
            <Carousel 
                className=" text-center  "
                showStatus={false}
                emulateTouch={true}
                stopOnHover={false}
                showIndicators={false}
                autoPlay={true}
                interval={2500}
                infiniteLoop={true}
            // dynamicHeight={true}
            >

                <div className=" w-full h-[40vh] md:h-[88vh] ">
                    <img className="h-full" src="https://i.ibb.co/VSN0wrX/vibes-1.png" alt="" />
                </div>
                <div className=" w-full h-[40vh] md:h-[88vh] ">
                    <img className="h-full" src="https://i.ibb.co/mz1fD4K/vibes-2.png" alt="" />
                </div>
                <div className=" w-full h-[40vh] md:h-[88vh] ">
                    <img className="h-full" src="https://i.ibb.co/6gdzyMp/vibes-6.png" alt="" />
                </div>
                <div className=" w-full h-[40vh] md:h-[88vh] ">
                    <img className="h-full" src="https://i.ibb.co/bHgwCN1/vibes-5.png" alt="" />
                </div>
                <div className=" w-full h-[40vh] md:h-[88vh] ">
                    <img className="h-full" src="https://i.ibb.co/mtKWHgJ/vibes-4.png" alt="" />
                </div>
                <div className=" w-full h-[40vh] md:h-[88vh] ">
                    <img className="h-full" src="https://i.ibb.co/NKCWSH7/vibes-7.png" alt="" />
                </div>
                <div className=" w-full h-[40vh] md:h-[88vh] ">
                    <img className="h-full" src="https://i.ibb.co/SP0djz3/vibes-10.png" alt="" />
                </div>
                <div className=" w-full h-[40vh] md:h-[88vh] ">
                    <img className="h-full" src="https://i.ibb.co/FznfLBr/vibes-8.png" alt="" />
                </div>

            </Carousel>

        </div>

    );
};

export default Banner;