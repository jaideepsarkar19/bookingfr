import React from "react";
import { Row, Col, Button } from "reactstrap";

export default props => {
  return (
    <div>
      <Row noGutters className="text-center align-items-center pizza-cta">
        <Col>
          <p className="looking-for-pizza">
            If you're looking for Hall 
            <i className="fas fa-pizza-slice pizza-slice"></i>
          </p>
          <Button
            color="none"
            className="book-room-btn"
            onClick={_ => {
              props.setPage(1);
            }}
          >
            Book a Room
          </Button>
        </Col>
      </Row>
      <Row noGutters className="text-center big-img-container">
        <Col>
          <img
            src={require("../images/Hall.jpg")}
            alt="cafe"
            className="big-img"
          />
        </Col>
      </Row>
    </div>
  );
};
