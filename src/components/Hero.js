import React from "react";
import { Row, Col, Card, Button, Image } from "react-bootstrap";
import logo from "../assets/LogoSite.png";
import logoMobile from "../assets/LogoMobile.png";
import "./Hero.scss";

const Hero = ({ onClick }) => (
  <Card className="text-center text-light hero">
    <Row className="my-lg-5">
      <Col lg className="text-lg-end mt-5">
        <Image className="d-lg-none" src={logoMobile} />
        <Image className="d-none d-lg-inline-block" src={logo} />
      </Col>
      <Col lg className="text-lg-start my-5">
        <p>Pague suas conta pelo nosso APP</p>
        <Button variant="outline-light" onClick={onClick}>
          Abra sua conta
        </Button>
      </Col>
    </Row>
  </Card>
);

export default Hero;
