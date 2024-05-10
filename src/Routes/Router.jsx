import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element:<Login/>,
            },
            {
                path: "/signUp",
                element: <SignUp/>,
            },
        ]
    },
]);


export default Router;