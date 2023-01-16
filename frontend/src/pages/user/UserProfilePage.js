import React, { useState } from "react";
import { Row, Col, Form, Container, Button, Alert } from "react-bootstrap";

const UserProfilePage = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log(form);
    setValidated(true);
  };

  const onChangeOfPassword = () => {
    const password = document.querySelector("input[name=password]");
    const confirmpassword = document.querySelector(
      "input[name=confirmpassword]"
    );
    if (confirmpassword.value === password.value) {
      confirmpassword.setCustomValidity("");
    } else {
      confirmpassword.setCustomValidity("Passwords dont match");
    }
    console.log(password.value);
    console.log(confirmpassword.value);
  };

  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col md={6}>
          <h1>Profile</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your name"
                defaultValue="John"
                name="firstname"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your name"
                defaultValue="Doe"
                name="lastname"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                disabled
                value="johndoe@gmail.com (to add a new email delete the account)"
                name="email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                name="phonenumber"
                defaultValue=""
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your street name and house name"
                name="address"
                defaultValue=""
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your country"
                name="country"
                defaultValue=""
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicState">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="Enter your state" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCity">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter your city" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicZip">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control type="text" placeholder="Enter your zipcode" />
            </Form.Group>

            <Button type="submit" variant="primary">
              Update
            </Button>
            <Alert show={true} variant="danger">
              User with the email already exists!
            </Alert>
            <Alert show={true} variant="success">
              User data updated!
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfilePage;
