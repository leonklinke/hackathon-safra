import React from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

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
      rating: 3
    };
    console.log(this.props.match.params.id);
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
                <Col>
                  <Row className="row-grid">
                    <Col className="text-white">
                      <div>
                        <h3>Nome da Startup</h3>
                        <p>
                          Tipo da Startup
                        </p>
                        <p>
                          Breve Descrição
                        </p>
                      </div>
                      <div className="progress-wrapper">
                        <div className="progress-info">
                          <div className="progress-label">
                            <span>Progresso do Investimento</span>
                          </div>
                          <div className="progress-percentage">
                            <span className="text-white">40%</span>
                          </div>
                        </div>
                        <Progress max="100" value="40" color="default" />
                      </div>
                    </Col>
                    <Col>
                      <div>
                        <span className="text-black">
                          <b>Tempo Restante</b>
                        </span>
                        <p className="text-white">
                          DD:HH:MM:SS
                        </p>
                      </div>
                      <div>
                        <span className="text-black">
                          <b>Meta</b>
                        </span>
                        <p className="text-white">
                          R$ X
                        </p>
                      </div>
                      <div>
                        <span className="text-black">
                          <b>Meta</b>
                        </span>
                        <p className="text-white">
                          R$ X
                        </p>
                      </div>
                      <div>
                        <span className="text-black">
                          <b>Maturidade</b>
                        </span>
                        <div>
                          <StarRatings
                            rating={this.state.rating}
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
                                <Input placeholder="Valor" ref="value" type="text" name="value" id="value" onChange={this.changeHandler} />
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
                          >
                            INVESTIR
                          </Button>
                        </div>
                      </Form>
                    </Col>
                  </Row>
                  <Row className="row-grid">
                    <Col md="8">
                      <span className="text-white">Descrição Grande</span>
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
    );
  }
}

export default OffersDetails;