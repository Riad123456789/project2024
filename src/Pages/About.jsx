import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Section1 from './AboutPage/Section1';
import Section2 from './AboutPage/Section2';
import Section3 from './AboutPage/Section3';
import Section4 from './AboutPage/Section4';
import Section5 from './AboutPage/Section5';



const About = () => {



    return (
        <div className='overflow-hidden'>

            <div className=''>
                <Section4></Section4>
            </div>


            <div>
                <Section1></Section1>
            </div>
            <h1 className="text-4xl lg:text-5xl text-center font-serif pt-12">PRIVACY POLICY</h1>

            <div className="grid lg:grid-cols-2 mt-12 gap-5 px-2 max-w-6xl mx-auto">
                <div>
                    <div className="">
                        <Accordion allowZeroExpanded={true} >
                            <AccordionItem className='font-sans border'>
                                <AccordionItemHeading >
                                    <AccordionItemButton >
                                        What harsh truths do you prefer to ignore?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Exercitation in fugiat est ut ad ea cupidatat ut in
                                        cupidatat occaecat ut occaecat consequat est minim minim
                                        esse tempor laborum consequat esse adipisicing eu
                                        reprehenderit enim.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className='font-sans border '>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Is free will real or just an illusion?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        In ad velit in ex nostrud dolore cupidatat consectetur
                                        ea in ut nostrud velit in irure cillum tempor laboris
                                        sed adipisicing eu esse duis nulla non.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className='font-sans border'>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Is free will real or just an illusion?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        In ad velit in ex nostrud dolore cupidatat consectetur
                                        ea in ut nostrud velit in irure cillum tempor laboris
                                        sed adipisicing eu esse duis nulla non.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className='font-sans border'>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Is free will real or just an illusion?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        In ad velit in ex nostrud dolore cupidatat consectetur
                                        ea in ut nostrud velit in irure cillum tempor laboris
                                        sed adipisicing eu esse duis nulla non.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
                <div>
                    <Accordion allowZeroExpanded={true} >
                        <AccordionItem className='font-sans border'>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What harsh truths do you prefer to ignore?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Exercitation in fugiat est ut ad ea cupidatat ut in
                                    cupidatat occaecat ut occaecat consequat est minim minim
                                    esse tempor laborum consequat esse adipisicing eu
                                    reprehenderit enim.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem className='font-sans border'>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Is free will real or just an illusion?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    In ad velit in ex nostrud dolore cupidatat consectetur
                                    ea in ut nostrud velit in irure cillum tempor laboris
                                    sed adipisicing eu esse duis nulla non.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem className='font-sans border'>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Is free will real or just an illusion?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    In ad velit in ex nostrud dolore cupidatat consectetur
                                    ea in ut nostrud velit in irure cillum tempor laboris
                                    sed adipisicing eu esse duis nulla non.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem className='font-sans border'>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Is free will real or just an illusion?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    In ad velit in ex nostrud dolore cupidatat consectetur
                                    ea in ut nostrud velit in irure cillum tempor laboris
                                    sed adipisicing eu esse duis nulla non.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
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