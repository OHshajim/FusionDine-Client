import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const SingleFood = () => {
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
                <h2 className="text-2xl sm:text-4xl mb-4 animate__animated animate__backInLeft font-rufina font-bold">Food Details </h2>
                <img src="https://i.ibb.co/7gGBjGX/sec-title-2.png" alt="logo" />
            </div>
            <div className="flex card lg:card-side  shadow-2xl w-full">
                <img src={food_image} alt={food_name} className=" lg:w-1/2" />
                <div className="card-body lg:w-1/2">
                    <h2 className="card-title text-2xl font-bold font-rufina">{food_name}</h2>
                    <p>{description}</p>
                    <div className="flex justify-between my-3 sm:flex-row flex-col">
                        <div className="space-y-3">
                            <p><span className="font-semibold sm:text-lg" >Category :</span> {food_category}</p>
                            <p><span className="font-semibold sm:text-lg" >Food Origin :</span> {food_origin}</p>
                        </div>
                        <div>
                            <p><span className="font-semibold sm:text-lg" >Name:</span>{name}</p>
                            <p><span className="font-semibold sm:text-lg" >Email :</span>{email}</p>
                        </div>
                    </div>
                    <div className="flex justify-between my-3 sm:flex-row flex-col">
                        <div className="space-y-3">
                            <p><span className="font-semibold sm:text-lg" >Quantity :</span> {quantity}</p>
                            <p><span className="font-semibold sm:text-lg" >Purchase Number :</span> {purchase_number}</p>
                        </div>
                        <h4 className="text-orange-400"><span className="font-semibold sm:text-lg" >Price :</span> ${price}</h4>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/foodPurchase/${_id}`} className={` btn w-full btn-outline text-orange-400 border-orange-400 ${quantity <= 0 && "btn-disabled "}`}> <button >Purchase</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;