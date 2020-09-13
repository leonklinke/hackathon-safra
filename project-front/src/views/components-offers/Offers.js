import React from "react";
import { Link } from "react-router-dom";
import Investment from "../../services/investment";

// reactstrap components
import {
  Card,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "../../components/Navbars/DemoNavbar.js";
import SimpleFooter from "../../components/Footers/SimpleFooter.js";

class Offers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      investments: [],
    };
  }
  componentDidMount = async () => {
    const response = await Investment.getInvestments();
    this.setState({ investments: response.data })
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
                      {
                        this.state.investments.map((investment) =>
                          <tr>
                            <th scope="row">{investment.startup.user.name}</th>
                            <td>{investment.startup.data.sector}</td>
                            <td>R${investment.target_value}</td>
                            <td>{investment.reached_value * 100 / investment.target_value}% </td>
                            <td>{investment.startup.data.risk}</td>
                            <td>
                              <Link className="text-light" to={"/detalhe-ofertas/" + investment.id} tag={Link}>
                                <i className="fa fa-search"></i>
                              </Link>
                            </td>
                          </tr>
                        )
                      }

                    </tbody>
                  </table>

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
