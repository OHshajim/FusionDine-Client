import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import FoodCart from "./FoodCart";
import { Link } from "react-router-dom";

const TopFoods = () => {
    const [loading, SetLoad] = useState(true)
    const { URL } = useContext(AuthContext)
    const [foods, setFoods] = useState([])
    useEffect(() => {
        const loadData = async () => {
            try {
                const { data } = await axios(`${URL}/foods`)
                console.log(data);
                setFoods(data)
                SetLoad(false)
            }
            catch (error) {
                console.error(error);
            }

        }
        loadData()
    }, [])
    return (
        <div className="my-20 mx-auto max-w-[1600px] px-5">
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-4xl mb-4 font-rufina font-bold">Our Top Foods </h2>
                <img src="https://i.ibb.co/7gGBjGX/sec-title-2.png" alt="logo" />
            </div>
            {
                loading && <div className="flex justify-center"><div className="loader" /></div>
            }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
                {
                    foods.map(food => <FoodCart key={food._id} food={food} />)
                }
            </div>
            <div className="flex justify-center">
                <Link to='/allFoods'><button className='btn btn-outline rounded-full px-5 mt-3 text-orange-400 border-orange-400'>All Foods</button></Link>
            </div>
        </div>
    );
};

export default TopFoods;