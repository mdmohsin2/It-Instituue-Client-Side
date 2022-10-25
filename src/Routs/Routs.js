import { createBrowserRouter } from "react-router-dom";
import Course from "../Components/Page/Course/Course";
import Main from "../Layout/Main";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Course></Course>
            },
            {
                path: '/course',
                element: <Course></Course>
            }
        ]
    }

])