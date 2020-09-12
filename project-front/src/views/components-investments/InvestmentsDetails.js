import React from "react";
import { Link } from "react-router-dom";
import LineChart from "./LineCharts.js";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "../../components/Navbars/DemoNavbar.js";
import SimpleFooter from "../../components/Footers/SimpleFooter.js";

class InvestmentsDetails extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <Row className="full-row">
                  <Col md="4">
                      <Row>
                        <h3>Nome da Startup</h3>
                        <div>
                            <span className="text-white">
                            <b>Financiamento Concluído com Sucesso</b>
                            </span>
                        </div>
                        <div>
                            <span className="text-white">
                            <b>Data de Conclusão:</b> 12/09/2020
                            </span>
                        </div>
                        <div>
                            <span className="text-white">
                            <b>Total Arrecadado:</b> R$ 100.000,00
                            </span>
                        </div>
                      </Row>
                      <Row className="my-md">
                      <div>
                        <span className="text-white">
                            <b>Seu Total:</b> R$ 350,00
                        </span>
                      </div>
                      <div>
                        <span className="text-white">
                            <b>Sua Participação:</b> 0,052%
                        </span>
                      </div>
                      </Row>
                      <Row>
                        <Button
                            className="my-4"
                            color="secondary"
                            to="/documentos-essenciais/A" tag={Link}
                        >
                            Documentos Essenciais
                        </Button>
                      </Row>
                  </Col>
                  <Col md="8">
                    <LineChart></LineChart>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default InvestmentsDetails;
