import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";




const containerStyle = {
    width: '100%',
    height: '380px'
};

const center = {
    lat: 23.6850,
    lng: 90.3563
};


const GooMap = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDNHJcARxRRUgIlglIDmPaS2fOseBSKdFs"
    })

    if (!isLoaded) {
        return <span className="my-64 mx-[800px] loading loading-bars loading-lg "></span>
    }
    return (
        <div>
            <div className=" lg:max-w-6xl mx-auto  overflow-hidden px-2 ">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={5}
                >
                </GoogleMap>
            </div>
        </div>
    );
};

export default GooMap;