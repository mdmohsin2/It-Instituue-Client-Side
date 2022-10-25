import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Components/shared/Header/Header';
import LeftSite from '../Components/shared/LeftSite/LeftSite';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col sm="3" className='d-none d-lg-block'>
                        <LeftSite></LeftSite>
                    </Col>
                    <Col sm="9">
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;