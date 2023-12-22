import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../layout/Layout";
import Calculator from "../pages/calculator/Calculator";
import ToDo from "../pages/toDo/ToDo";


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
            },
            {
                path: '/to-do',
                element: <ToDo />
            }
        ]
    }
])

export default router