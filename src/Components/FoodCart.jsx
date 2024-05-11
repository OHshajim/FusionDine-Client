import { Link } from "react-router-dom";

const FoodCart = ({ food }) => {
    const { food_name, food_image, food_category, price, _id } = food;
    return (
        <div>
            <div className="w-full  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img className="object-cover w-full" src={food_image} alt="avatar" />
                <div className="p-4">
                    <div className="flex items-center justify-between">
                        <div className="py-5 ">
                            <h3 className="block text-xl font-bold text-gray-800 dark:text-white" tabIndex="0" role="link">{food_name}</h3>
                            <span className="text-sm text-gray-700 dark:text-gray-200">{food_category}</span>
                        </div>
                        <div>
                            <p className="border py-0.5 px-3 rounded-full ">{price}</p>
                        </div>
                    </div>
                    <div className="card-actions w-full">
                        <Link to={`/singleFood/${_id}`}><button className="btn btn-outline w-full">View Details</button></Link>
                </div>
            </div>
        </div>
        </div >
    );
};

export default FoodCart;