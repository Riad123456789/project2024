import GooMap from "./GooMap";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';



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

            <div className=" lg:grid grid-cols-6  ">

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

            </div>


        </div>
    );
};

export default Damo;