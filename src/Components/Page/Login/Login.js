import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle, } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { providerLogin, providerLoginGithub } = useContext(AuthContext)


    // googleAuth and githubAuth provider setup area
    const googleProvider = new GoogleAuthProvider()
    const hithubProvider = new GithubAuthProvider()


    // handleGoogleSignIn setup area
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    // handleGithubSignIn setup area
    const handleGithubSignIn = () => {
        providerLoginGithub(hithubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }



    return (
        <div>
            <h2>Login</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <ButtonGroup className='mt-5 d-flex' vertical>
                <Button onClick={handleGoogleSignIn} className='mb-3' variant="outline-primary"><FaGoogle></FaGoogle> Login with google</Button>
                <Button onClick={handleGithubSignIn} variant="outline-dark"><FaGithub></FaGithub> Login with github</Button>
            </ButtonGroup>
            <p>If you are new please. <Link to='/register'>Register</Link> first</p>
        </div>
    );
};

export default Login;