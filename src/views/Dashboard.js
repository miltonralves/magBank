import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import AccountBalace from "../components/AccountBalace";
import Payments from "../components/AccountPayments";

import "./Dashboard.scss";

const Dashboard = () => {
  const [activeLink, setActiveLink] = useState(0);

  const links = [
    { text: "Minha Conta", path: "/dashboard", exact: true },
    { text: "Pagamento", path: "/dashboard/payments" },
    { text: "Extrato", path: "/dashboard/history" },
  ];
  const data = {
    latestBalance: [
      {
        data: "22/07",
        description: "Saque 24H 012345",
        value: "300,00",
      },
      {
        data: "21/07",
        description: "Supermercado 0321654",
        value: "275,00",
      },
      {
        data: "20/07",
        description: "Netflix 06654978",
        value: "55,00",
      },
      {
        data: "15/07",
        description: "Farmacia 0321654",
        value: "350,00",
      },
    ],
    futureBalance: [
      {
        data: "22/09",
        description: "Saque 24H 012345",
        value: "300,00",
      },
      {
        data: "23/09",
        description: "Supermercado 0321654",
        value: "275,00",
      },
      {
        data: "25/09",
        description: "Netflix 06654978",
        value: "55,00",
      },
      {
        data: "30/09",
        description: "Farmacia 0321654",
        value: "350,00",
      },
    ],
  };

  return (
    <Container className="dashboard py-5">
      <Row>
        <Col xs={12} lg={4} className="d-grid">
          <Row className="align-items-center mb-5">
            <Col xs={3}>
              <span className="dashboard__user-avatar">
                <FontAwesomeIcon icon={faCircle} size="5x" color="#f8f9fa" />
                <FontAwesomeIcon
                  className="dashboard__user-icon"
                  icon={faUser}
                  size="3x"
                  color="#7c7d7d"
                />
              </span>
            </Col>
            <Col xs={9}>
              <h3>Milton R Alves</h3>
              <p className="text-muted">ag:1234 c/c: 4321-5</p>
            </Col>
          </Row>

          {links.map(({ text, path, exact }, key) => (
            <Link to={path} exact={exact ? exact : false} key={key}>
              <Button
                className={`dashboard__button text-left ${
                  key === activeLink ? "dashboard__button--active" : ""
                }`}
                variant="link"
                size="lg"
                block
                onClick={() => setActiveLink(key)}
              >
                {text}
              </Button>
            </Link>
          ))}
        </Col>
        <>
          <Routes>
            <Route index element={<AccountBalace data={data} />} />
            <Route path="payments" element={<Payments />} />
          </Routes>
        </>
      </Row>
    </Container>
  );
};

export default Dashboard;
