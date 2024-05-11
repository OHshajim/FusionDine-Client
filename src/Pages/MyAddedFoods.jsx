
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import FoodTable from "../Components/FoodTable";

const MyAddedFoods = () => {
    const { user, URL } = useContext(AuthContext)
    const [foods, setFood] = useState([])

    const loadData = async () => {
        try {
            const { data } = await axios(`${URL}/myFoods/${user.email}`)
            setFood(data)
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        loadData()
    }, [user])

    return (
        <div className="py-20 max-w-[1600px] mx-auto px-5">
            <div className="flex flex-col justify-center items-center my-10">
                <h2 className="text-4xl  mb-4">My Added Food Items</h2>
                <img src="https://i.ibb.co/7gGBjGX/sec-title-2.png" alt="logo" />
            </div>




            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="text-base ">Food Name</th>
                                <th className="text-base ">Food Origin</th>
                                <th className="text-base ">Quantity</th>
                                <th className="text-base ">Price</th>
                                <th className="text-base "></th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                foods.map(food => <FoodTable key={food._id} food={food} />)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div >
    );
};

export default MyAddedFoods;