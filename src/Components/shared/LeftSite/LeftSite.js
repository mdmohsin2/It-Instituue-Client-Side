import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSite = () => {
    const [course, setCourse] = useState([])
    useEffect(() => {
        fetch('https://assignment-10-server-indol.vercel.app/allcourse')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    return (
        <div>
            <h4 className='text-warning'>Selected Your Course</h4>
            <div>
                {
                    course.map(course => <p key={course.id}>
                        <Link to={`/singleCourse/${course.id}`}>{course.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSite;