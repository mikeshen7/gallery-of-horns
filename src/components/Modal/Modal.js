import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// 2. Create class component
class ShowModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <>
        <Modal
          show={this.props.showModal}
          onHide={this.props.handleCloseModal}
        >

          <Modal.Body>
            <h2>{this.props.selectedBeastTitle}</h2>
            <img
              src={this.props.selectedBeastImageUrl}
              alt={this.props.selectedBeastDescription}
              title={this.props.selectedBeastTitle}
            ></img>
            <p>{this.props.selectedBeastDescription}</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleCloseModal}>Close</Button>
          </Modal.Footer>

        </Modal>
      </>
    );
  }
}



// 3. Export the component
export default ShowModal;
