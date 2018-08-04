import React, { Component } from "react";
import { Modal } from "semantic-ui-react";
import { connect } from "react-redux";

import RegisterForm from "../../features/auth/Register/RegisterForm";
import { modalClose } from "./modalActions";

class RegisterModal extends Component {
  render() {
    return (
      <Modal size="mini" open={true} onClose={this.props.modalClose}>
        <Modal.Header>Register</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <RegisterForm />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default connect(
  null,
  { modalClose }
)(RegisterModal);
