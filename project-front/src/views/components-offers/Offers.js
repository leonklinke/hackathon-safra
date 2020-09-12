import React from "react";
// nodejs library that concatenates classes

// reactstrap components
import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DetailsModal from "./DetailsModal.js";
import DemoNavbar from "../../components/Navbars/DemoNavbar.js";
import SimpleFooter from "../../components/Footers/SimpleFooter.js";

class Offers extends React.Component {
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
                <Row className="row-grid">
                  <Col md="9">
                    <table className="table table-white table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Startup</th>
                                <th scope="col">Tipo da Startup</th>
                                <th scope="col">Meta</th>
                                <th scope="col">Arrecadado</th>
                                <th scope="col">Risco</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">STARTUP A</th>
                                <td>Tipo A</td>
                                <td>Meta</td>
                                <td>% Arrecadado</td>
                                <td>Risco</td>
                                <td><DetailsModal teste={'testeA'}></DetailsModal></td>
                            </tr>
                            <tr>
                                <th scope="row">STARTUP B</th>
                                <td>Tipo A</td>
                                <td>Meta</td>
                                <td>% Arrecadado</td>
                                <td>Risco</td>
                                <td><DetailsModal teste={'testeB'}></DetailsModal></td>
                            </tr>
                            <tr>
                                <th scope="row">STARTUP C</th>
                                <td>Tipo A</td>
                                <td>Meta</td>
                                <td>% Arrecadado</td>
                                <td>Risco</td>
                                <td><DetailsModal teste={'testeC'}></DetailsModal></td>
                            </tr>
                            <tr>
                                <th scope="row">STARTUP D</th>
                                <td>Tipo A</td>
                                <td>Meta</td>
                                <td>% Arrecadado</td>
                                <td>Risco</td>
                                <td><DetailsModal teste={'testeD'}></DetailsModal></td>
                            </tr>
                        </tbody>
                    </table>
                  </Col>
                  <Col md="3">
                    <Card className="border-0">
                      <CardBody className="py-5">
                        <Row>
                          <h5>Resumo dos Seus Investimentos</h5>
                        </Row>
                        <Row className="mt-3">
                          <h6 className="font-weight-bold">
                            Em Financiamento
                          </h6>
                          <ul>
                            <li>Startup A{" "}
                              <ul>
                                <li>X% Concluído</li>
                                <li>Y dias para Terminar</li>
                              </ul>
                            </li>
                          </ul>
                        </Row>
                        <Row className="mt-3">
                          <h6 className="font-weight-bold">
                            Financiados
                          </h6>
                          <ul>
                            <li>Startup B{" "}
                              <ul>
                                <li>R$ X Investidos</li>
                                <li>Y anos para Finalizar</li>
                              </ul>
                            </li>
                          </ul>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  
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

export default Offers;
