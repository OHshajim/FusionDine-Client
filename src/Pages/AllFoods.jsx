import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import FoodCart from "../Components/FoodCart";
import axios from "axios";

const AllFoods = () => {
    const { URL } = useContext(AuthContext)
    const [foods, setFoods] = useState([])
    const handleSearch = async (e) => {
        e.preventDefault();
        const form = e.target;
        const search = form.search.value;
        console.log(search);
       
    }
    useEffect(() => {
        const loadData = async () => {
            try {
                const { data } = await axios(`${URL}/allFoods`)
                console.log(data);
                setFoods(data)
            }
            catch (error) {
                console.error(error);
            }
        }
        loadData()
    }, [])
    return (
        <div>
            <div className="bg-[linear-gradient(rgba(19,19,19,0.6),rgba(19,19,19,0.6)),url('https://i.ibb.co/GcgrdDY/breadcumb-bg-1-1.jpg')] bg-no-repeat bg-cover ">
                <div className=" h-96 flex items-center justify-center">
                    <h1 className="text-2xl lg:text-5xl font-bold text-white text-center">FusionDine || All Food Page</h1>
                </div>
            </div>
            <div className="mt-20 mb-10 max-w-[800px] mx-auto px-5">
                <form onSubmit={handleSearch}>
                    <div className="join w-full">
                        <input type="text" placeholder="Search your Favorite Food " className="input w-full input-bordered join-item rounded-full sm:px-6" name="search" />
                        <button className="btn rounded-full sm:px-8 join-item">Search</button>
                    </div>
                </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  max-w-[1600px] mx-auto px-5 mb-20">
                {
                    foods.map(food => <FoodCart key={food._id} food={food} />)
                }
            </div>
        </div>
    );
};

export default AllFoods;