import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                setError('')
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }

    return (
        <div>
            <h2>Register</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label> Photo Url</Form.Label>
                    <Form.Control name='photo' type="text" placeholder="Your Photo" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
            <p>If you have already Register then  <Link to='/login'>Login</Link> now</p>
        </div>
    );
};

export default Register;