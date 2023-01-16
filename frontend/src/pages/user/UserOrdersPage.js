import React from "react";
import { Table, Row, Col } from "react-bootstrap";
import { Check, X } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const UserOrdersPage = () => {
  return (
    <Row className="m-5">
      <Col md={12}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Date</th>
              <th>Total</th>
              <th>Delivered</th>
              <th>Order details</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((item, idx) => (
              <tr>
                <td>{idx + 1}</td>
                <td>Mark</td>
                <td>2023-01-07</td>
                <td>$370</td>
                {idx % 2 === 0 ? (
                  <td>
                    <Check color="green" />
                  </td>
                ) : (
                  <td>
                    <X color="red" />
                  </td>
                )}
                <td>
                  <Link to="/user/order-details">Go to order details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default UserOrdersPage;
