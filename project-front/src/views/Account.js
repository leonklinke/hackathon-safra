import React from "react";
import classnames from "classnames";
import User from "../services/user";


// reactstrap components
import {
    Card,
    CardBody,
    Container,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Form,
    FormGroup,
    Input,
    InputGroup,
    Button,
    Row,
    Col
} from "reactstrap";

// core components
import DemoNavbar from "../components/Navbars/DemoNavbar.js";
import SimpleFooter from "../components/Footers/SimpleFooter.js";

// index page sections

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: 1,
            password: '',
            newPassword: '',
            newPasswordRepeat: '',
            signature: '',
            newSignature: '',
            newSignatureRepeat: '',
            agency: '',
            account: '',
            accountPassword: '',
            user: {}
        };
    }

    toggleNavs = (e, state, index) => {
        e.preventDefault();
        this.setState({
            [state]: index
        });
    };

    componentDidMount = async () => {
        const response = await User.show()
        this.setState({ user: response })
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
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
                            <Container className="py-lg-md">
                                <div className="nav-wrapper">
                                    <Nav
                                        className="nav-fill flex-column flex-md-row"
                                        id="tabs-icons-text"
                                        pills
                                        role="tablist"
                                    >
                                        <NavItem>
                                            <NavLink
                                                aria-selected={this.state.tabs === 1}
                                                className={classnames("mb-sm-3 mb-md-0 cursor-pointer", {
                                                    active: this.state.tabs === 1
                                                })}
                                                onClick={e => this.toggleNavs(e, "tabs", 1)}
                                                role="tab"
                                            >
                                                Dados da Conta
                    </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                aria-selected={this.state.tabs === 2}
                                                className={classnames("mb-sm-3 mb-md-0 cursor-pointer", {
                                                    active: this.state.tabs === 2
                                                })}
                                                onClick={e => this.toggleNavs(e, "tabs", 2)}
                                                role="tab"
                                            >
                                                Assinatura Eletrônica
                    </NavLink>
                                        </NavItem>

                                    </Nav>
                                </div>
                                <Card className="shadow">
                                    <CardBody>
                                        <TabContent activeTab={"tabs" + this.state.tabs}>
                                            <TabPane tabId="tabs1">
                                                <div>
                                                    <span>
                                                        <b>Nome Completo</b>
                                                    </span>
                                                    <p>{this.state.user.name}</p>
                                                </div>
                                                <div>
                                                    <span>
                                                        <b>Email</b>
                                                    </span>
                                                    <p>{this.state.user.email}</p>
                                                </div>
                                                <div>
                                                    <span>
                                                        <b>CPF</b>
                                                    </span>
                                                    <p>{this.state.user.code}</p>
                                                </div>
                                                <Row>
                                                    <Col md="4">
                                                        <Form role="form" onSubmit={this.handleSubmit}>
                                                            <FormGroup className="mb-3">
                                                                <InputGroup className="input-group-alternative">
                                                                    <Input placeholder="Senha Atual" ref="password" type="password" name="password" id="password" onChange={this.changeHandler} />
                                                                </InputGroup>
                                                            </FormGroup>
                                                            <FormGroup>
                                                                <InputGroup className="input-group-alternative">
                                                                    <Input
                                                                        placeholder="Nova Senha"
                                                                        type="password"
                                                                        id="newPassword"
                                                                        name="newPassword"
                                                                        onChange={this.changeHandler}
                                                                    />
                                                                </InputGroup>
                                                            </FormGroup>
                                                            <FormGroup>
                                                                <InputGroup className="input-group-alternative">
                                                                    <Input
                                                                        placeholder="Repetir Nova Senha"
                                                                        type="password"
                                                                        id="newPasswordRepeat"
                                                                        name="newPasswordRepeat"
                                                                        onChange={this.changeHandler}
                                                                    />
                                                                </InputGroup>
                                                            </FormGroup>
                                                            <div className="text-center">
                                                                <Button className="my-4" color="secondary">
                                                                    ALTERAR SENHA
                                        </Button>
                                                            </div>
                                                        </Form>
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                            <TabPane tabId="tabs2">
                                                <Row>
                                                    <Col md="4">
                                                        <Form role="form" onSubmit={this.handleSubmit}>
                                                            <FormGroup className="mb-3">
                                                                <InputGroup className="input-group-alternative">
                                                                    <Input placeholder="Assinatura Atual" type="text" name="signature" id="signature" onChange={this.changeHandler} />
                                                                </InputGroup>
                                                            </FormGroup>
                                                            <FormGroup>
                                                                <InputGroup className="input-group-alternative">
                                                                    <Input
                                                                        placeholder="Nova Assinatura"
                                                                        type="text"
                                                                        id="newSignature"
                                                                        name="newSignature"
                                                                        onChange={this.changeHandler}
                                                                    />
                                                                </InputGroup>
                                                            </FormGroup>
                                                            <FormGroup>
                                                                <InputGroup className="input-group-alternative">
                                                                    <Input
                                                                        placeholder="Repetir Assinatura"
                                                                        type="text"
                                                                        id="newSignatureRepeat"
                                                                        name="newSignatureRepeat"
                                                                        onChange={this.changeHandler}
                                                                    />
                                                                </InputGroup>
                                                            </FormGroup>
                                                            <div className="text-center">
                                                                <Button className="my-4" color="secondary">
                                                                    ALTERAR ASSINATURA
                                        </Button>
                                                            </div>
                                                        </Form>
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                            <TabPane tabId="tabs3">
                                                <Row>
                                                    <Col md="6">
                                                        <span>
                                                            <i>Insira os dados de sua Conta Safra caso deseje integrá-la a plataforma
                                                            de investimentos. Dessa maneira, seu investimento será automaticamente
                                    transferido para a startup de sua escolha ao final do processo.</i>
                                                        </span>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-5">
                                                    <Col md="4">
                                                        <Form role="form" onSubmit={this.handleSubmit}>
                                                            <FormGroup className="mb-3">
                                                                <InputGroup className="input-group-alternative">
                                                                    <Input placeholder="Agência" type="text" name="agency" id="agency" onChange={this.changeHandler} />
                                                                </InputGroup>
                                                            </FormGroup>
                                                            <FormGroup>
                                                                <InputGroup className="input-group-alternative">
                                                                    <Input
                                                                        placeholder="Conta"
                                                                        type="text"
                                                                        id="account"
                                                                        name="account"
                                                                        onChange={this.changeHandler}
                                                                    />
                                                                </InputGroup>
                                                            </FormGroup>
                                                            <FormGroup>
                                                                <InputGroup className="input-group-alternative">
                                                                    <Input
                                                                        placeholder="Senha"
                                                                        type="password"
                                                                        id="accountPassword"
                                                                        name="accountPassword"
                                                                        onChange={this.changeHandler}
                                                                    />
                                                                </InputGroup>
                                                            </FormGroup>
                                                            <div className="text-center">
                                                                <Button className="my-4" color="secondary">
                                                                    INTEGRAR
                                        </Button>
                                                            </div>
                                                        </Form>
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                        </TabContent>
                                    </CardBody>
                                </Card>
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
                {!Object.keys(this.state.user).length ? null : this.content()}
            </>

        );
    }
}

export default Account;
