import GooMap from "./GooMap";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { IoIosSend } from "react-icons/io";



const Damo = () => {

    const form = useRef();

    const resetForm = () => {
        form.current.reset();
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_n0020lb', 'template_gvwj0xe', form.current, {
                publicKey: 'lq-Z95euxr4fplb0-',
            })
            .then(
                () => {

                    toast.success("Successfully message send")
                    resetForm();

                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };



    return (
        <div className="max-w-6xl mx-auto  py-16">

            {/* <div className=" lg:grid grid-cols-6  ">

                <div style={{ boxShadow: '1px  1px 1px 1px' }} className=" col-span-4 md:rounded-l-lg shadow-none  bg-white px-5 lg:px-10 py-4">
                    <h1 className="text-2xl font-semibold pt-1 ">Get In Touch</h1>
                    <p className="text-xs md:text-sm pt-3 w-[400px] lg:w-[450px] pb-2">Have a specific inquiry or looking to explore new opportunities? Our experienced team is ready to engage with you</p>
                    <form ref={form} onSubmit={sendEmail} className=" lg:w-[480px] pt-4">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="from_name" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="email" name="Email" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group pb-6">
                            <input type="text" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Write Message</label>
                        </div>


                        <button type="submit" className="text-black bg-gradient-to-r  from-lime-500 via-lime-400 to-lime-200 hover:bg-gradient-to-br  focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 font-sans w-full">
                            Send Message
                        </button>
                    </form>
                    <p className="pt-7  font-bold text-sm  pl-32 lg:pl-40">riad80717@gmail.com</p>
                </div>



                <div style={{ boxShadow: '1px 1px 1px 1px' }} className=" h-[450px] col-span-2 bg-white lg:bg-lime-600 lg:rounded-r-lg  shadow-cyan-300 py-9 relative ">

                    <div className="absolute right-2 lg:top-10 lg:right-10  w-[400px] md:w-[750px]  lg:w-[490px]  ">
                        <GooMap></GooMap>
                    </div>
                </div>

            </div> */}
            <div
                className="grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-10 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg  bg-white my-6 before:absolute before:right-0 before:w-[300px] before:bg-[#0ba360] before:h-full max-md:before:hidden">
                <div>

                    {/* Description  */}
                    <h2 className="text-3xl font-extrabold">Get In Touch</h2>
                    <p className="text-sm mt-8">Have a specific inquiry or looking to explore new opportunities? Our
                        experienced team is ready to engage with you.</p>

                    {/* Form Part      */}
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="space-y-4 mt-8 c">
                            {/* Name  */}
                            <input type="text" required placeholder="Full Name"
                                className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#0ba360] outline-none" />

                            {/* Email      */}
                            <input type="email"required placeholder="Email"
                                className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#0ba360] outline-none" />

                            {/* Massage  */}
                            <textarea required placeholder="Write Message"
                                className="px-2 pt-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#0ba360] outline-none"></textarea>
                        </div>

                        {/* Submit Btn  */}
                        <div className="mt-12">
                            <button type="submit"
                                className="text-black bg-gradient-to-r  from-lime-500 via-lime-400 to-lime-200 hover:bg-gradient-to-br  focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 font-sans w-full">
                               
                                Send Message
                            </button>
                        </div>
                    </form>

                    {/* Default Email  */}
                    <ul style={{ cursor: 'pointer' }} className="mt-8 flex justify-center lg:space-x-6 max-lg:flex-col max-lg:items-center max-lg:space-y-2 ">
                        <li className="flex items-center hover:text-[#0ba360]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currentColor'
                                viewBox="0 0 479.058 479.058">
                                <path
                                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                    data-original="#000000" />
                            </svg>
                            <div className="text-current text-sm ml-3">
                                <strong>riad80717@gmail.com</strong>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Google Map  */}
                <div className="relative h-full max-md:min-h-[350px]">
                    <iframe src="https://maps.google.com/maps?q=Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                        allowfullscreen></iframe>
                </div>

            </div>

        </div>
    );
};

export default Damo;