import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import TermCard from '../component/card/TermCard';


const About = () => {



    return (
        <div className='py-24'>
            <h1 className="text-4xl lg:text-5xl text-center font-serif">PRIVACY POLICY</h1>

            <div className="grid lg:grid-cols-2 mt-12 gap-5 px-2 max-w-7xl mx-auto">
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

            <h1 className="text-4xl lg:text-5xl text-center font-serif mt-16">TERMS & CONDITIONS</h1>
            <div className='grid lg:grid-cols-3 max-w-7xl mx-auto mt-16'>
                <TermCard></TermCard>
            </div>
        </div>
    );
};

export default About;