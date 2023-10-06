import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="flex h-screen">
            {/* Image Section */}
            <div className="w-[500px] items-center my-auto ml-auto h-[600px]">
                <img
                    src="https://i.ibb.co/8Dr40ss/original-0c14504bd291054d76548cb015dff89a.png"
                    alt="Login Image"
                    className="object-cover h-full w-full"
                />
            </div>

            {/* Login Form Section */}
            <div className="w-1/2 flex  items-center justify-center ">
                <div className="p-8 w-[400px] h-[500px] bg-white rounded-lg shadow-lg border-2 border-sky-100">
                    <h2 className="text-3xl text-center font-semibold text-sky-500 mb-6">Register here</h2>
                    <form>
                        <div className="mb-6">
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="bg-gray-100 border-2 border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-sky-500 transition duration-300 hover:border-sky-400"
                                placeholder="Your username"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="text"
                                id="username"
                                name="photo"
                                className="bg-gray-100 border-2 border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-sky-500 transition duration-300 hover:border-sky-400"
                                placeholder="Your Photo URL"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="bg-gray-100 border-2 border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-sky-500 transition duration-300 hover:border-sky-400"
                                placeholder="Your password"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="bg-gray-100 border-2 border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-sky-500 transition duration-300 hover:border-sky-400"
                                placeholder="Your username"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 focus:outline-none focus:bg-sky-600 mb-4 w-full"
                        >
                            Login
                        </button>
                    </form>

                    <span className="text-sky-500 font-semibold">don't have a account? <Link to={"/login"} className="ml-2 underline">Login here</Link> </span>
                </div>
            </div>
        </div>
    );
};

export default Register;