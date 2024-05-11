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
            
        </div >
    );
};

export default Gallery;