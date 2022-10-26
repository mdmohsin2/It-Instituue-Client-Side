import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.jpg'
import { AuthContext } from '../../../Context/AuthProvider';
import LeftSite from '../LeftSite/LeftSite';
import './Header.css'
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <Navbar className='mb-4 header' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link className='text-logo' to='/'><Image className='logo' src={logo}></Image>
                        It Institute</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link> <Link to='/'>Course</Link> </Nav.Link>
                        <Nav.Link> <Link to='/faq'>FAQ</Link> </Nav.Link>
                        <Nav.Link> <Link to='blog'>Blog</Link> </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">
                            {
                                user?.uid ?
                                    <>
                                        <span className='me-2'>{user?.displayName}</span>
                                        <button className='btn-sm bg-info'>Log out</button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'>Login</Link>
                                        <Link to='/register'>Register</Link>
                                    </>

                            }


                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {
                                user?.photoURL ?
                                    <Image style={{ height: '30px' }} roundedCircle src={user.photoURL}></Image>
                                    :
                                    <FaUser></FaUser>

                            }
                        </Nav.Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSite></LeftSite>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;