import { IoMdMailUnread } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import Form from "./Form";


const containerStyle = {
    width: '1130px',
    height: '400px'
};

const center = {
    lat: 23.6850,
    lng: 90.3563
};


const ContactPage = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey:  "AIzaSyDNHJcARxRRUgIlglIDmPaS2fOseBSKdFs"
    })

    if (!isLoaded) {
        return <span className="my-64 mx-96 loading loading-bars loading-lg"></span>
    }


    return (
        <div className="py-20 ">


            <div className="grid  lg:grid-cols-3 gap-5 max-w-6xl mx-auto pt-7 md:px-6 lg:px-0">

                <div className=" w-[350px] md:w-full lg:w-[350px] mx-auto bg-base-100 shadow-md  shadow-gray-700 ">
                    <figure className="pt-10   ">
                        <div className=" border-4 border-green-600 flex justify-center items-center rounded-full px-2 py-[16px] w-[90px] mx-auto ">
                            <IoLocationSharp size={45} color="green"></IoLocationSharp>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-serif">ADDRESS</h2>
                        <p className="font-sans">Urban Area, Hoang Mai District</p>
                        <div className="card-actions">
                        </div>
                    </div>
                </div>


                <div className=" w-[350px] md:w-full lg:w-[350px] mx-auto bg-base-100 shadow-md shadow-gray-700 ">
                    <figure className="pt-10   ">
                        <div className=" border-4 border-green-600 flex justify-center items-center rounded-full px-2 py-[16px] w-[90px] mx-auto ">
                            <MdPhoneInTalk size={45} color="green"></MdPhoneInTalk>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-serif">PHONE</h2>
                        <p className="font-sans">034 334 4433</p>
                        <div className="card-actions">
                        </div>
                    </div>
                </div>


                <div className=" w-[350px] md:w-full lg:w-[350px] mx-auto bg-base-100 shadow-md  shadow-gray-700 ">
                    <figure className="pt-10   ">
                        <div className=" border-4 border-green-600 flex justify-center items-center rounded-full px-2 py-[16px] w-[90px] mx-auto ">
                            <IoMdMailUnread size={45} color="green"></IoMdMailUnread>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-serif">E-MAIL</h2>
                        <p className="font-sans">Contact.7uptheme@gmail.com</p>
                        <div className="card-actions">
                        </div>
                    </div>
                </div>


            </div>

            <h1 className="text-4xl font-serif  py-16 text-center">CONTACT US</h1>
            <div className="">
                <Form></Form>
            </div>

            <div className=" max-w-6xl mx-auto  overflow-hidden px-2 ">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={5}
                >
                    <Marker position={center}></Marker>
                    <Marker position={center}></Marker>
                </GoogleMap>
            </div>
        </div>
    );
};

export default ContactPage;