

const AddTeddy = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        // const form = event.target;
        // const name = form.name.value;
        // const photo = form.photo.value;
        // const sellerName = form.sellerName.value;
        // const sellerEmail = form.sellerEmail.value;
        // const category = form.category.value;
        // const price = form.price.value;
        // const rating = form.rating.value;
        // const quantity = form.quantity.value;
        // const description = form.description.value;
        // const data = { name, photo, sellerEmail, sellerName, category, price, rating, quantity, description }
        // console.log(data);
        

        //     fetch("https://assignment-11-server-phi-azure.vercel.app/addedToys", {
        //         method: "POST",
        //         headers: {
        //             "content-type": "application/json"
        //         },
        //         body: JSON.stringify(data)
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             if (data.success) {
        //                 //    switallart
        //             }
        //             form.reset();
        //         })
        //         .catch(error => console.log(error));


        // };
    };


    return (
        <div>
            <div className="container mx-auto mt-8">
                <h2 className="text-3xl font-semibold text-[#5C3D1E] mb-6">Add a Toy</h2>
                <form onSubmit={handleSubmit} className="bg-[#F7EBC3] rounded-lg shadow-lg p-6">
                    <div className="mb-6">
                        <label htmlFor="pictureURL" className="text-[#5C3D1E] text-lg font-semibold mb-2 block">
                            Picture URL of the toy
                        </label>
                        <input
                            type="text"
                            id="pictureURL"
                            name="pictureURL"
                            value="Teddy URL"
                            className="w-full px-4 py-2 border border-[#DAC0A3] rounded-lg focus:outline-none focus:border-[#5C3D1E] text-base"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="name" className="text-[#5C3D1E] text-lg font-semibold mb-2 block">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"

                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5C3D1E] text-base"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="sellerName" className="text-[#5C3D1E] text-lg font-semibold mb-2 block">
                            Seller Name (if available)
                        </label>
                        <input
                            type="text"
                            id="sellerName"
                            name="sellerName"

                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5C3D1E] text-base"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="sellerEmail" className="text-[#5C3D1E] text-lg font-semibold mb-2 block">
                            Seller Email (info from the logged-in user)
                        </label>
                        <input
                            type="email"
                            id="sellerEmail"
                            name="sellerEmail"

                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5C3D1E] text-base"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="category" className="text-[#5C3D1E] text-lg font-semibold mb-2 block">
                            Category
                        </label>
                        <input
                            type="text"
                            id="category"
                            name="category"

                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5C3D1E] text-base"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="price" className="text-[#5C3D1E] text-lg font-semibold mb-2 block">
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            name="price"

                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5C3D1E] text-base"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="rating" className="text-[#5C3D1E] text-lg font-semibold mb-2 block">
                            Rating
                        </label>
                        <input
                            type="number"
                            id="rating"
                            name="rating"

                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5C3D1E] text-base"
                            step="0.1"
                            min="0"
                            max="5"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="availableQuantity"
                            className="text-[#5C3D1E] text-lg font-semibold mb-2 block"
                        >
                            Available Quantity
                        </label>
                        <input
                            type="number"
                            id="availableQuantity"
                            name="availableQuantity"

                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5C3D1E] text-base"
                            required
                        />
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="bg-[#5C3D1E] hover:bg-[#DAC0A3] text-[#F7EBC3] font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
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