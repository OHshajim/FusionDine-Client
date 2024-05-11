import { useLoaderData } from "react-router-dom";

const SingleFood = () => {
    const foodData = useLoaderData()
    console.log(foodData);
    const { description, food_image, food_name, food_origin, price, quantity, food_category, add_by
    } = foodData
    const { name, email } = add_by;
    return (
        <div className="py-20 max-w-[1600px] mx-auto px-5">
            <h1 className="text-3xl font-semibold my-5">Single Food Details :</h1>
            <div className="flex card lg:card-side  shadow-2xl w-full">
                <img src={food_image} alt={food_name} className=" lg:w-1/2" />
                <div className="card-body lg:w-1/2">
                    <h2 className="card-title text-2xl font-bold">{food_name}</h2>
                    <p>{description}</p>
                    <div>
                        <p>Category : {food_category}</p>
                        <p>Food Origin : {food_origin}</p>
                    </div>
                    <div>
                        <p>Name : {name}</p>
                        <p>Email : {email}</p>
                    </div>
                    <div>
                        <p>Price : {price}</p>
                        <p>Quantity : {quantity}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn w-full btn-outline">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;