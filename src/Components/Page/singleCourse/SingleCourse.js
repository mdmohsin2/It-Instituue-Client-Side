import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCourse = () => {
    const datas = useLoaderData();
    console.log(datas);
    return (
        <div>
            <h2>this is single course {datas.length}</h2>
        </div>
    );
};

export default SingleCourse;