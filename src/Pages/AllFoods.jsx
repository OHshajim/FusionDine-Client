
const AllFoods = () => {
    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const search = form.search.value;
        console.log(search);
    }
    return (
        <div>
            <div className="bg-[linear-gradient(rgba(19,19,19,0.6),rgba(19,19,19,0.6)),url('https://i.ibb.co/GcgrdDY/breadcumb-bg-1-1.jpg')] bg-no-repeat bg-cover ">
                <div className=" h-[464px] flex items-center justify-center">
                    <h1 className="text-2xl lg:text-5xl font-bold text-white text-center">FusionDine || All Food Page</h1>
                </div>
            </div>
            <div className="my-20 max-w-[800px] mx-auto px-5">
                <form onSubmit={handleSearch}>
                    <div className="join w-full">
                        <input type="text" placeholder="Search your Favorite Food " className="input w-full input-bordered join-item rounded-full sm:px-6" name="search" />
                        <button className="btn rounded-full sm:px-8 join-item">Search</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AllFoods;