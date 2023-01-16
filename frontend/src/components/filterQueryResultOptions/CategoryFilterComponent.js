import { Form } from "react-bootstrap";
import "../../css/CategoryFilter.css";

const CategoryFilterComponent = () => {
  return (
    <div>
      Category <span className="fw-bold"></span>
      <Form>
        {Array.from({ length: 5 }).map((_, idx) => (
          <div key={idx} className="">
            <Form.Check type="checkbox" id={`check-api2-${idx}`}>
              <Form.Check.Input type="checkbox" isValid />
              <Form.Check.Label className="form-check-label">
                Category - {idx}
              </Form.Check.Label>
            </Form.Check>
          </div>
        ))}
      </Form>
    </div>
  );
};

export default CategoryFilterComponent;
