import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";




const MyTeddy = () => {
    const { user } = useContext(AuthContext);
    const [bears, setMyToys] = useState([])
    const url = `https://toy-marketplace-server-self.vercel.app/addedToys?sellerEmail=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))

    }, [url])
    const handleDelete = (id) =>{
        const proceed = confirm('are you sure you want to delete')
        if(proceed){
            fetch(`https://toy-marketplace-server-self.vercel.app/addedToys/${id}`, {
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                const remaining = bears.filter(bear => bear._id !== id);
                setMyToys(remaining);
            }
        })
        }
    }
    console.log(bears);
    return (
        <div className="overflow-x-auto container mx-auto">
            <h1 className="font-bold text-[#8f6031] text-5xl text-center my-12">My Added Toys</h1>
            <table className="table text-lg mb-32">
                {/* head */}
                <thead className="text-[#8f6031] text-lg">
                    <tr>
                        <th>
                            %
                        </th>
                        <th>image</th>
                        <th>Name</th>
                        <th>price</th>
                        <th>rating</th>
                        <th>Seller Info</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="text-[#8f6031]">
                    {/* row 1 */}
                    {bears.map(bear => <tr key={bear._id}>
                        <th>
                            {bears.length}
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-16 h-16">
                                        <img src={bear.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{bear.name}</div>
                                    <div className="text-sm opacity-50"></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            {bear.sellerName}
                            <br />
                            <span className="badge badge-ghost badge-sm">{bear.sellerEmail}</span>
                        </td>
                        <td><span>{bear.price}</span></td>
                        <td><span>{bear.rating}</span></td>
                        <td>{bear.category}</td>
                        <th>
                            <button onClick={() =>handleDelete(bear._id)} className="bg-[#DAC0A3] text-[#5C3D1E] px-4 py-2 rounded-full text-sm font-semibold mr-5 hover:bg-red-600 hover:text-white transition duration-300">Delete</button>
                        </th>
                    </tr>)}

                </tbody>


            </table>
        </div>
    );
};

export default MyTeddy;