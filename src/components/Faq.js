import React, { useState, useEffect } from "react";
import {
  faCreditCard,
  faShieldAlt,
  faUserTie,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Container } from "react-bootstrap";
import IconText from "./IconText";
import AccordionComp from "./Accordion";

import "./Faq.scss";

const Faq = () => {
  const [index, setIndex] = useState(0);

  const handleClick = (key) => {
    setIndex(key);
  };

  useEffect(() => {
    console.log(index);
  }, [index]);

  const options = [
    { icon: faCreditCard, text: "Cartão de crédito" },
    { icon: faWallet, text: "Conta e abertura" },
    { icon: faShieldAlt, text: "Token digital" },
    { icon: faUserTie, text: "Produtos e serviços" },
  ];

  return (
    <section className="faq text-light">
      <Container className="py-5">
        <Row className="text-center">
          <h2 className="faq-title my-5">Dúvidas Frequentes</h2>
        </Row>
        <Row className="d-flex align-items-center justify-items-center">
          <Col className="d-lg-none mb-5" xs={12}>
            <Row>
              {options.map(({ icon }, key) => (
                <Col className="d-flex jutify-content-center">
                  <FontAwesomeIcon
                    icon={icon}
                    size="3x"
                    color={key === index ? "#FFF" : "#BBB"}
                    key={key}
                    onClick={() => handleClick(key)}
                  />
                </Col>
              ))}
            </Row>
            <Row className="text-center mt-5">
              <p className="lead">{options[index].text}</p>
            </Row>
          </Col>

          <Col className="d-none d-lg-block">
            {options.map(({ icon, text }, key) => (
              <IconText
                icon={icon}
                size={3}
                className="mb-3"
                textClasName="lead"
                color={key === index ? "#FFF" : "#BBB"}
                onClick={() => handleClick(key)}
                key={key}
              >
                {text}
              </IconText>
            ))}
          </Col>

          <Col>
            <AccordionComp props={index} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Faq;
