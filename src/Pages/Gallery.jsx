import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Review from "../Components/Review";
import { GrAdd } from "react-icons/gr";

const Gallery = () => {
    const { URL } = useContext(AuthContext)
    const [foodReviews, setFoodReviews] = useState([])
    useEffect(() => {
        const loadData = async () => {
            try {
                const { data } = await axios(`${URL}/foodReviews`)
                console.log(data);
                setFoodReviews(data)
            }
            catch (error) {
                console.error(error);
            }
        }
        loadData()
    }, [])

    // const handleAddGallery = async (e) => {
    //     e.preventDefault();
    //     // const form = e.target;
    //     // const user_name = form.name.value;
    //     // const feedback = form.feedback.value;
    //     // const image_url = form.photo.value;
    //     // const review = { user_name, feedback, image_url }
    //     // try {
    //     //     const { data } = await axios.post(`${URL}/foodReviews`, review)
    //     //     console.log(data);
    //     //     // setFoodReviews(...foodReviews, review)
    //     // }
    //     // catch (error) {
    //     //     console.error(error);
    //     // }
    // }
    return (
        <div>
            <div className="bg-[linear-gradient(rgba(19,19,19,0.6),rgba(19,19,19,0.6)),url('https://i.ibb.co/GcgrdDY/breadcumb-bg-1-1.jpg')] bg-no-repeat bg-cover bg-center">
                <div className="h-[40vh] flex flex-col items-center justify-center">
                    <h1 className="text-xl lg:text-5xl font-bold text-white text-center mb-5">Our Food Gallery</h1>
                    <h3 className="text-sm sm:text-lg  font-semibold text-white text-center mb-5">FusionDine || Gallery</h3>
                    <img src="https://i.ibb.co/7gGBjGX/sec-title-2.png" alt="logo" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8  max-w-[1600px] mx-auto px-5 mb-20 my-20">
                {
                    foodReviews.map(review => <Review key={review._id} review={review} />)
                }
            </div>
            <button onClick={() => document.getElementById('my_modal_5').showModal()} className=" fixed  bottom-8 right-8 btn btn-outline rounded-full font-bold text-base"><span> <GrAdd /></span> Add</button>

            {/* Model */}
            {/* <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Add your Feedback</h3>
                    <p className="py-4">Share your Opinions with us !</p>
                    <div className="modal-action flex-col">
                        <form method="dialog" onSubmit={handleAddGallery}>
                            <div>
                                <label className="text-sm text-gray-700 dark:text-gray-200">
                                    User Name
                                </label>

                                <label className="block mb-3" >
                                    <input type="text" name="name" value={user?.displayName} className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                </label>

                                <label className="text-sm text-gray-700 dark:text-gray-200">
                                    Feedback
                                </label>
                                <label className="block mb-3" >
                                    <textarea type="text" name="feedback" placeholder="Give us your Feedback" className=" w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                </label>

                                <label className="text-sm text-gray-700 dark:text-gray-200">
                                    Photo URL
                                </label>
                                <label className="block mb-3">
                                    <input type="text" name="photo" placeholder="Photo URL" required className=" w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                </label>
                            </div>
                            <input type="submit" value="Update" className="btn w-full bg-transparent btn-outline border-cyan-500 text-cyan-500 " />
                        </form>
                    </div>
                </div>
            </dialog> */}
        </div >
    );
};

export default Gallery;