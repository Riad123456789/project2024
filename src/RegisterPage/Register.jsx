import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="py-16">
            <div className="pt-16 flex justify-center items-center">
                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" action="#">
                        <h5 className="text-xl font-sans text-gray-900 dark:text-white">Register in to our platform</h5>
                        <div>
                            <label className="block mb-2 text-sm font-sans text-gray-900 dark:text-white">Your Name</label>
                            <input type="email" name="email" id="email" className="font-sans bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-sans text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" className="font-sans bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-sans text-gray-900 dark:text-white">Your password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
           
                        <button type="submit" className="w-full text-black bg-gradient-to-r  from-lime-500 via-lime-400 to-lime-200 hover:bg-gradient-to-br  focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 font-sans">Register to your account</button>
                        <div className="text-sm font-sans text-gray-500 dark:text-gray-300">
                           registered? <Link to={"/login"} className="text-blue-700 hover:underline dark:text-blue-500">Please Login</Link>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Register;