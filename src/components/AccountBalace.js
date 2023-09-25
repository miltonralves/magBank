import React from "react";
import { Button, Col, Tabs, Tab, Table } from "react-bootstrap";

const AccountBalace = ({ data }) => {
  const { latestBalance, futureBalance } = data;
  return (
    <>
      <Col xs={12} lg={3} className="mt-lg-5 pt-lg-3">
        <h3 className="mb-5">Conta Corrente</h3>
        <h6>Saldo em conta Corrente</h6>
        <h4 className="text-success mb-4">
          <small>R$</small> 3.500<small>,00</small>
        </h4>
        <h6>Cheque especial</h6>
        <p className="mb-0">Limite disponível</p>
        <p>R$ 5.000,00</p>
        <Button variant="primary" size="lg" active>
          Ver extrato
        </Button>
      </Col>
      <Col xs={12} lg={5} className="mt-lg-5">
        <Tabs className="mt-5 pt-lg-5" defaultActiveKey="latestDeposits">
          <Tab eventKey="latestDeposits" title="Últimos Lançamentos">
            <Table striped hover borderless>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Descrição</th>
                  <th>Valor (R$)</th>
                </tr>
              </thead>
              <tbody>
                {latestBalance.map(({ data, description, value }) => (
                  <tr>
                    <td>{data}</td>
                    <td>{description}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="future" title="Lançamentos Futuros">
            <Table striped hover borderless>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Descrição</th>
                  <th>Valor (R$)</th>
                </tr>
              </thead>
              <tbody>
                {futureBalance.map(({ data, description, value }) => (
                  <tr>
                    <td>{data}</td>
                    <td>{description}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Tab>
        </Tabs>
      </Col>
    </>
  );
};

export default AccountBalace;
