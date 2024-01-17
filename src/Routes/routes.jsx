import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../layout/Layout";
import Login from "../pages/login/Login";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])

export default router