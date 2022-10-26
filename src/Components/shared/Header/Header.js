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
import './Header.scss'
import { FaUser } from 'react-icons/fa';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';



const Header = () => {
    const { user, logOut } = useContext(AuthContext)



    // handle Logout setup area
    const handleLogout = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.error(error);
            })
    }


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
                        <Nav.Link> <Link to='/'>Home</Link> </Nav.Link>
                        <Nav.Link> <Link to='/course'>Course</Link> </Nav.Link>
                        <Nav.Link> <Link to='/faq'>FAQ</Link> </Nav.Link>
                        <Nav.Link> <Link to='blog'>Blog</Link> </Nav.Link>
                        <>
                            <div className="box d-none d-md-block">
                                <input className="type-checkbox" id="toogle" type="checkbox" name="name" />
                                <label className="estado" for="toogle">
                                    <span className="aprobado">Dark</span>
                                    <span className="desaprobado">Light</span>
                                </label>
                            </div>
                        </>
                    </Nav>

                    <Nav>
                        <Nav.Link href="#deets">
                            {
                                user?.uid ?
                                    <>
                                        <button onClick={handleLogout} className='btn-sm bg-info'>Log out</button>
                                    </>
                                    :
                                    <>
                                        <Link className='me-3' to='/login'>Login</Link>
                                        <Link to='/register'>Register</Link>
                                    </>

                            }


                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {
                                user?.photoURL ?
                                    <>
                                        {['bottom'].map((placement) => (
                                            <OverlayTrigger
                                                key={placement}
                                                placement={placement}
                                                overlay={
                                                    <Tooltip id={`tooltip-${placement}`}>
                                                        {user?.displayName}
                                                    </Tooltip>
                                                }
                                            >

                                                <Image style={{ height: '30px' }} roundedCircle src={user.photoURL}></Image>

                                            </OverlayTrigger>
                                        ))}

                                    </>
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

