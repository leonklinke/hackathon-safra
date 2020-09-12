import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  // CardHeader
} from "reactstrap";

// core components
import DemoNavbar from "../components/Navbars/DemoNavbar.js";
import SimpleFooter from "../components/Footers/SimpleFooter.js";

// index page sections

class EssentialDocuments extends React.Component {
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
                <Row className="row-grid align-items-center">
                    <Col className="text-white">
                        <h3>Nome da Startup</h3>
                        <div className="my-4">
                            <span className="text-black">
                                <b>Apresentação Startup</b>
                            </span>
                            <ul>
                                <li>Pitch.mp4</li>
                                <li>Apresentação.pdf</li>
                            </ul>
                        </div>
                        <div className="my-4">
                            <span className="text-black">
                                <b>Detalhes Financeiros</b>
                            </span>
                            <ul>
                                <li>Balancete 2019.pdf</li>
                                <li>Balancete 2020.pdf</li>
                                <li>Valuation.xlsx</li>
                            </ul>
                        </div>
                        <div className="my-4">
                            <span className="text-black">
                                <b>Detalhes Jurídicos</b>
                            </span>
                            <ul>
                                <li>Contrato Social.pdf</li>
                                <li>Contrato de Investimento.pdf</li>
                                <li>Relatório Serasa.pdf</li>
                            </ul>
                        </div>
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

export default EssentialDocuments;
