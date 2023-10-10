import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
    const [showAll, setShowAll] = useState(false);
    const [bears, setBears] = useState([]);
    const maxBearsToShow = showAll ? bears.length : 8;

    useEffect(() => {
        fetch('http://localhost:5000/teddy')
            .then(res => res.json())
            .then(data => setBears(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);


    return (
        <div className="container mx-auto py-8">
            {bears.length === 0 ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <div className="flex flex-wrap justify-center">
                        {bears.slice(0, maxBearsToShow).map((bear, index) => (

                            // The Card
                            <div key={index} className="w-[330px] h-[520px] rounded overflow-hidden shadow-lg m-4">
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


                        ))}
                    </div>
                    <div className="text-center mt-4">
                        {showAll ? (
                            <button
                                className="bg-[#DAC0A3] border-2 border-[#5C3D1E] hover:bg-[#5C3D1E] text-[#5C3D1E] hover:text-[#DAC0A3] font-bold py-2 px-4 rounded-full mt-4 w-72"
                                onClick={() => setShowAll(false)}
                            >
                                Show Less
                            </button>
                        ) : (

                            <button className="bg-[#DAC0A3] border-2 border-[#5C3D1E] hover:bg-[#5C3D1E] text-[#5C3D1E] hover:text-[#DAC0A3] font-bold py-2 px-4 rounded-full mt-4 w-72"
                                onClick={() => setShowAll(true)}
                            >
                                Show More
                            </button>


                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllToys;





