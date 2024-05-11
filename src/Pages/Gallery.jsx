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
    return (
        <div>
            <div className="bg-[linear-gradient(rgba(19,19,19,0.6),rgba(19,19,19,0.6)),url('https://i.ibb.co/GcgrdDY/breadcumb-bg-1-1.jpg')] bg-no-repeat bg-cover bg-center">
                <div className="h-[40vh] flex flex-col items-center justify-center">
                    <h1 className="text-xl lg:text-5xl font-bold text-white text-center mb-5">Our Food Gallery</h1>
                    <h3 className="text-sm sm:text-lg  font-semibold text-white text-center mb-5">FusionDine || Gallery</h3>
                    <img src="https://i.ibb.co/7gGBjGX/sec-title-2.png" alt="logo" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  max-w-[1600px] mx-auto px-5 mb-20 my-20">
                {
                    foodReviews.map(review => <Review key={review._id} review={review} />)
                }
            </div>
            <button className=" fixed  bottom-8 right-8 btn btn-outline rounded-full font-bold text-base"><span> <GrAdd /></span> Add</button>
            <div className="relative flex justify-center">
                <button className="px-6 py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    Open Modal
                </button>

                <div
                    //             {x - show="isOpen"
                    //         x-transition:enter="transition duration-300 ease-out"
                    //         x-transition:enter-start="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
                    //         x-transition:enter-end="translate-y-0 opacity-100 sm:scale-100"
                    //         x-transition:leave="transition duration-150 ease-in"
                    //         x-transition:leave-start="translate-y-0 opacity-100 sm:scale-100"
                    // x-transition:leave-end="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"}
                    className="fixed inset-0 z-10 overflow-y-auto"
                    aria-labelledby="modal-title" role="dialog" aria-modal="true"
                >
                    <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>

                        <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                            <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
                                Add Your Opinion
                            </h3>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Your new project has been created. Invite your
                                team to collaborate on this project.
                            </p>

                            <form className="mt-4" action="#">
                                <label className="text-sm text-gray-700 dark:text-gray-200">
                                    User Name
                                </label>

                                <label className="block mt-3" >
                                    <input type="text" name="name" value=""
                                        className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                </label>

                                <label className="block mt-3">
                                    <input type="text" name="feedback" className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                </label>

                                <label className="block mt-3" >
                                    <input type="text" name="image" placeholder="Image URL" className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                </label>

                                <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                                    <button type="button" className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                                        Cancel
                                    </button>

                                    <button type="button" className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                                        Add
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Gallery;