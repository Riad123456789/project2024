import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



import img from "../../public/Spices & herbs.png"
import img1 from "../../public/Spices & herbs (1).png"
import img2 from "../../public/vibes.png"



const Banner = () => {

  


    return (

        <Carousel

            className="text-center"
            showStatus={false}
            emulateTouch={true}
            stopOnHover={false}
            autoPlay={true}
            interval={4000} 
            infiniteLoop={true}
            dynamicHeight={true}
          

        >
            <div  className=" ">
                <img src={img} alt="none" />
            </div>
            <div>
                <img  src={img1} alt="none" />

            </div>
            <div>
                <img src={img2} alt="none" />

            </div>
            <div  className=" ">
                <img src={img} alt="none" />
            </div>
            <div>
                <img  src={img1} alt="none" />

            </div>
            <div>
                <img src={img2} alt="none" />

            </div>
        
        </Carousel>

    );
};

export default Banner;