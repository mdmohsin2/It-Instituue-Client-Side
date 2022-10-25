import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSite = () => {
    const [course, setCourse] = useState([])
    useEffect( ()=>{
        fetch('http://localhost:5000/allcourse')
        .then(res=> res.json())
        .then(data=>setCourse(data))
    },[])
    return (
        <div>
            <h2>All Course {course.length}</h2>
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