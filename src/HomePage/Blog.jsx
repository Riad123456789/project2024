import { BigPlayButton, Player } from "video-react";
import video from "../../public/New folder/10000000_7285433644825476_2841910340063935254_n.mp4"


const Blog = () => {
    return (
        <div className="my-14 mt-20 max-w-6xl mx-auto px-2 ">

            <div className="text-center ">
                <h1
                    style={{
                        textTransform: "uppercase",
                        color: "transparent",
                        WebkitBackgroundClip: "text",
                    }}
                    className="text-4xl px-2 md:text-4xl lg:text-5xl font-semibold font-serif pb-7 md:pt-2 md:pb-16  bg-gradient-to-r from-red-700 to-amber-500  "
                >
                    FURNITURE  BLOG
                </h1>
            </div>


            <div className="grid  lg:grid-cols-2 gap-5 ">

                <div className="flex flex-col items-center bg-white shadow-xl md:flex-row md:w-full hover:bg-gray-100 group overflow-hidden ">

                    <div   className="w-full">
                        <Player
                           
                          >
                            <source src={video} />
                            <BigPlayButton position="center" />
                        </Player>
                    </div>

                    {/* <div className="flex flex-col justify-between p-3 leading-normal">
                        <h5 className="mb-2 text-lg font-bold  text-gray-900 ">Noteworthy technology acquisitions 2024</h5>
                        <p className="mb-3 font-normal text-sm text-gray-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div> */}
                </div>

                <div className="flex flex-col items-center bg-white shadow-xl md:flex-row md:w-full hover:bg-gray-100 group overflow-hidden ">
                    <Player
                        className="object-cover w-full  h-[250px]  md:w-96 mx-auto">
                        <source src={video} />
                        <BigPlayButton position="center" />

                    </Player>
                    {/* <div className="flex flex-col justify-between p-3 leading-normal">
                        <h5 className="mb-2 text-lg font-bold  text-gray-900 ">Noteworthy technology acquisitions 2024</h5>
                        <p className="mb-3 font-normal text-sm text-gray-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div> */}
                </div>

                <div className="flex flex-col items-center bg-white shadow-xl md:flex-row md:w-full hover:bg-gray-100 group overflow-hidden ">
                    <Player
                        className="object-cover w-full  h-[250px]  md:w-96 mx-auto">
                        <source src={video} />
                        <BigPlayButton position="center" />

                    </Player>
                    {/* <div className="flex flex-col justify-between p-3 leading-normal">
                        <h5 className="mb-2 text-lg font-bold  text-gray-900 ">Noteworthy technology acquisitions 2024</h5>
                        <p className="mb-3 font-normal text-sm text-gray-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div> */}
                </div>

                <div className="flex flex-col items-center bg-white shadow-xl md:flex-row md:w-full hover:bg-gray-100 group overflow-hidden ">
                    <Player
                        className="object-cover w-full  h-[250px]  md:w-96 mx-auto">
                        <source src={video} />
                        <BigPlayButton position="center" />

                    </Player>
                    {/* <div className="flex flex-col justify-between p-3 leading-normal">
                        <h5 className="mb-2 text-lg font-bold  text-gray-900 ">Noteworthy technology acquisitions 2024</h5>
                        <p className="mb-3 font-normal text-sm text-gray-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Blog;