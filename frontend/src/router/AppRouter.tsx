import { createBrowserRouter, RouterProvider } from 'react-router';
import { MainLayout } from '../layout/MainLayout';
import Home from '../pages/Home';
import Project from '../pages/Project';
import About from '../pages/About';

const router = createBrowserRouter([
    {
        element: <MainLayout/>,
        children:[
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/projects",
                element: <Project/>,
            },
            {
                path: "about",
                element: <About/>,
            },
        ]
    }
])

export const AppRouter = () => {
    return <RouterProvider router={router}/>;
};