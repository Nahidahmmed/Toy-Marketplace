import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password,photo)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(username,photo)
                    .then(() => {
                        Swal.fire({
                            title: 'User created successful. ',
                            showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                            }
                        });
                        navigate(from, { replace: true });
                    })
                    .catch(err => console.log(err))

            })

    }
    return (
        <div className="flex h-screen">
            {/* Image Section */}
            <div className="w-[500px] items-center my-auto ml-auto h-[600px]">
                <img
                    src="https://i.ibb.co/wL7rJHP/teddy-22-778x1024.png"
                    alt="Login Image"
                    className="object-cover h-full w-full"
                />
            </div>

            {/* Login Form Section */}
            <div className="w-1/2 flex  items-center justify-center ">
                <div className="p-8 w-[500px] h-[580px] bg-white rounded-lg shadow-lg border-2 border-[#c4a484]">
                    <h2 className="text-3xl text-center font-semibold text-[#5C3D1E] mb-6">Register here</h2>
                    <form onSubmit={handleSignIn}>
                        <div className="mb-6">
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="bg-gray-100 text-[#5C3D1E] border-[#c4a484] border-2 rounded-lg text-lg py-3 px-4 w-full focus:outline-none focus:border-[#a77543] transition duration-300 hover:border-sky-400"
                                placeholder="Your username"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="text"
                                id="photo"
                                name="photo"
                                className="bg-gray-100 border-2 border-[#c4a484] rounded-lg text-lg py-3 px-4 w-full focus:outline-none focus:border-[#a77543] transition duration-300 hover:border-sky-400"
                                placeholder="Your Photo URL"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="bg-gray-100 border-2 border-[#c4a484] rounded-lg text-lg py-3 px-4 w-full focus:outline-none focus:border-[#a77543] transition duration-300 hover:border-sky-400"
                                placeholder="Your email"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="bg-gray-100 border-2 border-[#c4a484] rounded-lg text-lg py-3 px-4 w-full focus:outline-none focus:border-[#a77543] transition duration-300 hover:border-sky-400"
                                placeholder="Your password"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-[#DAC0A3] hover:bg-[#c99d6b] text-[#5C3D1E] text-xl font-semibold py-2 px-4 rounded-lg transition duration-300 focus:outline-none focus:bg-[#b48c5f] mb-4 w-full"
                        >
                            Register
                        </button>
                    </form>

                    <input type="submit" value="G" className="block font-bold text-5xl bg-[#DAC0A3] text-[#5C3D1E] my-2 mx-auto w-[55px] rounded-full text-center pb-1 pr-1" />


                    <span className="text-[#5C3D1E] font-semibold">already have a account? <Link to={"/login"} className="ml-2 underline">Login here</Link> </span>
                </div>
            </div>
        </div>
    );
};

export default Register;