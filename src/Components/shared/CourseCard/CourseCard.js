import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './CourseCard.css'
import { FaEye, FaUserGraduate } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { name, price, viewer, student, information, img,id } = course;
    return (
        <Card className="text-center mb-5">
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
                    {
                        information.length > 200 ?
                            <p>{information.slice(0,200) + '...'} <Link to={`/smallSingleCourse/${id}`}>Details</Link> </p>
                            :
                            <p>{information}</p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-grey">
                <div className='d-flex justify-content-between'>
                    <p>student : <FaUserGraduate></FaUserGraduate> {student}</p>
                    <p>View : <FaEye></FaEye>  {viewer}</p>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default CourseCard;