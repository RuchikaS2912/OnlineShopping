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
import "../../css/AdminEditProduct.css";

const AdminEditProductsPage = () => {
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

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={1}>
          <Link to="/admin/products" className="btn btn-info my-3">
            <ArrowLeft color="black" />
          </Link>
        </Col>
        <Col md={6}>
          <h1>Edit product</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Product name</Form.Label>
              <Form.Control
                name="name"
                required
                type="text"
                defaultValue="Panasonic"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                required
                as="textarea"
                rows={3}
                defaultValue="Product description"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCountInStock">
              <Form.Label>Count in stock</Form.Label>
              <Form.Control
                name="countinstock"
                required
                type="number"
                defaultValue="2"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                name="price"
                required
                type="text"
                defaultValue="$210"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCategory">
              <Form.Label>Category</Form.Label>
              <Form.Select
                required
                name="category"
                aria-label="Default select example"
              >
                <option value="">Choose a category</option>
                <option value="1">Laptops</option>
                <option value="2">TV</option>
                <option value="3">Games</option>
              </Form.Select>
            </Form.Group>

            <Row className="mt-5">
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicAttributes">
                  <Form.Label>Choose attribute and set value</Form.Label>
                  <Form.Select
                    required
                    name="attrKey"
                    aria-label="Default select example"
                  >
                    <option value="">Choose attribute and set value</option>
                    <option value="red">color</option>
                    <option value="2">TV</option>
                    <option value="3">Games</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicAttributesValue"
                >
                  <Form.Label>Attribute Value</Form.Label>
                  <Form.Select
                    required
                    name="attrvalue"
                    aria-label="Default select example"
                  >
                    <option value="">Choose attribute value</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Table hover>
                <thead>
                  <tr>
                    <th>Attributes</th>
                    <th>Value</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>attr key</td>
                    <td>attr value</td>
                    <td>
                      <CloseButton />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicNewAttribute">
                  <Form.Label>Create new attribute</Form.Label>
                  <Form.Control
                    disabled={false}
                    name="newAttrValue"
                    placeholder="first choose or create category"
                    type="text"
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicNewAttribute">
                  <Form.Label>Attribute Value</Form.Label>
                  <Form.Control
                    disabled={false}
                    name="newAttrValue"
                    required={true}
                    placeholder="first choose or create category"
                    type="text"
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Alert variant="primary">
              After typing attribute key and value press enter on one of the
              field
            </Alert>
            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Label>Images</Form.Label>
              <Row>
                <Col style={{ position: "relative" }} xs={3}>
                  <Image src="/images/monitors-category.png" fluid />
                  <X className={onHover} />
                </Col>
                <Col style={{ position: "relative" }} xs={3}>
                  <Image src="/images/monitors-category.png" fluid />
                  <X className={onHover} />
                </Col>
                <Col style={{ position: "relative" }} xs={3}>
                  <Image src="/images/monitors-category.png" fluid />
                  <X className={onHover} />
                </Col>
              </Row>
              <Form.Control required type="file" multiple />
            </Form.Group>
          </Form>
          <Button variant="primary" type="submit" onSubmit={handleSubmit}>
            {" "}
            Update
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminEditProductsPage;
