import React, { Component } from 'react';
import './App.css';
import { Col } from "react-bootstrap";
import TextFieldCom from './components/TextFieldCom';
import ButtonCom from './components/ButtonCom';
import DropdownCom from './components/DropdownCom';

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  months = [{ value: 0, label: 'Select' }, { value: 1, label: 'Jan' }, { value: 2, label: 'Feb' }, { value: 3, label: 'Mar' }, { value: 4, label: 'Apr' }, { value: 5, label: 'May' }, { value: 6, label: 'Jun' }, { value: 7, label: 'Jul' }, { value: 8, label: 'Aug' }, { value: 9, label: 'Sep' }, { value: 10, label: 'Oct' }, { value: 11, label: 'Nov' }, { value: 12, label: 'Dec' }];
  years = [{ value: 0, label: 'Select' }, { value: 2018, label: '2018' }, { value: 2019, label: '2019' }, { value: 2020, label: '2020' }, { value: 2021, label: '2021' }, { value: 2022, label: '2022' }, { value: 2023, label: '2023' }, { value: 2024, label: '2024' }];

  constructor() {

    super();
    this.state = {
      cardNumber: "",
      cardType: "",
      csv: "",
      months: this.months,
      years: this.years,
      selectedMonth: 0,
      selectedYear: 0,
      cardNumberError: null,
      cardCsvError: null,
      cardMonthError: null,
      cardMonthErrorMessage: '',
      cardYearError: null,
      cardYearErrorMessage: '',
      isLoading: false
    }

  }
  cardNumberSetFunction(text) { // Card type Validation
    if (this.state.cardNumber !== '') {

      if (this.state.cardNumber.charAt(0) == 5) {

        this.setState({ cardType: 'Master Card' });
      } else if (this.state.cardNumber.charAt(0) == 4) {

        this.setState({ cardType: 'Visa Card' });
      }
    } else {
      this.setState({ cardType: '' });
    }

    if (!isNaN(text.target.value)) {

      this.setState({ cardNumber: text.target.value });
    }

  }
  selMonthfuncion(selectItem) {
    this.setState({ selectedMonth: selectItem });
  }
  selYearFunction(selItem) {

    this.setState({ selectedYear: selItem });

  }
  setCardCsv(text) {
    if (!isNaN(text.target.value)) {

      this.setState({ csv: text.target.value });
    }
  }
  submitForm() { // Form submit with validations
    if (this.state.cardNumber == "") {
      this.setState({ cardNumberError: 'error' });
    } else {
      this.setState({ cardNumberError: null });
    }
    if (this.state.csv == "") {
      this.setState({ cardCsvError: 'error' });
    } else {
      this.setState({ cardCsvError: null });
    }
    if (this.state.selectedMonth == 0) {

      this.setState({ cardMonthError: 'error', cardMonthErrorMessage: 'Select Month' });

    } else {

      this.setState({ cardMonthError: null });
    }



    if (this.state.cardNumber != '' && this.state.csv != '' && this.state.selectedMonth != 0 && this.state.selectedYear != 0) {

      this.setState({ isLoading: true });
    }



  }
  render() {
    return (
      <div className="App">

        <div className="row gatewayForm">
          <Col md={12} className='page-title'>Payment Gateway</Col>


        </div>
        <div className="row">
          <Col md={5}></Col>
          <Col md={5}>

            <div className="row ">


              <Col md={6} className="middleShift">
                <TextFieldCom
                  vlidationstate={this.state.cardNumberError}
                  onChange={text => this.cardNumberSetFunction(text)}
                  value={this.state.cardNumber}
                  placeholder={"Card Number"}
                  fieldtype={"text"}
                  maxLength={16}

                />

              </Col>


            </div>
            <div className="row">
              <Col md={5} className="cardType"><label>{this.state.cardType}</label></Col>
            </div>
            <div className="row">

              <Col md={6} className="middleShift">
                <TextFieldCom
                  vlidationstate={this.state.cardCsvError}
                  onChange={text => this.setCardCsv(text)}
                  value={this.state.csv}
                  placeholder={"CSV"}
                  fieldtype={"text"}
                  maxLength={3}

                />
              </Col>

            </div>
            <div className="row ">
              <Col md={3} className="middleShift">
                <DropdownCom
                  inputDropOptions={this.state.months}
                  placeholder={'Select Month'}
                  onChange={text => this.selMonthfuncion(text.value)}
                  selectedOption={0}
                  validationstate={this.state.cardMonthError}
                ></DropdownCom>

              </Col>
              <Col md={3} className="middleShift" >
                <DropdownCom
                  inputDropOptions={this.state.years}
                  placeholder={'Select Year'}
                  onChange={text => this.selYearFunction(text.value)}
                  selectedOption={0}
                  validationstate={this.state.cardYearError}
                ></DropdownCom>

              </Col>
            </div>
            <div className="row ">
              <Col md={2} className="middleShift gatewayForm">
                <ButtonCom
                  backGroundColor={"rgba(126, 217, 79, 0.77)"}
                  buttonText={"Proceed"}
                  onClick={() => this.submitForm()}
                />

              </Col>
              {this.state.isLoading === true ? (
                <div className="row ">
                  <Col md={1} className="middleShift gatewayForm">
                    <div className="loader"></div>

                  </Col>

                </div>
              ) : null}

            </div>



          </Col>

        </div>






      </div>
    );
  }
}

export default App;
