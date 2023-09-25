import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconText = ({
  icon,
  size = 1,
  color = "#000",
  className = "",
  textClasName = "",
  children,
  onClick,
}) => (
  <Row className={`d-flex align-items-center ${className}`} onClick={onClick}>
    <Col xs={size} className="d-flex justify-content-center">
      <FontAwesomeIcon icon={icon} size={`${size}x`} color={color} />
    </Col>
    <Col xs={12 - size} className={textClasName}>
      {" "}
      {children}{" "}
    </Col>
  </Row>
);

export default IconText;
