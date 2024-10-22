import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import FoodCart from "../Components/FoodCart";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const AllFoods = () => {
    const { URL } = useContext(AuthContext)
    const [foods, setFoods] = useState([])
    const [loading, SetLoad] = useState(true)

    const loadData = async () => {
        try {
            const { data } = await axios(`${URL}/allFoods`)
            console.log(data);
            setFoods(data)
            SetLoad(false)
        }
        catch (error) {
            console.error(error);
        }
    }

    const handleSearch = async (e) => {
        SetLoad(true)
        e.preventDefault();
        const form = e.target;
        const search = form.search.value;
        console.log(search);
        if (search === '') {
            return loadData();
        }
        try {
            const { data } = await axios(`${URL}/food?search=${search}`)
            console.log(data);
            setFoods(data)
            SetLoad(false)
        }
        catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {

        loadData()
    }, [])

    return (
        <div>

            {/* title */}
            <Helmet>
                <title>FusionDine || All Foods</title>
            </Helmet>

            {/* Components */}
            <div className="bg-[linear-gradient(rgba(19,19,19,0.6),rgba(19,19,19,0.6)),url('https://i.ibb.co/GcgrdDY/breadcumb-bg-1-1.jpg')] bg-no-repeat bg-cover bg-center">
                <div className="h-[40vh] flex flex-col items-center justify-center">
                    <h1 className="text-xl lg:text-5xl font-bold text-white text-center mb-5 font-rufina animate__animated animate__backInRight"> All Foods Page</h1>
                    <h3 className="text-sm sm:text-lg  font-semibold text-white text-center mb-3">FusionDine || All Foods Page</h3>
                    <img src="https://i.ibb.co/7gGBjGX/sec-title-2.png" alt="logo" />
                </div>
            </div>
            <div className="mt-20 mb-10 max-w-[800px] mx-auto px-5">
                <form onSubmit={handleSearch}>
                    <div className="join w-full">
                        <input type="text" placeholder="Search your Favorite Food " className="input w-full input-bordered join-item rounded-full sm:px-6" name="search" />
                        <button className="btn rounded-full sm:px-8 join-item text-orange-400 border-orange-400">Search</button>
                    </div>
                </form>
            </div>
            {
                loading && <div className="flex justify-center"><div className="loader" /></div>
            }
            {
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  max-w-[1600px] mx-auto px-5 mb-20">
                    {
                        foods.map(food => <FoodCart key={food._id} food={food} />)
                    }
                </div>
            }
            {
                !loading && <>
                    {
                        foods.length == 0 && <h2 className="text-center text-xl md:text-2xl w-full my-20 font-bold text-red-600 ">This Food does not exist !!!</h2>
                    }
                </>
            }
        </div>
    );
};

export default AllFoods;