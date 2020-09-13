import React from "react";
import { Link } from "react-router-dom";
import Investment from "../../services/investment";

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
  constructor(props) {
    super(props);
    this.state = {
      investments: [],
    };
  }
  componentDidMount = async () => {
    const response = await Investment.myInvestments();
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
                  <Col>
                    <table className="table table-white table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Startup</th>
                          <th scope="col">Etapa do Investimento</th>
                          <th scope="col">Valor Investido</th>
                          <th scope="col">% Participação na empresa</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.state.investments.map(interest =>
                            <tr>
                              <th scope="row">{interest.investment.startup.user.name}</th>
                              <td>{(interest.investment.status == 'done' ? 'Concluído' : 'Aberto')}</td>
                              <td>R$ {interest.value}</td>
                              <td>{(interest.value * 100 / interest.investment.target_value) * interest.investment.equity / 100}%</td>
                              <td>
                                <Link className="text-light" to={"/detalhe-investimentos/" + interest.id} tag={Link}>
                                  <i className="fa fa-search"></i>
                                </Link>
                              </td>

                            </tr>
                          )
                        }

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
