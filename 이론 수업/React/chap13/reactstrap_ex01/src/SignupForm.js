import React, { Component } from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignupForm.css';

class LoginForm extends Component {
    render() {
        return (
            <Form className='login-form'>
                <h1 className='text-center'>
                    carHistory.com
                </h1>
                <h3 className='text-center'>welcome to carhistory</h3>
                <FormGroup className='mt-5'>
                    <Label>Email</Label>
                    <Input type="email" placeholder="E-mail"></Input>
                    <Label className='mt-3'>Name</Label>
                    <Input type="name" placeholder="Name"></Input>
                    <Label className='mt-3'>Password</Label>
                    <Input type="password" placeholder="Password"></Input>
                </FormGroup>
                <Button className='btn btn-lg btn-dark btn-block'>회원가입</Button>
            </Form>
        );
    }
}

export default LoginForm;