import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../shared/CourseCard/CourseCard';

const Course = () => {
    const AllData = useLoaderData()
    return (
        <div>
            <h2>this is course {AllData.length}</h2>
            {
                AllData.map(data => <CourseCard
                    key={data.id}
                    course={data}
                ></CourseCard>)
            }
        </div>
    );
};

export default Course;