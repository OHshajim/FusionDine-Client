import { useContext } from "react";
import { MdUpdate } from "react-icons/md";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const FoodTable = ({ food }) => {
    const { user } = useContext(AuthContext)
    console.log(food);
    const { food_name, food_image, food_category, quantity, price, add_by, food_origin, description } = food;
    const handleUpdate = async (event) => {
        const form = event.target;

        const food_name = form.foodName.value;
        const food_image = form.photo.value;
        const food_category = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const food_origin = form.food_origin.value;
        const description = form.description.value;
        // console.log(name, email, spotName, location, country, seasonality, travel_time, visitorsPerYear, average_cost, image, description);
        const updatedFood = { food_name, food_image, food_category, quantity, price, add_by, food_origin, description };
        console.log(updatedFood);
        try {
            const { data } = await axios.put(`${URL}/myFoods/${user.email}`, updatedFood)
            console.log(data);
            toast.success('This food is  Successfully purchased  🌟')
        }
        catch (error) {
            console.error(error);
            toast.error('Error !!! Try again')
        }
    }
    return (
        <tr className="hover:bg-gray-800 hover:translate-x-2 hover:-translate-y-2 hover:duration-500">
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle sm:w-32 sm:h-32 w-20 h-20">
                            <img src={food_image} alt={food_name} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-lg">{food_name}</div>
                        <div className="text-base opacity-50">{food_category}</div>
                    </div>
                </div>
            </td>
            <td className="text-sm font-semibold">{food_origin}</td>
            <td className="text-sm font-semibold">{quantity}</td>

            <td className="text-sm font-semibold">{price}</td>
            <th>
                <button onClick={() => document.getElementById('my_modal_1').showModal()} className="btn  btn-outline font-semibold"><MdUpdate className="text-2xl hidden sm:flex" />Update</button>
            </th>

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">Update Your Added Food Details</h3>
                    <div className="modal-action">
                        <form method="dialog" onSubmit={handleUpdate}>

                            <div className="w-full flex md:flex-row  flex-col gap-5">
                                <div className="flex flex-col mb-3">
                                    <label className="text-lg mb-1 font-semi-bold">Food Name</label>
                                    <input className=" input bg-[#9f9f9f42] " placeholder="Food Name" defaultValue={food_name} name="foodName" type="text" />
                                </div>
                                <div className="flex flex-col mb-3">
                                    <label className="text-lg mb-1 font-semi-bold">Food Image</label>
                                    <input className=" input bg-[#9f9f9f42] " placeholder="Food Image URL " defaultValue={food_image} name="photo" type="text" />
                                </div>

                            </div>
                            <div className="w-full flex md:flex-row  flex-col gap-5">
                                <div className="flex flex-col mb-3">
                                    <label className="text-lg mb-1 font-semi-bold">Food Category</label>
                                    <input className=" input bg-[#9f9f9f42] " placeholder="Food Category" defaultValue={food_category} name="category" type="text" />
                                </div>
                                <div className="flex flex-col  mb-3">
                                    <label className="text-lg mb-1 font-semi-bold"> quantity</label>
                                    <input className=" input bg-[#9f9f9f42] " placeholder=" quantity" defaultValue={quantity} name="quantity" type="text" />
                                </div>
                            </div>
                            <div className="w-full flex md:flex-row  flex-col gap-5">
                                <div className="flex flex-col mb-3">
                                    <label className="text-lg mb-1 font-semi-bold">Food Origin</label>
                                    <input className=" input bg-[#9f9f9f42] " placeholder="Food Origin" defaultValue={food_origin} name="food_origin" type="text" />
                                </div>
                                <div className="flex flex-col mb-3">
                                    <label className="text-lg mb-1 font-semi-bold">Price</label>
                                    <input className=" input bg-[#9f9f9f42] " placeholder="Price" defaultValue={price} name="price" type="text" />
                                </div>
                            </div>

                            <div className="flex flex-col w-full mb-2">
                                <label className="text-lg mb-1 font-semi-bold">Short description</label>
                                <input className=" input bg-[#9f9f9f42] " defaultValue={description} placeholder="short description" name="description" type="text" />
                            </div>
                            <button className="btn my-3 w-full btn-outline">Update</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </tr>
    );
};

export default FoodTable;