import Banner from "../Banner/Banner";
import Banner2 from "./Banner2";
import Blog from "./Blog";
import News from "./News";
import OurProducts from "./OurProducts";
import OurSeeds from "./OurSeeds";
import Reviews from "./Reviews";

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Banner2></Banner2>
            <OurProducts></OurProducts>
            <News></News>

            <div className="mt-6">
                <OurSeeds></OurSeeds>
            </div>
            <div className="py-20">
                <OurSeeds></OurSeeds>
            </div>
            <OurSeeds></OurSeeds>
            <Blog></Blog>
            <Reviews></Reviews>
        </div>
    );
};

export default HomePage;