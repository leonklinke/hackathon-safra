import React from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import Investment from "../../services/investment";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Progress,
  Button,
  FormGroup,
  Form,
  Input,
  InputGroup,
} from "reactstrap";

// core components
import DemoNavbar from "../../components/Navbars/DemoNavbar.js";
import SimpleFooter from "../../components/Footers/SimpleFooter.js";

class OffersDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 3,
      investment: {},
      percentage: 0,
      value: 0
    };
  }

  componentDidMount = async () => {
    const { id } = await this.props.match.params;
    const response = await Investment.showInvestment(id);
    await this.setState({ investment: response })
    await this.setState({ percentage: (response.reached_value * 100 / response.target_value) })
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  invest = async () => {
    console.log("investing")
    await Investment.invest(this.state.investment.id, this.state.value);
    window.location.href = "/investimentos";
  }
  valueHandler = (event) => this.setState({ value: event.target.value })


  content = () => {
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
                <Col>
                  <Row className="row-grid">
                    <Col className="text-white">
                      <div>
                        <h3>{this.state.investment.startup.user.name}</h3>
                        <p>
                          {this.state.investment.startup.data.sector}
                        </p>
                        <p>
                          {this.state.investment.startup.data.intro}
                        </p>
                      </div>
                      <div className="progress-wrapper">
                        <div className="progress-info">
                          <div className="progress-label">
                            <span>Progresso do Investimento</span>
                          </div>
                          <div className="progress-percentage">
                            <span className="text-white">{this.state.percentage}%</span>
                          </div>
                        </div>
                        <Progress max="100" value={this.state.percentage} color="default" />
                      </div>
                    </Col>
                    <Col>
                      <div>
                        <span className="text-black">
                          <b>Data Limite</b>
                        </span>
                        <p className="text-white">
                          {this.state.investment.end_time}
                        </p>
                      </div>
                      <div>
                        <span className="text-black">
                          <b>Meta</b>
                        </span>
                        <p className="text-white">
                          R$ {this.state.investment.target_value}
                        </p>
                      </div>
                      <div>
                        <span className="text-black">
                          <b>Valor mínimo</b>
                        </span>
                        <p className="text-white">
                          R$ {this.state.investment.minimum_value}
                        </p>
                      </div>
                      <div>
                        <span className="text-black">
                          <b>Maturidade</b>
                        </span>
                        <div>
                          <StarRatings
                            rating={this.state.investment.startup.data.maturity}
                            starRatedColor="yellow"
                            numberOfStars={5}
                            starDimension="20px"
                            starSpacing="5px"
                            name='rating'
                          />
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <Form role="form" onSubmit={this.handleSubmit}>
                        <Row>
                          <Col>
                            <span className="text-black"><b>Deseja Investir?</b></span>
                          </Col>
                          <Col>
                            <FormGroup className="mb-3">
                              <InputGroup className="input-group-alternative">
                                <Input placeholder="Valor" ref="value" type="text" name="value" id="value" onChange={(e) => this.valueHandler(e)} />
                              </InputGroup>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row className="my-4">
                          <Col xs="12">
                            <div className="custom-control custom-control-alternative custom-checkbox">
                              <input
                                className="custom-control-input"
                                id="checkTerm"
                                type="checkbox"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="checkTerm"
                              >
                                <span className="text-white">
                                  Termo de Ciência
                                </span>
                              </label>
                            </div>
                          </Col>
                        </Row>
                        <Row className="my-4">
                          <Col xs="12">
                            <div className="custom-control custom-control-alternative custom-checkbox">
                              <input
                                className="custom-control-input"
                                id="checkDeclare"
                                type="checkbox"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="checkDeclare"
                              >
                                <span className="text-white">
                                  Autodeclaração de Investimentos
                                </span>
                              </label>
                            </div>
                          </Col>
                        </Row>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <Input
                              placeholder="Assinatura Eletrônica"
                              type="text"
                              id="signature"
                              name="signature"
                              onChange={this.changeHandler}
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="secondary"
                            onClick={() => this.invest()}
                          >
                            INVESTIR
                          </Button>
                        </div>
                      </Form>
                    </Col>
                  </Row>
                  <Row className="row-grid">
                    <Col md="8">
                      <span className="text-white">{this.state.investment.startup.data.description}</span>
                      <iframe width="520" height="315"
                        src={this.state.investment.startup.data.video}>
                      </iframe>
                    </Col>
                    <Col md="4">
                      <Button
                        className="my-4"
                        color="secondary"
                        to="/documentos-essenciais/A" tag={Link}
                      >
                        Documentos Essenciais
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Container>
            </section>
          </div>
        </main>
        <SimpleFooter />
      </>
    )
  }
  render() {
    return (
      <>
        {!Object.keys(this.state.investment).length ? null : this.content()}
      </>
    );
  }
}


export default OffersDetails;