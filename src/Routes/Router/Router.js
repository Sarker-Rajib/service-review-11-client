import { createBrowserRouter } from "react-router-dom";
import DisplayService from "../../Components/serviceCard/DisplayService";
import Main from "../../Layouts/Main/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import EditReview from "../../Pages/EditReview/EditReview";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Register from "../../Pages/Register/Register";
import Services from "../../Pages/Services/Services";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://assignment-11-server-dusky.vercel.app/services3')
            },
            {
                path: "/services",
                element: <Services></Services>,
            },
            {
                path: "/services/:id",
                element: <DisplayService></DisplayService>,
                loader: ({ params }) => fetch(`https://assignment-11-server-dusky.vercel.app/services/${params.id}`)
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/add-service",
                element:
                    <PrivateRoute>
                        <AddService></AddService>
                    </PrivateRoute>
            },
            {
                path: "/my-reviews",
                element:
                    <PrivateRoute>
                        <MyReviews></MyReviews>
                    </PrivateRoute>
            },
            {
                path: "/my-reviews/:id",
                loader: ({ params }) => fetch(`https://assignment-11-server-dusky.vercel.app/reviews/${params.id}`),
                element:
                    <PrivateRoute>
                        <EditReview></EditReview>
                    </PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ]
    },
    {
        path: "*",
        element: <Error></Error>
    }
])