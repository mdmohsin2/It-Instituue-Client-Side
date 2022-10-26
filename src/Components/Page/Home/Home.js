import React from 'react';
import './Home.css'
import Card from 'react-bootstrap/Card';
import banner from '../../../assets/banner.jpg'

const Home = () => {
    return (
        <div>
            <h2 className='text-success text-center mb-4'>Wellcome To It-Institute</h2>
            <Card >
                <Card.Img variant="top" src={banner} />
                <Card.Body>
                    <Card.Title className='text-warning'>E-Lerning</Card.Title>
                    <Card.Text>
                        In today's era IT sector is a popular medium, in order to be smart with today's era it is necessary to know details about internet
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Home;