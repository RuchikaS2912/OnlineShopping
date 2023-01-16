import React from "react";
import { Col, Table, Row, Button } from "react-bootstrap";
import { ArchiveFill, Check, PencilSquare, X } from "react-bootstrap-icons";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import AdminSideBar from "../../components/admin/AdminSideBar";

const AdminProductsPage = () => {
  const products = [
    { name: "Panasonic", price: "$250", category: "TV" },
    { name: "Lenovo", price: "$1000", category: "Laptops" },
    { name: "GTA 10", price: "$345", category: "Games" },
  ];

  const deleteHandler = () => {
    if (window.confirm("Are you sure ?")) alert("Product deleted");
  };

  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminSideBar />
      </Col>
      <Col md={10}>
        <h1>Product List </h1>
        <LinkContainer to="/admin/create-new-product">
          <Button variant="primary" size="lg">
            Create{" "}
          </Button>
        </LinkContainer>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Edit/ Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, idx) => (
              <tr>
                <td>{idx + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>
                  <LinkContainer to="/admin/edit-product">
                    <Button className="btn-sm">
                      <PencilSquare />
                    </Button>
                  </LinkContainer>
                  {" / "}
                  <Button
                    className="btn-sm"
                    variant="danger"
                    onClick={deleteHandler}
                  >
                    {" "}
                    <ArchiveFill />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default AdminProductsPage;
