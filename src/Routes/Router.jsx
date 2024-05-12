import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import AllFoods from "../Pages/AllFoods";
import SingleFood from "../Pages/SingleFood";
import FoodPurchase from "../Pages/FoodPurchase";
import Gallery from "../Pages/Gallery";
import AddFood from "../Pages/AddFood";
import MyAddedFoods from "../Pages/MyAddedFoods";
import MyOrder from "../Pages/MyOrder";
import PrivetRoute from "./PrivetRoute";
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
                path: "/gallery",
                element: <Gallery />,
            },
            {
                path: "/addFood",
                element: <PrivetRoute><AddFood /></PrivetRoute>,
            },
            {
                path: "/myAddedFoods",
                element: <PrivetRoute><MyAddedFoods /></PrivetRoute>,
            },
            {
                path: "/myPurchaseFoods",
                element: <PrivetRoute><MyOrder /></PrivetRoute>,
            },
            {
                path: "/singleFood/:id",
                element: <SingleFood />,
                loader: ({ params }) => fetch(`http://localhost:5000/singleFood/${params.id}`)
            },
            {
                path: "/foodPurchase/:id",
                element: <PrivetRoute><FoodPurchase /></PrivetRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/singleFood/${params.id}`)
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