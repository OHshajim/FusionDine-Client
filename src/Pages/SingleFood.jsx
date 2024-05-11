import { useLoaderData } from "react-router-dom";

const SingleFood = () => {
    const foodData = useLoaderData()
    console.log(foodData);
    return (
        <div>

        </div>
    );
};

export default SingleFood;