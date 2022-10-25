import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './CourseCard.css'

const CourseCard = ({ course }) => {
    const { name, price, viewer, student, information, img } = course;
    return (
        <Card className="text-center">
            <Card.Header>
                <Image className='img' src={img}></Image>
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    <div className='d-flex justify-content-between'>
                        <p>Name : {name}</p>
                        <p>Price : {price}</p>
                    </div>
                </Card.Title>
                <Card.Text>
                    {information}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-grey">
                <div className='d-flex justify-content-between'>
                    <p>Stdent : {student}</p>
                    <p>Viewer : {viewer}</p>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default CourseCard;