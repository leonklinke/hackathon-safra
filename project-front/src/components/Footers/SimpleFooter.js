import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer bg-safra ">
          <Container>
            <Row className=" row-grid align-items-center mb-5">
              <Col className="text-center">
                <span>
                  <small className="text-white">
                    Toda comunicação através da rede mundial de computadores está sujeita a interrupções ou atrasos,
                    podendo prejudicar ordens, negociações ou a recepção de informações atualizadas.
                    O Safra, exime-se de responsabilidade por danos sofridos por seus clientes, por força de falha de serviços disponibilizados por terceiros, incluindo, sem limitação aqueles conexos à rede mundial de computadores.
                  </small>
                </span>
              </Col>
            </Row>
            <hr />
            <Row className="full-row align-items-center justify-content-md-between">
              <Col md="6">
                <img
                  alt="..."
                  src={require("../../assets/img/brand/logo-safra-branco.svg")}
                />
              </Col>
              <Col md="6" className="justify-content-end text-right">
                <span>
                  <small className="text-safra">
                    Banco Safra S/A - CNPJ: 58.160.789/0001-28
                  </small>
                </span>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
