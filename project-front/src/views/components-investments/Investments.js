import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "../../components/Navbars/DemoNavbar.js";
import SimpleFooter from "../../components/Footers/SimpleFooter.js";

class Investments extends React.Component {
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
                    <Col>
                        <table className="table table-white table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Startup</th>
                                    <th scope="col">Etapa do Investimento</th>
                                    <th scope="col">Valor Investido</th>
                                    <th scope="col">% Participação</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Startup A</th>
                                    <td>Concluído</td>
                                    <td>R$ X</td>
                                    <td>X%</td>
                                    <td>
                                    <Link className="text-light" to="/detalhe-investimentos/A" tag={Link}>
                                        <i className="fa fa-search"></i>
                                    </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Startup B</th>
                                    <td>Concluído</td>
                                    <td>R$ X</td>
                                    <td>X%</td>
                                    <td>
                                    <Link className="text-light" to="/detalhe-investimentos/B" tag={Link}>
                                        <i className="fa fa-search"></i>
                                    </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Startup C</th>
                                    <td>Concluído</td>
                                    <td>R$ X</td>
                                    <td>X%</td>
                                    <td>
                                    <Link className="text-light" to="/detalhe-investimentos/C" tag={Link}>
                                        <i className="fa fa-search"></i>
                                    </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Startup D</th>
                                    <td>Concluído</td>
                                    <td>R$ X</td>
                                    <td>X%</td>
                                    <td>
                                    <Link className="text-light" to="/detalhe-investimentos/D" tag={Link}>
                                        <i className="fa fa-search"></i>
                                    </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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

export default Investments;
