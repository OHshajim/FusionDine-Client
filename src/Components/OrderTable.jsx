
const OrderTable = ({ food, deleteFood }) => {
    const { _id, buyingDate, food_name, price, quantity, food_image
    } = food;
    // console.log(food);
    return (
        <tbody className="hover:translate-x-2 hover:-translate-y-2 hover:duration-500 hover:bg-[#4a474759]">
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

                    <div className='flex items-center gap-x-6'>
                        <button onClick={() => deleteFood(_id)} className=' transition-colors duration-200 btn btn-outline hover:border-red-500 hover:bg-black hover:text-red-500 focus:outline-none '>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                className='w-5 h-5'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                                />
                            </svg> Delete
                        </button>
                    </div>
                </td>

            </tr>

        </tbody>
    );
};

export default OrderTable;