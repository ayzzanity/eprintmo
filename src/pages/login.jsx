import React from "react";
import '../layout/App.css'
import { Link, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Login = () => {
    const history = useHistory();
    const handleClick = () =>{
      history.push("/home");
    }
    const handleClickAdmin = () => {
      history.push("/admin/status")
    }

    return (
      <Form className="login-form">
        <h1 className="text-center mt-5">
          <span className="font-weight-bold">E-PRINT MO</span>
        </h1>
        <h2 className="text-center">
          LOGIN
          <span className="p-1"> | </span>
          <Link to="/signup">SIGN UP</Link>
        </h2>
        <FormGroup>
          <Label>Username</Label>
          <Input type="text" placeholder="Username"/>
          </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="Password"/>
        </FormGroup>
        <Button className="btn btn-dark btn-block" onClick={handleClick}>Login</Button>
        <div className="text-right mt-3 font-italic">
         <Link to="/forgotten">Forgot Password?</Link>
        </div>
        <br />
        <Button className="btn btn-dark btn-block" onClick={handleClickAdmin}>Admin Login</Button>
      </Form>
    );
};

export default Login;