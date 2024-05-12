import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import {  useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
const FoodPurchase = () => {
    const navigate = useNavigate()
    const [startDate, setStartDate] = useState(new Date());
    const { user, URL } = useContext(AuthContext)
    const foodData = useLoaderData()
    // console.log(foodData);
    const { food_name, price, food_image, add_by, quantity, _id, purchase_number } = foodData;
    const quantityNumber = quantity;
    const handlePurchase = async (e) => {
        e.preventDefault()
        const form = e.target;
        const food_name = form.foodName.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const buyerName = form.buyerName.value;
        const buyerEmail = form.buyerEmail.value;
        const buyingDate = form.buyingDate.value;
        const PurchasedFood = { food_name, price, quantity, buyerEmail, buyerName, buyingDate, food_image }
        // console.log(PurchasedFood);
        if (add_by.email === user.email) {
            return toast.error('You can not purchase your own item');
        }
        if (quantity > quantityNumber) {
            return toast.error('This Number of quantity is not available !!!');
        }
        const availableQuantity = quantityNumber - quantity;
        const total = parseInt(quantity) + parseInt(purchase_number);
        // try {
        //     const { data } = await axios.post(`${URL}/purchaseFood`, PurchasedFood)
        //     console.log(data);
        //     
        // }
        // catch (error) {
        //     console.error(error);
        //     toast.error('Error !!! Try again')
        // }
        axios.post(`${URL}/purchaseFood`, PurchasedFood)
            .then(res => {
                console.log(res.data);
                const count = { ...PurchasedFood, availableQuantity: availableQuantity, total: total }
                axios.put(`${URL}/updateQuantity/${_id}`, count)
                    .then(res => {
                        console.log(res.data);
                        toast.success('This food is  Successfully purchased  🌟')
                        navigate('/')
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div className="py-20">
            {/* title */}
            <Helmet>
                <title>FusionDine || Purchase Food</title>
            </Helmet>

            {/* Components */}
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800" data-aos="fade-up" data-aos-duration="1000">
                <h2 className=" text-2xl sm:text-4xl font-semibold text-center font-rufina mb-5 animate__animated animate__backInRight">Purchase Food</h2>

                <form onSubmit={handlePurchase}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200 " >Food Name</label>
                            <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" name="foodName" value={food_name} />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Price</label>
                            <input type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                name="price"
                                value={price} />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Quantity</label>
                            <input
                                type="number"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                name="quantity"
                                defaultValue={1}
                                min={1}
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Buyer Name</label>
                            <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                name="buyerName"
                                value={user?.displayName}
                            />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Buyer Email</label>
                            <input type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                name="buyerEmail"
                                value={user?.email}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-700 dark:text-gray-200" >Buying Date</label>

                            <DatePicker
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" name="buyingDate" selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="dd/MM/yyyy" />
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className=" btn-outline btn   duration-300  text-orange-400 border-orange-400">Purchase</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default FoodPurchase;