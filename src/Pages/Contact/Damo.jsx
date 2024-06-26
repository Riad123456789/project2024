

import emailjs from '@emailjs/browser';
import { useRef } from 'react';
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