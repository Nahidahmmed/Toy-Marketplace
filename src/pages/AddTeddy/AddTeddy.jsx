import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const AddTeddy = () => {
    const { user } = useContext(AuthContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const available_quantity = form.availableQuantity.value;

        const data = { name, image, sellerEmail, sellerName, category, price, rating, available_quantity, }
        console.log(data);


        fetch("https://toy-marketplace-server-self.vercel.app/addedToys", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.success){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'your class is Added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset();
                   }
                
            })
            .catch(error => console.log(error));


    };


    return (
        <div>
            <div className="w-[50%] mx-auto mt-8">
                <h2 className="text-5xl font-bold text-center py-7 text-[#5C3D1E] mb-6">Add a Toy</h2>
                <form onSubmit={handleSubmit} className="bg-[#DAC0A3] my-8 rounded-lg shadow-lg p-6">
                    <div className="flex">
                        <div className="mb-6  mr-5 w-1/2">
                            <label htmlFor="pictureURL" className="text-[#5C3D1E] text-lg font-bold mb-2 block">
                                Picture URL of the toy
                            </label>
                            <input
                                type="text"
                                id="image"
                                name="image"
                                placeholder="Picture URL of the toy"
                                className="w-full px-4 py-2 border border-[#DAC0A3] rounded-lg focus:outline-none focus:border-[#5C3D1E] text-base"
                                required
                            />
                        </div>
                        <div className="mb-6  mr-5 w-1/2">
                            <label htmlFor="name" className="text-[#5C3D1E] text-lg font-bold mb-2 block">
                                Teddy Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5C3D1E] text-base"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="mb-6  mr-5 w-1/2">
                            <label htmlFor="sellerName" className="text-[#5C3D1E] text-lg font-bold mb-2 block">
                                Seller Name
                            </label>
                            <input
                                type="text"
                                id="sellerName"
                                name="sellerName"
                                value={user?.displayName}
                                placeholder="Seller Name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5C3D1E] text-base"
                            />
                        </div>
                        <div className="mb-6  mr-5 w-1/2">
                            <label htmlFor="sellerEmail" className="text-[#5C3D1E] text-lg font-bold mb-2 block">
                                Seller Email
                            </label>
                            <input
                                type="email"
                                id="sellerEmail"
                                name="sellerEmail"
                                value={user?.email}
                                placeholder="Seller Email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5C3D1E] text-base"
                            />
                        </div>
                    </div>

                    <div className="flex">
                        <div className="mb-6  mr-5 w-1/2">
                            <label htmlFor="price" className="text-[#5C3D1E] text-lg font-bold mb-2 block">
                                Price
                            </label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                placeholder="Price"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5C3D1E] text-base"
                                required
                            />
                        </div>
                        <div className="mb-6  mr-5 w-1/2">
                            <label htmlFor="rating" className="text-[#5C3D1E] text-lg font-bold mb-2 block">
                                Rating
                            </label>
                            <input
                                type="number"
                                id="rating"
                                name="rating"
                                placeholder="Rating"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5C3D1E] text-base"
                                step="0.1"
                                min="0"
                                max="5"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="mb-6  mr-5 w-1/2">
                            <label htmlFor="subCategory" className="text-[#5C3D1E] text-lg font-bold mb-2 block">
                                category:
                            </label>
                            <select
                                id="subCategory"
                                name="category"
                                className="w-full  text-gray-800 border-gray-300 rounded-md px-3 py-2"
                                required
                            >
                                <option value="">Select a sub-category</option>
                                <option value="Holiday Specials">Holiday Specials</option>
                                <option value="Themed Teddies">Themed Teddies</option>
                                <option value="Classic Teddy Bears">Classic Teddy Bears</option>
                                <option value="Specialty Teddies">Specialty Teddies</option>
                            </select>
                        </div>
                        <div className="mb-6  mr-5 w-1/2">
                            <label
                                htmlFor="availableQuantity"
                                className="text-[#5C3D1E] text-lg font-bold mb-2 block"
                            >
                                Available Quantity
                            </label>
                            <input
                                type="number"
                                id="availableQuantity"
                                name="available_quantity"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5C3D1E] text-base"
                                required
                            />
                        </div>
                    </div>
                    <div className="mt-6 w-full">
                        <button
                            type="submit"
                            className=" bg-[#996d3b] w-full hover:bg-[#5C3D1E] text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                        >
                            {/* <FontAwesomeIcon icon={faPlus} className="mr-2" /> */}
                            Add Toy
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTeddy;