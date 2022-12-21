import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UserService from "services/UserService";
import { Button, Col, Form, Row } from "react-bootstrap";
import "components/Join.css";

function Join({ login }) {
  const initialUserState = {
    userId: "",
    userName: "",
    password: "",
  };
  const [user, setUser] = useState(initialUserState);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const onChangeJoin = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const joinApp = (e) => {
    e.preventDefault();

    UserService.add(user)
      .then((response) => {
        const success = response.data.acknowledged;

        if (success) {
          UserService.get(user)
            .then((response) => {
              login(response.data);
              navigate("/");
            })
            .catch((e) => {
              console.log(e);
            });
        } else {
          setMessage("Something wrong!");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <Form onSubmit={joinApp} className="joinForm">
      <Form.Group as={Row} className="joinInput">
        <Form.Label column sm="3">User ID</Form.Label>
        <Col sm="9">
          <Form.Control
            type="text"
            required
            name="userId"
            value={user.userId}
            onChange={onChangeJoin}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="joinInput">
        <Form.Label column sm="3">Name</Form.Label>
        <Col sm="9">
          <Form.Control
            type="text"
            required
            name="userName"
            value={user.userName}
            onChange={onChangeJoin}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="joinInput">
        <Form.Label column sm="3">Password</Form.Label>
        <Col sm="9">
          <Form.Control
            type="password"
            required
            name="password"
            value={user.password}
            onChange={onChangeJoin}
          />
        </Col>
      </Form.Group>
      <div className="errorMessage">{message}</div>
      <Button
        className="joinBtn"
        variant="outline-info"
        type="submit"
      >
        Join
      </Button>
    </Form>
  );
}

export default Join;
