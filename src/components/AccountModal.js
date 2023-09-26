import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AccountModal = ({ show, handleClose, auth }) => {
  const history = useNavigate();
  const [name, setName] = useState();

  const handleSubmit = () => {
    auth.login(name, "123456", history("/dashboard"));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Abra sua conta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Seu nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="seu nome"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Seu email</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCity">
            <Form.Label>Sua cidade</Form.Label>
            <Form.Control as="select">
              <option value="1">Campo Mourão</option>
              <option value="2">Máringa</option>
              <option value="3">Cascavel</option>
            </Form.Control>
          </Form.Group>
          <Form.Check // prettier-ignore
            type="checkbox"
            id="custom-checkbox"
            label="Eu li e concordo com os termos de uso."
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Criar Conta
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AccountModal;
