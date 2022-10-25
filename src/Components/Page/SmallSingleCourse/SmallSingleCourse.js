import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';
import { FaEye, FaUserGraduate } from "react-icons/fa";

const SmallSingleCourse = () => {
    const data = useLoaderData()
    const { name, price, viewer, student, information, img } = data;
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
            </Card.Footer>
        </Card>
    );
};

export default SmallSingleCourse;