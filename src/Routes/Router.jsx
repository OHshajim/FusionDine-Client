import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import AllFoods from "../Pages/AllFoods";
import SingleFood from "../Pages/SingleFood";
import FoodPurchase from "../Pages/FoodPurchase";
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
                path: "/allFoods",
                element: <AllFoods />,
            },
            {
                path: "/singleFood/:id",
                element: <SingleFood />,
                loader: ({ params }) => fetch(`http://localhost:5000/singleFood/${params.id}`)
            },
            {
                path: "/foodPurchase",
                element: <FoodPurchase />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/registration",
                element: <Registration />,
            },
        ]
    },
]);


export default Router;