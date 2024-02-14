import { PiNotePencilBold } from "react-icons/pi";
import { BsChatFill } from "react-icons/bs";
import { IoHome } from "react-icons/io5";

const TermCard = () => {
    return (
        
        <div className="grid  lg:grid-cols-3 max-w-6xl mx-auto mt-16 gap-6 md:gap-7 lg:gap-24 px-8 lg:ml-[155px] pb-10">
            <div className=" w-[350px] md:w-full lg:w-[350px] mx-auto bg-base-100 shadow-lg  shadow-gray-700 ">
                <figure className="pt-10   ">
                    <div className=" border-4 border-green-600 flex justify-center items-center rounded-full px-2 py-[16px] w-[90px] mx-auto ">
                        <BsChatFill size={45} color="green"></BsChatFill>
                    </div>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">ANNOUNCERS</h2>
                    <p className="font-sans">Publish a listing to show everyone what are the goodies of your establishment. Add amenities and tags to promote every detail of your listing</p>
                    <div className="card-actions">
                    </div>
                </div>
            </div>


            <div className=" w-[350px] md:w-full lg:w-[350px] mx-auto bg-base-100 shadow-lg  shadow-gray-700 ">
                <figure className="pt-10   ">
                    <div className=" border-4 border-green-600 flex justify-center items-center rounded-full px-2 py-[16px] w-[90px] mx-auto ">
                        <PiNotePencilBold size={45} color="green"></PiNotePencilBold>
                    </div>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">ANNOUNCERS</h2>
                    <p className="font-sans">Publish a listing to show everyone what are the goodies of your establishment. Add amenities and tags to promote every detail of your listing</p>
                    <div className="card-actions">
                    </div>
                </div>
            </div>


            <div className=" w-[350px] md:w-full lg:w-[350px] mx-auto bg-base-100 shadow-lg  shadow-gray-700 ">
                <figure className="pt-10   ">
                    <div className=" border-4 border-green-600 flex justify-center items-center rounded-full px-2 py-[16px] w-[90px] mx-auto ">
                        <IoHome size={45} color="green"></IoHome>
                    </div>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">ANNOUNCERS</h2>
                    <p className="font-sans">Publish a listing to show everyone what are the goodies of your establishment. Add amenities and tags to promote every detail of your listing</p>
                    <div className="card-actions">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermCard;