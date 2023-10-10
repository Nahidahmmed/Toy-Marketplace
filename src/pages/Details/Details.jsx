import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
    const teddyBear = useLoaderData();
    return (
        <div className="container mx-auto my-24">
            <div className="lg:flex bg-white rounded-lg shadow-lg">
                <div className="lg:w-2/3">
                    <img
                        src={teddyBear.image}
                        alt={teddyBear.name}
                        className="w-2/3  mx-auto my-8 object-cover  lg:h-4/5 rounded-lg"
                    />
                </div>
                <div className="lg:w-1/2 p-6 my-24">
                    <h2 className="text-5xl font-bold text-[#5C3D1E] mb-4">{teddyBear.name}</h2>
                    <p className="text-[#5C3D1E] font-bold text-xl mb-2">Category: {teddyBear.category}</p>
                    <p className="text-[#5C3D1E] font-bold text-xl mb-2">Price: ${teddyBear.price.toFixed(2)}</p>
                   
                    <p className="text-[#5C3D1E] font-bold text-xl mb-2">
                        Available: {teddyBear.available_quantity}
                    </p>
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={teddyBear.rating}
                        readOnly
                    />
                    <button
                        className="bg-[#DAC0A3] hover:bg-[#5C3D1E] text-[#5C3D1E] hover:text-[#DAC0A3] font-semibold py-3 px-6 rounded-lg transition duration-300 mt-4 block w-full lg:w-auto"

                    >
                        Add to Cart
                    </button>
                    <Link to="/allToys">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg mt-4 block w-full lg:w-auto transition duration-300"

                        >
                            Back to All Teddies
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Details;