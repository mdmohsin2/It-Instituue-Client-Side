import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';
import './SmallSingleCourse.css'
import { FaEye, FaUserGraduate,FaArrowRight } from "react-icons/fa";

const SmallSingleCourse = () => {
    const data = useLoaderData()
    const {id, name, price, viewer, student, information, img } = data;
    return (
        <Card className="text-center">
            <Card.Header>
                <Image className='img' src={img}></Image>
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    <div className='d-flex justify-content-between'>
                        <p>Name : {name}</p>
                        <p>Price : ${price}</p>
                    </div>
                </Card.Title>
                <Card.Text>
                    {information}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-success">
                <div className='d-flex justify-content-between'>
                    <p>student : <FaUserGraduate></FaUserGraduate> {student}</p>
                    <p>View : <FaEye></FaEye>  {viewer}</p>
                </div>
                <div>
                    <button className='btn btn-success'><Link className='checkout' to={`/checkout/smallSingleCourse/${id}`}>Please Check out <FaArrowRight></FaArrowRight></Link></button>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default SmallSingleCourse;