import React, { Component } from "react";

import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from "react-bootstrap";

class TextFieldCom extends Component {
  render() {
    return (
      
        <FormGroup
          controlId="formBasicText"
          validationState={this.props.vlidationstate}>
          <ControlLabel>{this.props.controlLabel}</ControlLabel>
          <FormControl type={this.props.fieldtype} {...this.props} />
          <FormControl.Feedback />
          <HelpBlock>{this.props.validation}</HelpBlock>
        </FormGroup>
      
    );
  }
}

export default TextFieldCom;
