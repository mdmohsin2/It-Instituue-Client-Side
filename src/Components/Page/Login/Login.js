import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle, } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';

const Login = () => {
    const { providerLogin, providerLoginGithub, signIn } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate();
    
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

 
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

    // handleSignIn setup area
    const handleSignIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        signIn(email, password)

        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate(from, { replace: true })
        })
        .catch(error=>{
            console.error(error);
            setError(error.message)
        })
    }



    return (
        <div>
            <h2>Login</h2>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
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