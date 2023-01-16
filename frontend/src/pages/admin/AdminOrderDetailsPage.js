import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Alert,
  ListGroup,
  Button,
} from "react-bootstrap";
import CartItemComponent from "../../components/CartItemComponent";

const AdminOrderDetailsPage = () => {
  const paymentMethods = [
    "Paypal",
    "Cash on delivery",
    "Google pay",
    "Phonepe",
    "Debit/Credit card",
  ];

  return (
    <Container fluid>
      <Row className="mt-4">
        <h1>Order Details</h1>
        <Col md={8}>
          <br />
          <Row>
            <Col md={6}>
              <h2>Shipping</h2>
              <b>Name:</b> John Doe <br />
              <b>Address:</b> 21st Cross, california street , New york <br />
              <b>Phone number:</b> 9876543210 <br />
            </Col>
            <Col md={6}>
              <h2>Payment method</h2>
              <Form.Select size="lg" aria-label="Default select example">
                <option>Payment method</option>
                {paymentMethods.map((item, idx) => (
                  <option value={idx + 1}>{item}</option>
                ))}
              </Form.Select>
            </Col>
            <Row>
              <Col>
                <Alert className="mt-3" variant="danger">
                  Not Delivered
                </Alert>
              </Col>
              <Col>
                <Alert className="mt-3" variant="success">
                  Paid on 2023-01-07
                </Alert>
              </Col>
            </Row>
          </Row>
          <br />
          <h2>Order Details</h2>
          <ListGroup variant="flush">
            {Array.from({ length: 3 }).map((item, idx) => (
              <CartItemComponent />
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Order summary</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Items price(after tax) :<span className="fw-bold">$892</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Shipping :<span className="fw-bold">included</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Tax :<span className="fw-bold">included</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Total price :<span className="fw-bold">$904</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-grid gap-2">
                <Button size="lg" variant="primary" type="button">
                  Mark as delivered
                </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminOrderDetailsPage;
