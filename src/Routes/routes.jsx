import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../layout/Layout";
import Calculator from "../pages/calculator/Calculator";


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
                path: '/calculator',
                element: <Calculator />
            }
        ]
    }
])

export default router