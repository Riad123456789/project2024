import Banner from "../Banner/Banner";
import Banner2 from "./Banner2";
import Blog from "./Blog";
import News from "./News";
import OurProducts from "./OurProducts";
import OurSeeds from "./OurSeeds";
import OurSpices from "./OurSpices";
import Reviews from "./Reviews";

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Banner2></Banner2>
            <OurProducts></OurProducts>
            <News></News>
            <OurSeeds></OurSeeds>
            <OurSpices></OurSpices>
            <Blog></Blog>
            <Reviews></Reviews>
        </div>
    );
};

export default HomePage;