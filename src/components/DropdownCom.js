import React, { Component } from "react";
import Select from "react-select";
import {
  FormGroup,
  ControlLabel,
  HelpBlock
} from "react-bootstrap";



class DropdownCom extends Component {


  render() {
    if (this.props.validationstate) {
    }
    return (
      <div>
        <FormGroup
          controlId={this.props.controlId}
          validationState={this.props.validationstate}
        >
          <ControlLabel>{this.props.controlLabel}</ControlLabel>
          <Select
            defaultValue={this.props.selectedOption}
            placeholder={this.props.placeholder}
            onChange={this.props.onChange}
            options={this.props.inputDropOptions}
          />
          <HelpBlock>{this.props.HelpBlock}</HelpBlock>
        </FormGroup>
      </div>
    );
  }
}

export default DropdownCom;
