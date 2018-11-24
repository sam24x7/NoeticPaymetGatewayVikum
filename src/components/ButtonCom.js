import React, {Component} from "react";

import {
    Button
} from "react-bootstrap";

class ButtonCom extends Component {
    render() {
        return (
            <div className="buComponentDiv">
                <Button className="butComponentStyles"
                        style={{background: this.props.backGroundColor,
                             width: this.props.butwidth,
                              border: this.props.butBorder, borderRadius:this.props.butBorderRadius}}
                        onClick={this.props.onClick}>
                    {this.props.buttonText}
                </Button>
            </div>
        );
    }
}

export default ButtonCom;