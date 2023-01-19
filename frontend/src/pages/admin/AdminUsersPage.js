import React from "react";
import { Col, Table, Row,Button } from "react-bootstrap";
import { ArchiveFill, Check, PencilSquare, X } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import AdminSideBar from "../../components/admin/AdminSideBar";
import { LinkContainer } from "react-router-bootstrap";

const AdminUsersPage = () => {

  const deleteHandler = () => {
    if (window.confirm("Are you sure ?")) alert("User deleted");
  };


  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminSideBar />
      </Col>
      <Col md={10}>
      <h1>User List</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Is Admin</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((item, idx) => (
              <tr>
                <td>{idx + 1}</td>
                <td>Mark</td>
                <td>Twain</td>
                <td>email@email.com</td>
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
                  <LinkContainer to="/admin/edit-users">
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

export default AdminUsersPage;
