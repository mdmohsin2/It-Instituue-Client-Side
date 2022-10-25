import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../shared/CourseCard/CourseCard';

const SingleCourse = () => {
    const allData = useLoaderData();
    return (
        <div>
            <h2 className='mb-5 text-success'> Course Category {allData.length}</h2>
            {
                allData.map(data => <CourseCard
                    key={data.id}
                    course={data}
                ></CourseCard>)
            }
        </div>
    );
};

export default SingleCourse;