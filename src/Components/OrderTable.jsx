import { FaDeleteLeft } from "react-icons/fa6";

const OrderTable = ({ food, deleteFood }) => {
    const { _id, buyingDate, food_name, price, quantity ,food_image
    } = food;
    console.log(food);
    return (
        <tbody >
            <tr >
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask rounded-xl sm:w-36 sm:h-28 w-20 h-20">
                                <img src={food_image} alt={food_name} />
                            </div>
                        </div>

                    </div>
                </td>
                <td>
                    <div className="font-bold text-lg">{food_name}</div>
                </td>
                <td className="text-sm font-semibold">{quantity}</td>

                <td className="text-sm font-semibold">{price}</td>
                <td className="text-sm font-semibold">{buyingDate}</td>
                <td>
                    <button onClick={() => deleteFood(_id)} className="btn  btn-outline "><FaDeleteLeft className="text-2xl" /></button>
                </td>

            </tr>

        </tbody>
    );
};

export default OrderTable;