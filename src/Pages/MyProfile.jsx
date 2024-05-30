import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

const MyProfile = () => {
    const { user, profileUpdate, URL } = useContext(AuthContext)
    const handleUpdate = (e) => {
        // e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const photo = form.photo.value
        profileUpdate(name, photo)
            .then(() => {
                const UpdateUser = { name, photo, email: user?.email }
                console.log("Update User : ", UpdateUser);
                // setUser( {...user, photoURL: photo, displayName: name })

                axios.patch(`${URL}/users`, UpdateUser)
                    .then(res => {
                        console.log(res);
                        if (res.modifiedCount > 0) {
                            toast.success('🎉 update Successful 🎉')
                        }
                    })
                    .catch(err => { console.log(err); })
            })
            .catch(error => {
                console.log(error);
                toast.error(error?.message)

            })
    }
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row w-screen gap-10 my-20">
                    <div className="w-1/2">
                        <img src={user?.photoURL} className=" rounded-full border-8 border-orange-500 shadow-2xl w-full max-w-md" alt={user?.displayName} />
                    </div>
                    <div className="lg:w-1/2 w-full px-5">
                        <form onSubmit={handleUpdate}>
                            <label
                                className='block mb-2 text-4xl font-semibold  text-center'
                            >User Profile  </label>
                            <div className='mt-4'>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='name'
                                >
                                    Username
                                </label>
                                <input
                                    defaultValue={user?.displayName}
                                    placeholder="Enter Your name"
                                    id='name'
                                    autoComplete='name'
                                    name='name'
                                    className='block w-full px-4 py-2 text-gray-400  border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                    type='text'
                                />
                            </div>
                            <div className='mt-4'>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='photo'
                                >
                                    Photo URL
                                </label>
                                <input
                                    defaultValue={user?.photoURL}
                                    placeholder="Enter Your photo"
                                    id='photo'
                                    autoComplete='photo'
                                    name='photo'
                                    className='block w-full px-4 py-2 text-gray-400  border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                    type='text'
                                />
                            </div>
                            <div className='mt-4'>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='LoggingEmailAddress'
                                >
                                    Email Address
                                </label>
                                <input
                                    value={user?.email}
                                    placeholder="Enter Your Email"
                                    id='LoggingEmailAddress'
                                    autoComplete='email'
                                    name='email'
                                    className='block w-full px-4 py-2 text-gray-400  border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                    type='email'
                                />
                            </div>


                            <div className='mt-6'>
                                <button
                                    type='submit'
                                    className='w-full px-6 py-3 text-sm font-medium tracking-wide text-orange-400 border-orange-400 capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;