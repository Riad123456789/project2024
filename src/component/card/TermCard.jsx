import { PiShoppingCart } from "react-icons/pi";

const TermCard = () => {
    return (
        <div>

            <div className=" w-96 bg-base-100 shadow-lg  shadow-gray-700">
                <figure className="px-10 pt-10 w-44 mx-auto">
                    <div
                        className="border rounded-full  bg-lime-600 p-2  ">
                        <PiShoppingCart size={40} color="white"></PiShoppingCart>
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