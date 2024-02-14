import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../HomePage/HomePage";
import About from "../Pages/About";
import ContactPage from "../Pages/Contact/ContactPage";
import GalleryPage from "../Pages/Gallery/GalleryPage";


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
            {
                path: '/contact',
                element: <ContactPage></ContactPage>,
            },
            {
                path: '/gallery',
                element: <GalleryPage></GalleryPage>,
            },
        ]
    },
]);

export default Router;