import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Page/Blog/Blog";
import Course from "../Components/Page/Course/Course";
import FAQ from "../Components/Page/FAQ/FAQ";
import SingleCourse from "../Components/Page/singleCourse/SingleCourse";
import SmallSingleCourse from "../Components/Page/SmallSingleCourse/SmallSingleCourse";
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
            },
            {
                path: '/smallSingleCourse/:id',
                element: <SmallSingleCourse></SmallSingleCourse>,
                loader: ({params}) => fetch(`http://localhost:5000/smallSingleCourse/${params.id}`)
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }

])