import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';

import LoginForm from '../../features/auth/Login/LoginForm';
import { modalClose } from './modalActions';

class LoginModal extends Component {
  render () {
    return (
      <Modal size='mini' open={true} onClose={this.props.modalClose}>
        <Modal.Header>Login</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <LoginForm />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default connect(null, {modalClose})(LoginModal);