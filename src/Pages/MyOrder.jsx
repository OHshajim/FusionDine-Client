import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
// import toast from 'react-hot-toast';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import OrderTable from '../Components/OrderTable';

const MyOrder = () => {
    const { user, URL } = useContext(AuthContext)
    const [foods, setFood] = useState([])
    const [loading, SetLoad] = useState(true)

    const loadData = async () => {
        try {
            const { data } = await axios(`${URL}/purchaseFoods/${user.email}`)
            setFood(data)
            SetLoad(false)
            console.log(foods);
        }
        catch (error) {
            console.error(error);
        }
    }

    const deleteFood = async (id) => {
        SetLoad(true)
        console.log(id);
        try {
            const { data } = await axios.delete(`${URL}/deleteOrder/${id}`)
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
    useEffect(() => {
        loadData()
    }, [user])

    return (
        <div className="py-20 max-w-[1600px] mx-auto px-5">
            {/* title */}
            <Helmet>
                <title>FusionDine || My purchased Foods</title>
            </Helmet>

            {/* Components */}
            <div className="flex flex-col justify-center items-center my-10">
                <h2 className="text-2xl sm:text-4xl  mb-5 font-rufina font-bold">My Purchased Food Items</h2>
                <img src="https://i.ibb.co/7gGBjGX/sec-title-2.png" alt="logo" />
            </div>




            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="text-base ">Food Image</th>
                                <th className="text-base ">Food Name</th>
                                <th className="text-base ">Quantity</th>
                                <th className="text-base ">Price</th>
                                <th className="text-base ">Buying Date</th>
                                <th className="text-base "></th>
                            </tr>
                        </thead>
                        {
                            loading && <div className="flex justify-center"><div className="loader" /></div>
                        }
                        {
                            foods.map(food => <OrderTable key={food._id} food={food}
                                deleteFood={deleteFood} />)
                        }

                    </table>
                    {
                        !loading && <>
                            {
                                foods.length == 0 && <h2 className="text-center text-xl sm:text-2xl w-full my-20 font-bold text-red-600 ">
                                    You did not purchased any Food !!!</h2>
                            }
                        </>
                    }
                </div>
            </div>

        </div >
    );
};

export default MyOrder;