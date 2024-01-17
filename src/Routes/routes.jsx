import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../layout/Layout";
import Login from "../pages/login/Login";
import Cooking from "../pages/home/sections/Cooking";
import AllCategories from "../pages/home/sections/AllCategories";
import Painting from "../pages/home/sections/Painting";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
                children: [
                    {
                        path: '/',
                        element: <AllCategories />
                    },
                    {
                        path: '/cooking',
                        element: <Cooking />
                    },
                    {
                        path: '/painting',
                        element: <Painting />
                    },
                    {
                        path: '/gardening',
                        element: <Painting />
                    },
                    {
                        path: '/sewing',
                        element: <Painting />
                    },
                    {
                        path: '/crafting',
                        element: <Painting />
                    },
                ]
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])

export default router