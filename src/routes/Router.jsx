import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../HomePage/HomePage";
import About from "../Pages/About";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/about',
                element: <About></About>
            },
        ]
    },
]);

export default Router;