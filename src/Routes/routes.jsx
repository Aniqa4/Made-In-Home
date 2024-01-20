import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../layout/Layout";
import Login from "../pages/login/Login";
import Painting from "../pages/home/sections/categories/Painting";
import Cooking from "../pages/home/sections/categories/Cooking";
import AllCategories from "../pages/home/sections/categories/AllCategories";
import BlogDetails from "../pages/BlogDetails/BlogDetails";

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
            },
            {
                path: '/blog',
                element: <BlogDetails />
            }
        ]
    }
])

export default router