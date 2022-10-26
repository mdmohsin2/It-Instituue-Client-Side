import React from 'react';
import { useLoaderData } from 'react-router-dom';
import  './CheckOut.css'

const CheckOut = () => {
    const data = useLoaderData()
    return (
        <div className='text-center pt-4 bgs'>
            <h2 className='text-primary'>Check-Out Page</h2>
            <h3 className='mt-4 text-success'>Name: {data.name}</h3>
        </div>
    );
};

export default CheckOut;