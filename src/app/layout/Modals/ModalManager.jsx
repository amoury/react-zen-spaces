import React from 'react';
import { connect } from 'react-redux';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';

const modalLookup = {
  RegisterModal,
  LoginModal
}

const ModalManager = ({ currentModal }) => {
  let renderedModal;

  if(currentModal) {
    const {modalType, modalProps} = currentModal;
    const ModalComponent = modalLookup[modalType];

    renderedModal = <ModalComponent {...modalProps}/>
  }
  return <span>{ renderedModal }</span>
}

const mapStateToProps = state => ({
  currentModal: state.modals
})

export default connect(mapStateToProps)(ModalManager)
