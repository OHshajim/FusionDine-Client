import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

const Registration = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { createUser } = useContext(AuthContext)

  // email and password register
  const handleRegister = async e => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value
    const photo = form.photo.value
    const email = form.email.value
    const password = form.password.value

    createUser(email, password)
      .then(result => {
        console.log(result);
        updateProfile(auth.currentUser, {
          displayName: `${name}`, photoURL: `${photo}`
        })
          .then(() => {
            console.log(auth.currentUser)
            // setUser( {...user, photoURL: photo, displayName: name })
            toast.success('🎉 Registration Successful 🎉')
            navigate(location?.state ? location.state : "/")
          })
          .catch(error => {
            console.log(error);
            toast.error(error?.message)
          })
      })
      .catch(error => {

        console.log(error);
        toast.error(error?.message)
      })
  }
  return (
    <div className='flex justify-center items-center  py-20' data-aos="fade-down" data-aos-duration="1000">
      {/* title */}
      <Helmet>
        <title>FusionDine || Registration</title>
      </Helmet>

      {/* Components */}
      <div className='flex w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-2xl   lg:max-w-4xl '>
        <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
          <div className='flex items-center justify-center mt-4'>

            <p className='mt-3 text-2xl text-center text-gray-400 font-rufina animate__animated animate__backInLeft'>
              Welcome back!
            </p>

          </div>
          <form onSubmit={handleRegister}>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='name'
              >
                Username
              </label>
              <input
                required
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
                required
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
                required
                placeholder="Enter Your Email"
                id='LoggingEmailAddress'
                autoComplete='email'
                name='email'
                className='block w-full px-4 py-2 text-gray-400  border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='email'
              />
            </div>

            <div className='mt-4'>
              <div className='flex justify-between'>
                <label
                  className='block mb-2 text-sm font-medium text-gray-600 '
                  htmlFor='loggingPassword'
                >
                  Password
                </label>
              </div>

              <input
                required
                placeholder="Enter Your Password"
                id='loggingPassword'
                autoComplete='current-password'
                name='password'
                className='block w-full px-4 py-2 text-gray-400  border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='password'
              />
            </div>
            <div className='mt-6'>
              <button
                type='submit'
                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-orange-400 border-orange-400 capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
              >
                Registration
              </button>
            </div>
          </form>

          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b  md:w-1/4'></span>

            <Link
              to='/login'
              className='text-xs text-gray-500 uppercase  hover:underline'
            >
              or sign in
            </Link>

            <span className='w-1/5 border-b  md:w-1/4'></span>
          </div>
        </div>
        <div
          className='hidden bg-cover bg-center lg:block lg:w-1/2'
          style={{
              backgroundImage: `url('https://i.ibb.co/Xb3LGZ3/20943830.jpg')`,
          }}
        ></div>
      </div>
    </div>
  )
};

export default Registration;