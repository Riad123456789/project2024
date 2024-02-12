import img from "../../public/Spices & herbs (1).png"
import img2 from "../../public/Spices & herbs.png"
import img3 from "../../public/vibes.png"

const Section1 = () => {
    return (
        <div className="max-w-6xl mx-auto mt-8">
            <div className="grid  grid-cols-1 gap-2 px-5 md:px-0 md:grid-cols-2 md:gap-4">
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <img src={img2} alt="" />
                </div>
                <div>
                    <img src={img3} alt="" />
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <img src={img2} alt="" />
                </div>
                <div>
                    <img src={img3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Section1;