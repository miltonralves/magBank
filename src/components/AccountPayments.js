import React from "react";
import { Button, Col, Tabs, Tab, Table, Form } from "react-bootstrap";

const AccountPayments = () => {
  return (
    <>
      <Col xs={12} lg={3} className="mt-lg-5 pt-lg-3">
        <h3 className="mt-4">Pagamentos</h3>
        <Tabs className="mt-5 pt-lg-2" defaultActiveKey="latestDeposits">
          <Tab eventKey="Boleto" title="Boleto">
            <Form>
              <Form.Group controlId="formBarCode" className="my-5">
                <Form.Label>Código de Barras</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Insira o código de barras"
                />
              </Form.Group>
              <Form.Group controlId="formPaymentType" className="mb-5">
                <Form.Label>Forma de Pagamento</Form.Label>
                <div className="d-flex">
                  <Form.Check
                    type="radio"
                    id="debit"
                    label="Débito em conta corrente"
                    name="paymentType"
                  />
                  <Form.Check
                    type="radio"
                    id="credit"
                    label="Cartão de crédito"
                    name="paymentType"
                    className="ml-4"
                  />
                </div>
              </Form.Group>
              <Button variant="success" title="Continuar"></Button>
            </Form>
          </Tab>
          <Tab eventKey="transfer" title="Transferencia"></Tab>
        </Tabs>
      </Col>
    </>
  );
};

export default AccountPayments;
