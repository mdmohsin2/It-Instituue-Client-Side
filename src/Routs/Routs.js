import { createBrowserRouter } from "react-router-dom";
import Course from "../Components/Page/Course/Course";
import SingleCourse from "../Components/Page/singleCourse/SingleCourse";
import Main from "../Layout/Main";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Course></Course>,
                loader: () => fetch(`http://localhost:5000/alls`)
            },
            {
                path: '/singleCourse/:id',
                element: <SingleCourse></SingleCourse>,
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
            }
        ]
    }

])