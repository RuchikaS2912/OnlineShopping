import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Form,
  Button,
  CloseButton,
  Table,
  Alert,
  Image,
} from "react-bootstrap";
import { ArrowLeft, X } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const AdminEditUsersPage = () => {

  const [validated, setValidated] = useState(false);

  const onHover = {
    cursor: "pointer",
    position: "absolute",
    left: "5px",
    top: "-10px",
    transform: "scale(2.7)",
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log(form);
    setValidated(true);
  };

  return(<Container>
    <Row className="justify-content-md-center mt-5">
      <Col md={1}>
        <Link to="/admin/users" className="btn btn-info my-3">
          <ArrowLeft color="black" />
        </Link>
      </Col>
      <Col md={6}>
        <h1>Edit User</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="firstname"
              required
              type="text"
              defaultValue="John"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lastname"
              required
              type="text"
              defaultValue="Harry"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Id</Form.Label>
            <Form.Control
              name="email"
              required
              type="email"
              defaultValue="email@email.com"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              name="isAdmin"
              type="checkbox"
              label="Is Admin"
            />
          </Form.Group>
          </Form>
        <Button variant="primary" type="submit" onSubmit={handleSubmit}>
          {" "}
          Update
        </Button>
      </Col>

    </Row>
  </Container>);
};

export default AdminEditUsersPage;
