import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className=" flex flex-col items-center justify-center">
        <img src="https://i.ibb.co/2PwZ1Rq/404.gif" alt="Error" className="  max-h-[80vh] mt-20" />
        {/* <p className="text-red-600 font-bold mt-5">{error.error.message}</p> */}
        {
            error.status === 404 && <div className=" flex flex-col items-center ">
                <Link to={'/'}><button className="btn bg-[#25177790] my-2 text-white font-bold text-lg hover:bg-black"><IoMdArrowRoundBack />Back to Home</button></Link>
            </div >
        }
    </div >
    );
};

export default ErrorPage;