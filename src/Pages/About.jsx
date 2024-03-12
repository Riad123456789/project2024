import 'react-accessible-accordion/dist/fancy-example.css';
import Section1 from './AboutPage/Section1';
import Section2 from './AboutPage/Section2';

import AboutUs from './AboutPage/AboutUs';
import OurMission from './AboutPage/OurMission';
import WhyChoose from './AboutPage/WhyChoose';
import TimeLine from './AboutPage/TimeLine';
import Section3 from './AboutPage/Section3';
import Recognition from './AboutPage/Recognition';



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
            <WhyChoose></WhyChoose>
            <TimeLine></TimeLine>


            {/*         <div>
                <Section1></Section1>
            </div> */}

            <div>
                <Section2></Section2>
            </div>
            <Recognition></Recognition>
            {/* <div>
               <Section3></Section3>
            </div>
            */}

        </div>
    );
};

export default About;