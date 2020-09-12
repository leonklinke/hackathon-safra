import React from "react";
// reactstrap components
import {
  Modal,
} from "reactstrap";

class DetailsModal extends React.Component {
    
  
  constructor(props) {
    super(props);
    this.state = {
        detailModal: false
    };
  }

  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
  render() {
    return (
      <>
        <i onClick={() => this.toggleModal("detailModal")} className="fa fa-search btn icon-cursor"></i>
        {/* Modal */}
        <Modal
          className="modal-dialog-centered"
          isOpen={this.state.detailModal}
          toggle={() => this.toggleModal("detailModal")}
        >
          <div className="modal-header">
            <h5 className="modal-title" id="detailModalLabel">
              Detalhes da Startup - {this.props.teste}
            </h5>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("detailModal")}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">

          </div>
        </Modal>
      </>
    );
  }
}

export default DetailsModal;