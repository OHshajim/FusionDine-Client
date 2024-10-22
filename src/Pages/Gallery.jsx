import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Review from "../Components/Review";
import { GrAdd } from "react-icons/gr";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Gallery = () => {
    const { URL, user } = useContext(AuthContext)
    const [foodReviews, setFoodReviews] = useState([])
    const [loading, SetLoad] = useState(true)

    const loadData = async () => {
        try {
            const { data } = await axios(`${URL}/foodReviews`)
            console.log(data);
            setFoodReviews(data)
            SetLoad(false)

        }
        catch (error) {
            console.error(error);
        }
    }
    const handleAddGallery = async (e) => {
        SetLoad(true)

        const form = e.target;
        const user_name = form.name.value;
        const feedback = form.feedback.value;
        const image_url = form.photo.value;
        const review = { user_name, feedback, image_url }
        console.log(review);
        try {
            const { data } = await axios.post(`${URL}/foodReviews`, review)
            console.log(data);
            loadData()
            SetLoad(false)
            toast.success('🎉 Successful Added 🎉')
            form.reset()
        }
        catch (error) {
            console.error(error);
            toast.error('Error !!! Try again')
        }
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <div>
            {/* title */}
            <Helmet>
                <title>FusionDine || Food Gallery</title>
            </Helmet>

            {/* Components */}
            <div className="bg-[linear-gradient(rgba(19,19,19,0.6),rgba(19,19,19,0.6)),url('https://i.ibb.co/GcgrdDY/breadcumb-bg-1-1.jpg')] bg-no-repeat bg-cover bg-center">
                <div className="h-[40vh] flex flex-col items-center justify-center">
                    <h1 className="text-xl lg:text-5xl font-bold text-white text-center mb-5 font-rufina animate__animated animate__backInLeft">Our Food Gallery</h1>
                    <h3 className="text-sm sm:text-lg  font-semibold text-white text-center mb-3">FusionDine || Gallery</h3>
                    <img src="https://i.ibb.co/7gGBjGX/sec-title-2.png" alt="logo" />
                </div>
            </div>
            {
                loading && <div className="flex justify-center"><div className="loader" /></div>
            }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8  max-w-[1600px] mx-auto px-5  py-20">
                {
                    foodReviews.map(review => <Review key={review._id} review={review} />)
                }
            </div>
            <Link to={!user&&"/login"}><button onClick={() => document.getElementById('my_modal_1').showModal()} className=" fixed  bottom-8 right-8 btn btn-outline rounded-full font-bold text-base  border-orange-400 text-orange-400 "><span> <GrAdd /></span> Add</button></Link>

            {/* Model */}

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box ">
                    <h3 className="font-bold text-lg font-rufina">Share Your Feedback With Us </h3>
                    <div className="modal-action flex-col" method="dialog">
                        <form method="dialog" onSubmit={handleAddGallery} >
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
                            <input type="submit" value="Update" className="btn w-full bg-transparent btn-outline border-orange-400 text-orange-400 " />
                        </form>
                    </div>
                </div>
            </dialog>
        </div >
    );
};

export default Gallery;