import { FaCarSide } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
const Section2 = () => {
    return (
        <div className="my-16 overflow-hidden">
            <div style={{
                backgroundImage: `url("https://i.ibb.co/NWN5SH8/riad1.jpg")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",

            }}
                className="w-full h-[500px] md:h-[340px] relative ">
                <div className=" bg-gradient-to-r from-[#270f0f] to-[#210303] opacity-70 w-full h-full pt-8 ">
                </div>

                <div className="absolute top-10 lg:left-[20px] opacity-90 px-4">
                    <div className="">
                        {/* <div className=" space-y-2 ">
                            <h1 className=" md:text-2xl lg:text-3xl  font-serif flex gap-4 items-center text-white">
                                <span><FaCarSide color="white" size={28}></FaCarSide></span>Free Shipping</h1>
                            <p className="font-sans md:text-sm lg:text-base ml-[45px] text-white ">On order over $500</p>
                        </div>
                        <div className=" space-y-2   ">
                            <h1 className=" md:text-2xl lg:text-3xl font-serif flex gap-4 items-center text-white">
                                <span><MdPayment color="white" size={28}></MdPayment></span>Safe Payment</h1>
                            <p className="font-sans md:text-sm lg:text-base ml-[45px] text-white ">Easy paymen</p>
                        </div>
                        <div className=" space-y-2   ">
                            <h1 className=" md:text-2xl lg:text-3xl font-serif flex gap-4 items-center text-white">
                                <span><BiSupport color="white" size={28}></BiSupport></span>Support</h1>
                            <p className="font-sans md:text-sm lg:text-base ml-[45px] text-white ">On order over $500</p>
                        </div> */}

                        <h1 className="text-white font-bold items-end text-justify"> <span className="text-2xl">D</span>ear valued team members, partners, and esteemed guests,

                            It is with great pride and excitement that I stand before you today as the owner of RK Trading. As we gather here, I am filled with gratitude for each and every one of you who has contributed to the success and growth of our company.

                            When I embarked on this journey, I had a vision of creating more than just a spice company. I dreamed of building a community of passionate individuals dedicated to elevating culinary experiences and enriching lives through the magic of flavor. And today, I am thrilled to see that vision come to life.

                            At RK Trading, we are more than just purveyors of spices. We are artisans, storytellers, and innovators, committed to delivering excellence in every aspect of our business. From the meticulous sourcing of the finest ingredients to the creation of unique blends that tantalize the taste buds, we strive for perfection in all that we do.

                            But our success would not be possible without the incredible talent and dedication of our team. Each of you brings a unique perspective and skill set to the table, and together, we are stronger than the sum of our parts. Your hard work, creativity, and passion are the driving force behind our achievements, and I am endlessly grateful for your contributions.

                            As we look to the future, I am filled with optimism and excitement for what lies ahead. We stand on the brink of endless possibilities, poised to continue pushing the boundaries of flavor exploration and setting new standards of excellence in the spice industry.

                            But let us never forget the values that have guided us on this journey – integrity, innovation, and a commitment to making a positive impact on the world. Let us continue to uphold these principles in everything we do, knowing that they are the foundation upon which our success is built.

                            In closing, I want to express my deepest gratitude to each and every one of you for your unwavering dedication and support. Together, we will continue to spice up life and leave a lasting legacy of flavor and excellence for generations to come.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section2;