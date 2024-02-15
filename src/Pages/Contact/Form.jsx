

const Form = () => {
    return (
        <div className=' pb-20 px-4 max-w-6xl mx-auto'>
            <form className="">
                <div className='grid grid-cols-2 gap-5'>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-serif text-gray-900 dark:text-white">First Name</label>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-sans" required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-serif text-gray-900 dark:text-white">Last Name</label>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-sans" required />
                    </div>
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-serif text-gray-900 dark:text-white">Your Email</label>
                    <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-sans" required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-serif text-gray-900 dark:text-white">Comment or Message</label>
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-sans" placeholder="Leave a comment..."></textarea>
                </div>
                <button type="submit" className="text-black bg-gradient-to-r  from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br  focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 font-sans ">Submit</button>
            </form>
        </div>
    );
};

export default Form;