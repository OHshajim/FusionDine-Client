import { MdUpdate } from "react-icons/md";

const FoodTable = ({ food, updateFood, handleDelete, id }) => {
    const { _id, food_name, food_image, food_category, quantity, price, add_by, food_origin, description } = food;

    const handleUpdate = (event) => {
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
        updateFood(updatedFood, _id)
    }
    return (
        <tbody className="hover:translate-x-2 hover:-translate-y-2 hover:duration-500 hover:bg-[#4a474759]">
            <tr  >
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask rounded-xl  sm:w-36 sm:h-28 w-20 h-16">
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

                <td className="text-sm font-semibold">${price}</td>
                <td >
                    <div className="flex  gap-5">
                        {/* update */}
                        <button onClick={() => document.getElementById('my_modal_5' + id).showModal()} className="btn hover:border-green-400 hover:bg-black hover:text-green-400 btn-outline font-semibold "><MdUpdate className="text-2xl hidden sm:flex" />Update </button>

                        {/* delete */}
                        <div className='flex items-center gap-x-6'>
                            <button onClick={() => handleDelete(_id)} className=' transition-colors duration-200 btn btn-outline hover:border-red-500 hover:bg-black hover:text-red-500 focus:outline-none'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    className='w-5 h-5'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                                    />
                                </svg> Delete
                            </button>
                        </div>
                    </div>
                </td>

            </tr>
            <dialog id={"my_modal_5" + id} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">Update Your Added Food Details </h3>
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
                            <button className="btn my-3 w-full btn-outline text-orange-400 border-orange-400">Update</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </tbody>
    );
};

export default FoodTable;
