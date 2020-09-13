import React from "react";
import { Link } from "react-router-dom";
import Investment from "../../services/investment";
import { Chart } from "react-google-charts";


// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "../../components/Navbars/DemoNavbar.js";
import SimpleFooter from "../../components/Footers/SimpleFooter.js";

class InvestmentsDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interest: {},
      percentage: 0,
      value: 0,
      graph: []
    };
  }

  componentDidMount = async () => {
    const { id } = await this.props.match.params;
    const response = await Investment.showInterest(id);
    let revenues = [['x', 'Previsto', 'Real']]
    for (const key in response.investment.startup.data.revenue_expected) {
      revenues.push([key, response.investment.startup.data.revenue_expected[key], response.investment.startup.data.revenue_real[key]])
    }
    await this.setState({ graph: revenues })
    response.investment.startup.data.revenue_expected.forEach(expected => {

    });


    await this.setState({ interest: response })
    await this.setState({ percentage: (response.investment.reached_value * 100 / response.investment.target_value) })
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
              <Container className="py-lg-md d-flex">
                <Row className="full-row">
                  <Col md="4">
                    <div>
                      <span className="text-white">
                        <h3>{this.state.interest.investment.startup.user.name}</h3>
                      </span>
                    </div>
                    <Row>
                      <span />
                      <span />
                      <span />
                      <div>
                        <span className="text-white">
                          <b>Financiamento:</b> {(this.state.interest.investment.status == 'done' ? 'Concluído' : 'Aberto')}
                        </span>
                      </div>
                      <div>
                        <span className="text-white">
                          <b>Valor solicitado:</b> R${this.state.interest.investment.target_value}
                        </span>
                      </div>
                      <div>
                        <span className="text-white">
                          <b>Equity oferecido:</b> {this.state.interest.investment.equity}%
                        </span>
                      </div>
                      <div>
                        <span className="text-white">
                          <b>Total Arrecadado:</b> R$ {this.state.interest.investment.reached_value}
                        </span>
                      </div>
                    </Row>
                    <Row className="my-md">
                      <div>
                        <span className="text-white">
                          <b>Seu Investimento:</b> R$ {this.state.interest.value}
                        </span>
                      </div>
                      <div>
                        <span className="text-white">
                          <b>Sua Participação:</b> {(this.state.interest.value * 100 / this.state.interest.investment.target_value) * this.state.interest.investment.equity / 100}%
                        </span>
                      </div>
                    </Row>
                    <Row>
                      <Button
                        className="my-4"
                        color="secondary"
                        to="/documentos-essenciais/A" tag={Link}
                      >
                        Documentos Essenciais
                        </Button>
                    </Row>
                  </Col>
                  <Col md="8">
                    <Chart
                      width={'700px'}
                      height={'400px'}
                      chartType="LineChart"
                      loader={<div>Carregando gráfico</div>}
                      data={this.state.graph}
                      options={{
                        hAxis: {
                          title: 'Tempo',
                        },
                        vAxis: {
                          title: 'Faturamento',
                        },
                        series: {
                          0: { curveType: 'function' },
                          1: { curveType: 'function' },
                        },
                      }}
                      rootProps={{ 'data-testid': '2' }}
                    />
                  </Col>
                </Row>
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
        {!Object.keys(this.state.interest).length ? null : this.content()}
      </>

    );
  }
}

export default InvestmentsDetails;
