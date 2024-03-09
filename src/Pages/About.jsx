import 'react-accessible-accordion/dist/fancy-example.css';
import Section1 from './AboutPage/Section1';
import Section2 from './AboutPage/Section2';
import Section3 from './AboutPage/Section3';
import Section5 from './AboutPage/Section5';
import TermCard from '../component/card/TermCard';
import AboutUs from './AboutPage/AboutUs';
import OurMission from './AboutPage/OurMission';



const About = () => {



    return (
        <div className='overflow-hidden pt-[72px] lg:pt-0'>
            <div className="relative w-fill bg h-36 lg:h-72 shadow-lg shadow-red-400  ">
                <div className='relative bg-gradient-to-r from-[#1c1b1b] to-[#210d0d] h-full opacity-50'>
                </div>
                <h1 className="h-full w-full font-serif text-white text-center  text-2xl lg:text-4xl absolute top-[48%]">
                    ABOUT US
                </h1>
            </div>
            <AboutUs></AboutUs>
            <OurMission></OurMission>



            <div>
                <Section1></Section1>
            </div>

            <div>
                <h1 className="text-4xl lg:text-5xl text-center font-serif mt-28">TERMS & CONDITIONS</h1>
                <div className=''>
                    <TermCard></TermCard>
                </div>
            </div>

            <div>
                <Section2></Section2>
            </div>
            <div>
                <Section3></Section3>
            </div>
            <div>
                <Section5></Section5>
            </div>

        </div>
    );
};

export default About;