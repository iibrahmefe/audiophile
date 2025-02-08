import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Headphones from "../pages/Headphones"


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/headphones',
        element: <Headphones/>
    },

])