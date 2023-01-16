import React from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

const CartItemComponent = () => {
  return (
    <ListGroup.Item>
      <Row>
        <Col md={2}>
          <Image
            crossOrigin="anonymous"
            src="/images/games-category.png"
            fluid
          />
        </Col>
        <Col md={2}>
          Logitech series <br /> Gaming mouse
        </Col>
        <Col md={2}>
          <b>$89</b>
        </Col>
        <Col md={3}>
          <Form.Select size="lg" aria-label="Default select example">
            <option>Quantity</option>
            {Array.from({ length: 10 }).map((_, idx) => (
              <option value={idx + 1}>{idx + 1}</option>
            ))}
          </Form.Select>
        </Col>
        <Col md={3}>
          <Button
            type="button"
            variant="secondary"
            onClick={() => window.confirm("Are you sure?")}
          >
            <Trash />
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default CartItemComponent;
