import { Card, Button, Row, Col } from "react-bootstrap";
import "../css/ProductForList.css";
import { Rating } from "react-simple-star-rating";
import { LinkContainer } from "react-router-bootstrap";

const ProductForListComponent = (props) => {
  const { images, idx } = props;
  return (
    <Card className="card">
      <Row>
        <Col lg={5}>
          <Card.Img
            variant="top"
            src={"/images/" + images[idx] + "-category.png"}
          />
        </Col>
        <Col lg={7}>
          <Card.Body>
            <Card.Title>Product Name</Card.Title>
            <Card.Text>Product Title</Card.Text>
            <Card.Text>
              <Rating readonly size={20} initialValue={5} /> (1)
            </Card.Text>
            <Card.Text className="h4">$124 </Card.Text>
            <LinkContainer to="/product-details">
              <Button variant="danger">See product</Button>
            </LinkContainer>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductForListComponent;
