
const Review = ({ review }) => {
    const { image_url, user_name, feedback } = review;
    return (
        <div>
            <div className="card w-full shadow-2xl group rounded-xl">
                <figure><img src={image_url} alt="review" className="rounded-xl w-96  h-72"/></figure>
                <div className="card-body bottom-0 h-full w-full rounded-xl absolute bg-[linear-gradient(rgba(19,19,19,0.6),rgba(19,19,19,0.6))] invisible group-hover:visible ">
                    <h2 className="card-title justify-center w-full text-white font-bold ">{user_name}</h2>
                    <p className="text-center">{feedback}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;