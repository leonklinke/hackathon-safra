import React from "react";
// nodejs library that concatenates classes

// reactstrap components
import {
  Card,
  CardImg,
  CardBody,
  Container,
  Row,
  Col,
  // CardHeader
} from "reactstrap";

// core components
import DemoNavbar from "../components/Navbars/DemoNavbar.js";
import SimpleFooter from "../components/Footers/SimpleFooter.js";

// index page sections

class Index extends React.Component {
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
                <Row className="row-grid align-items-center">
                  <Col md="9">
                    <Row className="my-md">
                      <Col className="mb-5 mb-md-0" md="6">
                        <Card className="card-lift--hover shadow border-0">
                          <CardImg
                            alt="..."
                            src={require("../assets/img/theme/landing.jpg")}
                          />
                        </Card>
                      </Col>
                      <Col className="mb-5 mb-lg-0" md="6">
                        <Card className="card-lift--hover shadow border-0">
                          <CardImg
                            alt="..."
                            src={require("../assets/img/theme/profile.jpg")}
                          />
                        </Card>
                      </Col>
                    </Row>
                    <Row className="my-md">
                      <Col className="mb-5 mb-md-0" md="6">
                        <Card className="card-lift--hover shadow border-0">
                          <CardImg
                            alt="..."
                            src={require("../assets/img/theme/landing.jpg")}
                          />
                        </Card>
                      </Col>
                      <Col className="mb-5 mb-lg-0" md="6">
                        <Card className="card-lift--hover shadow border-0">
                          <CardImg
                            alt="..."
                            src={require("../assets/img/theme/profile.jpg")}
                          />
                        </Card>
                      </Col>
                    </Row>
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
              </Container>
            </section>
          </div>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Index;
