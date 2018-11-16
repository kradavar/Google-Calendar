import React, { Component } from "react";
import { Modal } from "./ModalIems/Modal";
import SignInForm from "../Model/FormItems/SignInForm";
import SignUpForm from "../Model/FormItems/SignUpForm";

export class SignModal extends Component {
  render() {
    return (
      <Modal
        header={this.props.signed ? "Sign in" : "Sign up"}
        handleClose={this.props.handleClose}
      >
        {this.props.signed ? <SignInForm /> : <SignUpForm />}
      </Modal>
    );
  }
}
