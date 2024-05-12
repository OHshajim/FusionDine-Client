import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const AddFood = () => {
    const { user, URL } = useContext(AuthContext)

    const handleAddFood = async (e) => {
        e.preventDefault();
        const form = e.target;
        const food_name = form.foodName.value;
        const food_image = form.photo.value;
        const food_category = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const food_origin = form.food_origin.value;
        const description = form.description.value;
        const name = form.name.value
        const email = form.email.value
        const add_by = {
            name,
            email
        }
        const food = { food_name, food_image, food_category, quantity, price, add_by, food_origin, description, purchase_number: 0 }
        console.log(food);
        try {
            const { data } = await axios.post(`${URL}/food`, food)
            console.log(data);
            toast.success('This food is  Successfully purchased  🌟')
            form.reset()
        }
        catch (error) {
            console.error(error);
            toast.error('Error !!! Try again')
        }
    }
    return (
        <div className="max-w-[1600px] mx-auto px-5">
            {/* title */}
            <Helmet>
                <title>FusionDine || Add Food</title>
            </Helmet>

            {/* Components */}
            <div className="py-20">

                <div className="flex flex-col justify-center items-center my-10">
                    <h2 className="text-2xl font-bold sm:text-4xl font-rufina  mb-4 animate__animated animate__backInRight ">Add Food</h2>
                    <img src="https://i.ibb.co/7gGBjGX/sec-title-2.png" alt="logo" />
                </div>

                <form className=" space-y-4" onSubmit={handleAddFood}   data-aos="fade-up" data-aos-duration="1000">
                    <div className="w-full flex md:flex-row  flex-col gap-5">
                        <div className="flex flex-col md:w-1/2">
                            <label className="text-lg mb-1 font-semi-bold">User Name</label>
                            <input className=" input bg-[#9f9f9f42] " placeholder="Enter your name" value={user.displayName} name="name" type="text" />
                        </div>
                        <div className="flex flex-col md:w-1/2">
                            <label className="text-lg mb-1 font-semi-bold">User Email</label>
                            <input className=" input bg-[#9f9f9f42] " placeholder="Enter your  email" value={user.email} name="email" type="email" />
                        </div>
                    </div>
                    <div className="w-full flex md:flex-row  flex-col gap-5">
                        <div className="flex flex-col md:w-1/2">
                            <label className="text-lg mb-1 font-semi-bold">Food Name</label>
                            <input className=" input bg-[#9f9f9f42] " placeholder="Food Name" name="foodName" type="text" />
                        </div>
                        <div className="flex flex-col md:w-1/2">
                            <label className="text-lg mb-1 font-semi-bold">Food Image</label>
                            <input className=" input bg-[#9f9f9f42] " placeholder="Food Image URL " name="photo" type="text" />
                        </div>

                    </div>
                    <div className="w-full flex md:flex-row  flex-col gap-5">
                        <div className="flex flex-col md:w-1/2">
                            <label className="text-lg mb-1 font-semi-bold">Food Category</label>
                            <input className=" input bg-[#9f9f9f42] " placeholder="Food Category" name="category" type="text" />
                        </div>
                        <div className="flex flex-col md:w-1/2">
                            <label className="text-lg mb-1 font-semi-bold"> quantity</label>
                            <input className=" input bg-[#9f9f9f42] " placeholder=" quantity" name="quantity" type="text" />
                        </div>
                    </div>
                    <div className="w-full flex md:flex-row  flex-col gap-5">
                        <div className="flex flex-col md:w-1/2">
                            <label className="text-lg mb-1 font-semi-bold">Food Origin</label>
                            <input className=" input bg-[#9f9f9f42] " placeholder="Food Origin" name="food_origin" type="text" />
                        </div>
                        <div className="flex flex-col md:w-1/2">
                            <label className="text-lg mb-1 font-semi-bold">Price</label>
                            <input className=" input bg-[#9f9f9f42] " placeholder="Price" name="price" type="text" />
                        </div>
                    </div>

                    <div className="flex flex-col w-full">
                        <label className="text-lg mb-1 font-semi-bold">Short description</label>
                        <input className=" input bg-[#9f9f9f42] " placeholder="short description" name="description" type="text" />
                    </div>

                    <input type="submit" value="Add" className="btn w-full btn-outline border-orange-400 text-orange-400" />
                </form>
            </div>
        </div>
    );
};

export default AddFood;