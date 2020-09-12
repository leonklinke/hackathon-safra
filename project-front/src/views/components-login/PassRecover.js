import React from "react";
import { Link } from "react-router-dom";

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
  } from "reactstrap";

  class PassRecover extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        login: '',
        password: '',
      };
  
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit = async (event) => {
      event.preventDefault();
      // let login = this.state.login;
      // let password = this.state.password;
      window.location.href = "/login";       
    }
  
    changeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
    }
  
    render() {
      return (
        <>
          <main ref="main">
            <section className="section section-shaped section-lg">
              <div className="shape shape-style-1 bg-gradient-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="">
                <Row className="justify-content-center">
                  <Col lg="5">
                    <Card className="bg-secondary shadow border-0">
                      <CardHeader className="bg-white pb-3">
                        <div className="text-muted text-center">
                          <img
                            alt="..."
                            className="img-fluid"
                            src={require("../../assets/img/brand/logo-safra.png")}
                            style={{ width: "200px" }}
                          />
                        </div>
                        <div className="text-center mt-3">
                          <h2 className="display-4 mb-0">Recuperar sua Senha</h2>
                        </div>
                      </CardHeader>
                      <CardBody className="px-lg-5 py-lg-5">
                        <Form role="form" onSubmit={this.handleSubmit}>
                          <FormGroup className="mb-3">
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="fa fa-user" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input placeholder="Login" ref="login" type="text" name="login" id="login" onChange={this.changeHandler} />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-lock-circle-open" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Password"
                                type="password"
                                autoComplete="off"
                                id="password"
                                name="password"
                                ref="password"
                                onChange={this.changeHandler}
                              />
                            </InputGroup>
                          </FormGroup>
                          <div className="text-center">
                            <Button
                              className="my-4"
                              color="primary"
                            >
                              Recuperar Senha
                            </Button>
                          </div>
                        </Form>
                      </CardBody>
                    </Card>
                    <Row className="mt-3">
                    <Col xs="6">
                      <Link className="text-light" to="/login" tag={Link}>
                        <small>Login</small>
                      </Link>
                    </Col>
                    <Col className="text-right" xs="6">
                    <Link className="text-light" to="/create-account" tag={Link}>
                        <small>Registrar</small>
                      </Link>
                    </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </section>
          </main>
        </>
      );
    }
  }
  
  export default PassRecover;
  