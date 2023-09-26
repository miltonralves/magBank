import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import "./Institutional.scss";
import IconText from "./IconText";
import {
  faGlobe,
  faMobile,
  faMobileAlt,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";

const Institutional = ({ onClick }) => (
  <section className="institutional text-light py-5">
    <Container>
      <Row>
        <Col xs={12} lg={5} />
        <Col xs={12} lg={7}>
          <h2 className="institutional-title my-5">Já nascemos Digital</h2>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex
            vitae eos incidunt dolor dicta pariatur consequuntur rem corrupti
            porro officia, voluptate, eaque minima, libero qui est iusto?
            Repellat, dignissimos! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Impedit dolorum harum eos soluta, dicta facilis ab
            aspernatur, perspiciatis porro obcaecati architecto perferendis
            maxime! Quisquam eos, deleniti commodi error totam ad! Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Voluptatem quae odit
            amet eligendi consequatur, debitis similique nisi ab perferendis
            vero architecto obcaecati exercitationem ipsa deleniti rem suscipit
            repellendus, minima quaerat!
          </p>

          <IconText icon={faMobileAlt} color="#fff" className="mb-2">
            {" "}
            Sem fila e sem burocracia
          </IconText>

          <IconText icon={faMobile} color="#fff" className="mb-2">
            {" "}
            Simples e prático
          </IconText>

          <IconText icon={faGlobe} color="#fff" className="mb-2">
            {" "}
            Abertura de conta 100% online
          </IconText>

          <IconText icon={faShieldAlt} color="#fff" className="mb-2">
            {" "}
            Transações mais seguras
          </IconText>

          <Button variant="outline-light" onClick={onClick} className="mt-5">
            Abra sua conta
          </Button>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Institutional;
