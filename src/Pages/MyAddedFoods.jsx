
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
    const [loading, SetLoad] = useState(true)
    const loadData = async () => {
        try {
            const { data } = await axios(`${URL}/myFoods/${user.email}`, { withCredentials: true })
            setFood(data)
            SetLoad(false)
        }
        catch (error) {
            console.error(error);
        }
    }

    const updateFood = async (updatedFood, id) => {
        SetLoad(true)
        try {
            const { data } = await axios.put(`${URL}/updatedFood/${id}`, updatedFood)
            console.log(data);
            loadData()
            SetLoad(false)
            toast.success('This food is  Successfully purchased  🌟')
        }
        catch (error) {
            console.error(error);
            toast.error('Error !!! Try again')
        }
    }
    const handleDelete = async (id) => {
        SetLoad(true)
        try {
            const { data } = await axios.delete(`${URL}/deleteFood/${id}`)
            console.log(data);
            loadData()
            SetLoad(false)
            toast.success(' food is  Successfully delete 🌟')
        }
        catch (error) {
            console.error(error);
            toast.error('Error !!! Try again')
        }
    }
    useEffect(() => {
        loadData()
    }, [user])

    return (
        <div className="py-20 max-w-[1600px] mx-auto px-5">
            {/* title */}
            <Helmet>
                <title>FusionDine || My Added Foods</title>
            </Helmet>

            {/* Components */}
            <div className="flex flex-col justify-center items-center my-10">
                <h2 className="text-2xl sm:text-4xl font-bold  mb-4 font-rufina animate__animated animate__backInLeft">My Added Food Items</h2>
                <img src="https://i.ibb.co/7gGBjGX/sec-title-2.png" alt="logo" />
            </div>




            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="text-base ">Food</th>
                                <th className="text-base ">Food Origin</th>
                                <th className="text-base ">Quantity</th>
                                <th className="text-base ">Price</th>
                                <th className="text-base "></th>
                            </tr>
                        </thead>
                        {
                            loading && <div className="flex justify-center"><div className="loader" /></div>
                        }

                        {
                            foods.map(food => <FoodTable key={food._id} id={food._id} food={food} updateFood={updateFood} handleDelete={handleDelete} />)
                        }

                    </table>
                    {
                        !loading && <>
                            {
                                foods.length == 0 && <h2 className="text-center text-xl sm:text-2xl w-full my-20 font-bold text-red-600 ">
                                    You did not added any Food !!!</h2>
                            }
                        </>
                    }
                </div>
            </div>

        </div >
    );
};

export default MyAddedFoods;