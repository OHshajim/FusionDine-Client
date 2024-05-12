import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const SingleFood = () => {
    const { user } = useContext(AuthContext)
    const foodData = useLoaderData()
    console.log(foodData);
    const { description, food_image, food_name, food_origin, price, quantity, food_category, add_by, _id, purchase_number
    } = foodData
    const { name, email } = add_by;
    return (
        <div className="py-20 max-w-[1600px] mx-auto px-5">
            {/* title */}
            <Helmet>
                <title>FusionDine || Foods Details</title>
            </Helmet>

            {/* Components */}
            <div className="flex flex-col justify-center items-center mb-10">
                <h2 className="text-4xl mb-4 animate__animated animate__backInLeft">Food Details </h2>
                <img src="https://i.ibb.co/7gGBjGX/sec-title-2.png" alt="logo" />
            </div>
            <div className="flex card lg:card-side  shadow-2xl w-full">
                <img src={food_image} alt={food_name} className=" lg:w-1/2" />
                <div className="card-body lg:w-1/2">
                    <h2 className="card-title text-2xl font-bold">{food_name}</h2>
                    <p>{description}</p>
                    <div className="flex justify-between ">
                        <div>
                            <p>Category : {food_category}</p>
                            <p>Food Origin : {food_origin}</p>
                        </div>
                        {
                            name == 'Owner' ? <h3 className="text-red-400">Added By Owner</h3> :
                                <div>
                                    <p><span >Name:</span>{name}</p>
                                    <p><span>Email :</span>{email}</p>
                                </div>
                        }
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <p>Quantity : {quantity}</p>
                            <p>Purchase Number : {purchase_number}</p>
                        </div>
                        <h4 className="text-red-400">Price : {price}</h4>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={user ? `/foodPurchase/${_id}` : "/login"}><button className="btn w-full btn-outline">Purchase</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;