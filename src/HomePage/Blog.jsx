import { BigPlayButton, Player } from "video-react";
import video from "../../public/New folder/10000000_7285433644825476_2841910340063935254_n.mp4"



const Blog = () => {
    return (
        <div className="bg-zinc-300 md:pt-1  pb-16">
            <div className=" max-w-6xl mx-auto px-2 pt-2 md:pt-0">
                <img className='h-14 w-80  md:h-16 md:w-[470px] mx-auto mb-2 mt-8 md:mt-12' src="https://i.ibb.co/tPyyKhT/e51ab9683522f0c3f68c8308fb8b161d-1-removebg-preview.png" alt="" />
                <div className="text-center ">
                    <h1
                        style={{
                            textTransform: "uppercase",
                            color: "transparent",
                            WebkitBackgroundClip: "text",
                        }}
                        className="text-3xl px-2 md:text-4xl lg:text-5xl font-semibold font-serif pb-7 md:pt-2 md:pb-16  bg-gradient-to-r from-red-700 to-amber-500  "
                    >
                        Experience  BLOG
                    </h1>
                </div>


                <div className="max-w-5xl mx-auto grid  lg:grid-cols-2 gap-5 px-2">


                    <div className="flex flex-col items-center bg-white shadow-xl md:flex-row md:w-full hover:bg-gray-100 group overflow-hidden ">

                        <div className="w-full">
                            <Player
                                playsInline
                                poster="https://i.ibb.co/92m1W17/transparent-turmeric-detailed-image-of-various-spices-on-black-backgrou656ba84caee087-04923026170155.png"
                            >
                                <source src='../../public/New folder/10000000_7285433644825476_2841910340063935254_n.mp4' type="video/mp4" />
                                <BigPlayButton position="center" />
                            </Player>
                        </div>


                    </div>

                    <div className="flex flex-col items-center bg-white shadow-xl md:flex-row md:w-full hover:bg-gray-100 group overflow-hidden ">
                        <Player
                            playsInline
                            poster="https://i.ibb.co/92m1W17/transparent-turmeric-detailed-image-of-various-spices-on-black-backgrou656ba84caee087-04923026170155.png"
                        >
                            <source src='../../public/New folder/10000000_7285433644825476_2841910340063935254_n.mp4' type="video/mp4" />
                            <BigPlayButton position="center" />

                        </Player>

                    </div>

                    <div className="flex flex-col items-center bg-white shadow-xl md:flex-row md:w-full hover:bg-gray-100 group overflow-hidden ">
                        <Player
                            playsInline
                            poster="https://i.ibb.co/92m1W17/transparent-turmeric-detailed-image-of-various-spices-on-black-backgrou656ba84caee087-04923026170155.png"
                        >
                            <source src={video} type="video/mp4" />
                            <BigPlayButton position="center" />

                        </Player>

                    </div>

                    <div className="flex flex-col items-center bg-white shadow-xl md:flex-row md:w-full hover:bg-gray-100 group overflow-hidden ">
                        <Player
                            playsInline
                            poster="https://i.ibb.co/92m1W17/transparent-turmeric-detailed-image-of-various-spices-on-black-backgrou656ba84caee087-04923026170155.png"
                        >
                            <source src={video} type="video/mp4" />
                            <BigPlayButton position="center" />

                        </Player>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Blog;