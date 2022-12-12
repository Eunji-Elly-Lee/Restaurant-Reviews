import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UserService from "services/UserService";
import { Button, Col, Form, Row } from "react-bootstrap";
import "components/Login.css";

function Login({ login }) {
  const initialUserState = {
    userId: "",
    password: "",
  };
  const [user, setUser] = useState(initialUserState);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const onChangeLogin = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginApp = (e) => {
    e.preventDefault();

    UserService.get(user)
      .then((response) => {
        const loginUser = response.data;

        if (loginUser !== null) {
          login(response.data);
          navigate("/");
        } else {
          setMessage("User Not Found!");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <Form onSubmit={loginApp} className="loginForm">
      <Form.Group as={Row} className="loginInput">
        <Form.Label column sm="3">User ID</Form.Label>
        <Col sm="9">
          <Form.Control
            type="text"
            required
            name="userId"
            value={user.userId}
            onChange={onChangeLogin}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="loginInput">
        <Form.Label column sm="3">Password</Form.Label>
        <Col sm="9">
          <Form.Control
            type="password"
            required
            name="password"
            value={user.password}
            onChange={onChangeLogin}
          />
        </Col>
      </Form.Group>
      <div className="notFoundMessage">{message}</div>
      <Button
        className="loginBtn"
        variant="outline-info"
        type="submit"
      >
        Login
      </Button>
    </Form>
  );
}

export default Login;
