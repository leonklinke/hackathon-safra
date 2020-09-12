import React from "react";
import { Link } from "react-router-dom";

// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";

// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }

  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  logout = () => {
    localStorage.removeItem('token');
    window.location.href = "/login";
  }

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("../../assets/img/brand/logo-safra-branco.svg")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("../../assets/img/brand/argon-react.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <Link className="text-white" to="/" tag={Link}>
                      <span className="nav-link-inner--text ml-2">
                        <b>Página Principal</b>
                      </span>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link className="text-white" to="/ofertas" tag={Link}>
                      <span className="nav-link-inner--text ml-2">
                        Ofertas
                      </span>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link className="text-white" to="/investimentos" tag={Link}>
                      <span className="nav-link-inner--text ml-2">
                        Meus Investimentos
                      </span>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link className="text-white" to="/conta" tag={Link}>
                      <span className="nav-link-inner--text ml-2">
                        Conta
                      </span>
                    </Link>
                  </NavItem>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <div className={this.state.loginButton ? 'hidden' : ''}>
                      <Button
                        className="btn-neutral btn-icon"
                        color="default"
                        onClick={() => this.logout()}
                        target="_blank"
                      >
                        <span className="btn-inner--icon">
                          <i className="fa fa-sign-out mr-2" />
                        </span>
                        <span className="nav-link-inner--text ml-1">
                          SAIR
                        </span>
                      </Button>
                    </div>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
