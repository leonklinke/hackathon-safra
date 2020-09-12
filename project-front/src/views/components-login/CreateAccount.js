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

  class CreateAccount extends React.Component {
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
            <section className="section section-shaped register-account section-lg">
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
                          <h2 className="display-4 mb-0">Crie a sua Conta</h2>
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
                              <Input placeholder="Nome" type="text" name="name" id="name" onChange={this.changeHandler} />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup className="mb-3">
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="fa fa-id-card-o" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input placeholder="CPF" type="text" name="cpf" id="cpf" onChange={this.changeHandler} />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup className="mb-3">
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="fa fa-calendar-minus-o" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input placeholder="Data de Nascimento" type="text" name="dataNasc" id="dataNasc" onChange={this.changeHandler} />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup className="mb-3">
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="fa fa-envelope" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input placeholder="Email" type="text" name="email" id="email" onChange={this.changeHandler} />
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
                                placeholder="Senha"
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
                              className="my-4 mr-2"
                              color="primary"
                            >
                              Registrar
                            </Button>
                            <Button
                              className="my-4 ml-2"
                              color="primary"
                              to="/login" tag={Link}
                            >
                              Voltar
                            </Button>
                          </div>
                        </Form>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </section>
          </main>
        </>
      );
    }
  }
  
  export default CreateAccount;
  