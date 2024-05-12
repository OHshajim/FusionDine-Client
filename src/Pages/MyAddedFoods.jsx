
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import FoodTable from "../Components/FoodTable";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

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

    const updateFood = async (updatedFood, id) => {
        try {
            const { data } = await axios.put(`${URL}/updatedFood/${id}`, updatedFood)
            console.log(data);
            toast.success('This food is  Successfully purchased  🌟')
        }
        catch (error) {
            console.error(error);
            toast.error('Error !!! Try again')
        }
    }
    useEffect(() => {
        //     fetch(`${URL}/myFoods/${user.email}`)
        //         .then(res => res.json())
        //         .then(data => {
        //             setFood(data)
        //             // console.log(data);
        //             // setLoad(false)
        //         })
        loadData()
    }, [user])

    return (
        <div className="py-20 max-w-[1600px] mx-auto px-5">
            {/* title */}
            <Helmet>
                <title>FusionDine || My Added Foods</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>

            {/* Components */}
            <div className="flex flex-col justify-center items-center my-10">
                <h2 className="text-4xl  mb-4">My Added Food Items</h2>
                <img src="https://i.ibb.co/7gGBjGX/sec-title-2.png" alt="logo" />
            </div>




            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="text-base ">Food Name</th>
                                <th className="text-base ">Food Origin</th>
                                <th className="text-base ">Quantity</th>
                                <th className="text-base ">Price</th>
                                <th className="text-base "></th>
                            </tr>
                        </thead>
                        {
                            foods.map(food => <FoodTable key={food._id} food={food} updateFood={updateFood} />)
                        }

                    </table>
                </div>
            </div>

        </div >
    );
};

export default MyAddedFoods;