import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";


const Card = ({bear}) => {
    return (
        <div className="w-[330px] h-[520px] rounded overflow-hidden shadow-lg m-4">
            <img src={bear.image} alt={bear.name} className="w-[330px] h-72" />
            <div className="px-6 py-4 bg-[#DAC0A3] text-[#5C3D1E] ">
                <div className="font-bold text-xl mb-2">{bear.name}</div>
                <p className="text-gray-700 text-base">${bear.price.toFixed(2)}</p>
                <Rating
                    className="mt-2"
                    style={{ maxWidth: 100 }}
                    value={bear.rating}
                    readOnly
                />
            </div>
            <div className="px-6 pb-4 pt-2 bg-[#DAC0A3] text-[#5C3D1E]">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    {bear.category}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    Available: {bear.available_quantity}
                </span>
                <Link to={`/detail/${bear._id}`}>
                    <button
                        className="bg-[#DAC0A3] border-2 border-[#5C3D1E] hover:bg-[#5C3D1E] text-[#5C3D1E] hover:text-[#DAC0A3] font-bold py-2 px-4 rounded-full mt-4 w-full"
                    >
                        View Details
                    </button>
                </Link>

            </div>

        </div>
    );
};

export default Card;