import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AddFood = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="max-w-[1600px] mx-auto px-5">
            <div className="py-20">

            <div className="flex flex-col justify-center items-center my-10">
                <h2 className="text-4xl  mb-4">Add Food</h2>
                <img src="https://i.ibb.co/7gGBjGX/sec-title-2.png" alt="logo" />
            </div>

                <form className=" space-y-4" >
                    <div className="w-full flex md:flex-row  flex-col gap-5">
                        <div className="flex flex-col md:w-1/2">
                            <label className="text-lg mb-1 font-semi-bold">User Name</label>
                            <input className=" input bg-[#9f9f9f42] " placeholder="Enter your name" value={user.displayName} name="name" type="text" required />
                        </div>
                        <div className="flex flex-col md:w-1/2">
                            <label className="text-lg mb-1 font-semi-bold">User Email</label>
                            <input className=" input bg-[#9f9f9f42] " placeholder="Enter your  email" value={user.email} name="email" type="email" required />
                        </div>
                    </div>
                    <div className="w-full flex md:flex-row  flex-col gap-5">
                        <div className="flex flex-col md:w-1/2">
                            <label className="text-lg mb-1 font-semi-bold">Food Name</label>
                            <input className=" input bg-[#9f9f9f42] " placeholder="Food Name" name="foodName" type="text" required />
                        </div>
                        <div className="flex flex-col md:w-1/2">
                            <label className="text-lg mb-1 font-semi-bold">Food Image</label>
                            <input className=" input bg-[#9f9f9f42] " placeholder="Food Image URL " name="spotName" type="text" />
                        </div>

                    </div>
                    <div className="w-full flex md:flex-row  flex-col gap-5">
                        <div className="flex flex-col md:w-1/2">
                            <label className="text-lg mb-1 font-semi-bold">Food Category</label>
                            <input className=" input bg-[#9f9f9f42] " required placeholder="Food Category" name="location" type="text" />
                        </div>
                        <div className="flex flex-col md:w-1/2">
                            <label className="text-lg mb-1 font-semi-bold"> quantity</label>
                            <input className=" input bg-[#9f9f9f42] " required placeholder=" quantity" name="seasonality" type="text" />
                        </div>
                    </div>
                    <div className="w-full flex md:flex-row  flex-col gap-5">
                        <div className="flex flex-col md:w-1/2">
                            <label className="text-lg mb-1 font-semi-bold">Food Origin</label>
                            <input className=" input bg-[#9f9f9f42] " required placeholder="Food Origin" name="location" type="text" />
                        </div>
                        <div className="flex flex-col md:w-1/2">
                            <label className="text-lg mb-1 font-semi-bold">Price</label>
                            <input className=" input bg-[#9f9f9f42] " required placeholder="Price" name="seasonality" type="text" />
                        </div>
                    </div>

                    <div className="flex flex-col w-full">
                        <label className="text-lg mb-1 font-semi-bold">Short description</label>
                        <input className=" input bg-[#9f9f9f42] " required placeholder="short description" name="description" type="text" />
                    </div>

                    <input type="submit" value="Add" className="btn w-full btn-outline border-cyan-500 text-cyan-500" />
                </form>
            </div>
        </div>
    );
};

export default AddFood;