import { Link } from "react-router-dom";



const Header = () => {
    return (
        <nav className="bg-sky-500">
            <div className="container mx-auto py-4">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-white font-bold text-2xl">
                        Toy Website
                    </Link>
                    <div className="hidden lg:flex space-x-4">
                        <Link
                            to="/"
                            className="text-white hover:text-indigo-500  py-3 font-semibold"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="text-white hover:text-indigo-500  py-3 font-semibold"
                        >
                            About
                        </Link>
                        <Link
                            to="/services"
                            className="text-white hover:text-indigo-500  py-3 font-semibold"
                        >
                            Services
                        </Link>
                        <Link
                            to="/login"
                            className="text-white hover:text-indigo-500  py-3 font-semibold"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;