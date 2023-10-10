import { Link } from "react-router-dom";

const ErrPage = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <img
                    src="https://i.ibb.co/wL7rJHP/teddy-22-778x1024.png"
                    alt="Logo"
                    className="w-32 h-32 mb-6 animate-bounce"
                />
                <h1 className="text-4xl font-bold text-[#5C3D1E] mb-2">404!</h1>
                <h1 className="text-4xl font-bold text-[#5C3D1E] mb-2">Oops! Something went wrong.</h1>
                <p className="text-lg text-[#5C3D1E] mb-6">The page you are looking for dose not exist.</p>
                <Link to="/" className="bg-[#DAC0A3] hover:bg-[#5C3D1E] text-[#5C3D1E] hover:text-[#DAC0A3] font-semibold py-2 px-4 rounded transition duration-300">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ErrPage;