import img from "../../public/WhatsApp Image 2024-02-11 at 1.58.44 PM.jpeg"

const Section4 = () => {
    return (
        <div className="my-14 mt-16 max-w-6xl mx-auto px-2">


            <h1 className="text-center text-4xl pb-14">FURNITURE  BLOG </h1>

            <div className="grid  lg:grid-cols-2 gap-5">

                <a href="#" className="flex flex-col items-center bg-white border border-gray-200  shadow md:flex-row md:w-full hover:bg-gray-100 group ">
                    <img className="object-cover w-full  h-[250px]  md:w-64 mx-auto" src={img} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions 2024</h5>
                        <p className="mb-3 font-normal text-gray-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </a>


                <a href="#" className="flex flex-col items-center bg-white border border-gray-200  shadow md:flex-row md:w-full hover:bg-gray-100 group ">
                    <img className="object-cover w-full  h-[250px]  md:w-64 mx-auto " src={img} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions 2024</h5>
                        <p className="mb-3 font-normal text-gray-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </a>


                <a href="#" className="flex flex-col items-center bg-white border border-gray-200  shadow md:flex-row md:w-full hover:bg-gray-100 group ">
                    <img className="object-cover w-full  h-[250px]  md:w-64 mx-auto " src={img} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions 2024</h5>
                        <p className="mb-3 font-normal text-gray-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </a>


                <a href="#" className="flex flex-col items-center bg-white border border-gray-200  shadow md:flex-row md:w-full hover:bg-gray-100 group ">
                    <img className="object-cover w-full  h-[250px]  md:w-64 mx-auto" src={img} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions 2024</h5>
                        <p className="mb-3 font-normal text-gray-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </a>

            </div>
        </div>
    );
};

export default Section4;