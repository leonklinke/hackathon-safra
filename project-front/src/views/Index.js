import React, { Component } from "react";
// nodejs library that concatenates classes
import User from "../services/user";
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

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interests: {},
      doneInvestments: [],
      openInvestments: []
    };
  }
  componentDidMount = async () => {
    this.state.interests = await User.getInvestments()
    this.state.interests.data.forEach(interest => {
      if (interest.investment.status == 'done') {
        let interestArrayTemp = this.state.doneInvestments
        interestArrayTemp.push(interest)
        this.setState({ doneInvestments: interestArrayTemp })
      }
      if (interest.investment.status == 'open') {
        let interestArrayTemp = this.state.openInvestments
        interestArrayTemp.push(interest)
        this.setState({ openInvestments: interestArrayTemp })
      }
    });
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
                  <Col md="7">
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
                            src={require("../assets/img/theme/grindtech.png")}
                          />
                        </Card>
                      </Col>
                      <Col className="mb-5 mb-lg-0" md="6">
                        <Card className="card-lift--hover shadow border-0">
                          <CardImg
                            alt="..."
                            src={require("../assets/img/theme/your_keys.png")}
                          />
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                  <Col md="5">
                    <Card className="border-0">
                      <CardBody className="py-5">
                        <Row>
                          <h5>Resumo dos Seus Investimentos</h5>
                        </Row>
                        <Row className="mt-3">
                          <h6 className="font-weight-bold">
                            Em Aberto
                          </h6>
                          <ul>
                            {
                              this.state.openInvestments.map((interest) =>
                                <li>{interest.investment.startup.user.name}
                                  <ul>
                                    <li><b>{interest.investment.reached_value * 100 / interest.investment.target_value}%</b> Concluído</li>
                                    <li>Você estará comprando: <b>{(interest.value * 100 / interest.investment.target_value) * interest.investment.equity / 100}%</b> de participação dessa startup</li>
                                  </ul>
                                </li>
                              )
                            }

                          </ul>
                        </Row>
                        <Row className="mt-3">
                          <h6 className="font-weight-bold">
                            Financiados
                          </h6>
                          <ul>
                            {
                              this.state.doneInvestments.map((interest) =>
                                <li>{interest.investment.startup.user.name}
                                  <ul>
                                    <li><b>R$ {interest.investment.reached_value}</b> Investidos</li>
                                    <li>Você possui <b>{(interest.value * 100 / interest.investment.reached_value) * interest.investment.equity / 100}%</b> de participação dessa startup</li>
                                  </ul>
                                </li>
                              )
                            }

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

