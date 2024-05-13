import { Link } from "react-router-dom";

const FoodCart = ({ food }) => {
    const { food_name, food_image, food_category, price, _id ,quantity} = food;
    return (
        
            <div className="w-full  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"  data-aos="fade-up" data-aos-duration="1000">
                <img className="object-cover w-full h-80" src={food_image} alt="avatar" />
                <div className="p-4">
                    <div className="flex items-center justify-between">
                        <div className="py-5 ">
                            <h3 className="block text-xl font-bold  font-rufina" tabIndex="0" role="link">{food_name}</h3>
                            <p>Quantity : {quantity}</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <p className="border py-0.5 px-3 rounded-full ">${price}</p>
                            <p className="border py-0.5 px-3 rounded-full ">{food_category}</p>
                        </div>
                    </div>
                    <div className="card-actions w-full">
                        <Link to={`/singleFood/${_id}`}><button className="btn btn-outline w-full text-orange-400 border-orange-400">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;