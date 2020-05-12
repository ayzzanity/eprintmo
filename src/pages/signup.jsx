import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const SignUp = () => {
    return (
      <Form className="login-form">
        <h1 className="text-center mt-5">
            <span className="font-weight-bold">E-PRINT MO</span>
        </h1>
        <h2 className="text-center">
            <Link to="/login">LOGIN</Link> 
            <span className="p-1"> | </span>
            SIGN UP
        </h2>
        
        <FormGroup>
          <Label>Username</Label>
          <Input type="text" placeholder="Username"/>
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Email"/>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="Password"/>
        </FormGroup>
        <FormGroup>
          <Label>Repeat Password</Label>
          <Input type="password" placeholder="Repeat Password"/>
        </FormGroup>
        <Button className="btn btn-dark btn-block">Sign Up</Button>
        <div className="text-right mt-3 font-italic">
        <Link to="/login">Already have an account?</Link>
      </div>
    </Form>
    );
};

export default SignUp;