import React, { Fragment } from "react";
import { Rating } from "react-simple-star-rating";
import { Form } from "react-bootstrap";

const RatingFilterComponent = () => {
  return (
    <div>
      <span className="fw-bold">Rating</span>
      {Array.from({ length: 5 }).map((_, idx) => (
        <Fragment key={idx}>
          <Form.Check type="checkbox" id={`check-api-{idx}`}>
            <Form.Check.Input type="checkbox" isValid />
            <Form.Check.Label style={{ cursor: "pointer" }}>
              <Rating readonly size={20} initialValue={5 - idx} />
            </Form.Check.Label>
          </Form.Check>
        </Fragment>
      ))}
    </div>
  );
};

export default RatingFilterComponent;
