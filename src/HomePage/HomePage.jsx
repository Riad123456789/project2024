import Banner from "../Banner/Banner";
import Section2 from "../Section2/Section2";

import Section4 from "../Section4/Section4";
import Section5 from "../Section5/Section5";
import Banner2 from "./Banner2";
import News from "./News";
import OurProducts from "./OurProducts";

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Banner2></Banner2>
            <OurProducts></OurProducts>
            <News></News>

            <div className="mt-6">
                <Section2></Section2>
            </div>
            <div className="py-20">
                <Section2></Section2>
            </div>
            <Section2></Section2>
            {/* <Section7></Section7>
            <Section8></Section8>
            <Section9></Section9> */}
            <Section4></Section4>
            <Section5></Section5>
        </div>
    );
};

export default HomePage;