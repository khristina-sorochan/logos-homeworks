import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  currNumber: number = 0;
  operator: string;
  operatorSet: boolean = false;
  equalsPressed: boolean = false;
  lastNumber: null = null;

  validate = (inp) => {
    inp.value = inp.value
      .replace(/[^\d,.]*/g, "")
      .replace(/([,.])[,.]+/g, "$1")
      .replace(/^[^\d]*(\d+([.,]\d{0,5})?).*$/g, "$1");
  };

  add = function (x, y) {
    return x + y;
  };

  subtract = function (x, y) {
    return x - y;
  };

  multiply = function (x, y) {
    return x * y;
  };

  divide = function (x, y) {
    if (y == 0) {
      // currNumber.style.fontSize = "35px";
      return "Це не число";
    }
    return x / y;
  };

  setVal = (val) => {
    this.currNumber = val;
  };

  clearNumbers = () => {
    this.lastNumber = null;
    this.operatorSet = false;
    this.equalsPressed = false;
    this.setVal("0");
    console.log("clear");
  };

  invertNum = () => {
    if (this.currNumber != 0) {
      this.currNumber *= -1;
      this.setVal(this.currNumber);
      console.log("invert");
    }
  };

  profitNum = () => {
    this.currNumber /= 100;
    this.setVal(this.currNumber);
    console.log("profit");
  };

  numberClick = (number: string) => {
    if (this.currNumber == 0 && number == ",")
      this.setVal(this.currNumber + number);
    if (this.currNumber == 0 || this.operatorSet == true || this.equalsPressed == true) {
      this.setVal("");
      this.operatorSet = false;
    }
    this.setVal(this.currNumber + number);
    this.validate(this.currNumber);
    console.log(`button: ${number}`);
  };

  setOperator = function (newOperator) {
    if (newOperator == "=") {
      this.equalsPressed = true;
      this.calculate();
      return;
    }

    if (!this.equalsPressed) this.calculate();
    this.equalsPressed = false;
    this.operator = newOperator;
    this.operatorSet = true;
    console.log(`operator: ${this.operator}`);
    this.lastNumber = parseFloat(this.currNumber.replace(/,/, "."));
  };

  calculate = function () {
    if (!this.operator || this.lastNumber == null) return;
    let newCurrNumber = parseFloat(this.currNumber.replace(/,/, "."));
    let newVal = 0;
    switch (this.operator) {
      case "+":
        newVal = this.add(this.lastNumber, newCurrNumber);
        break;
      case "-":
        newVal = this.subtract(this.lastNumber, newCurrNumber);
        break;
      case "*":
        newVal = this.multiply(this.lastNumber, newCurrNumber);
        break;
      case "/":
        newVal = this.divide(this.lastNumber, newCurrNumber);
        break;
    }
    this.setVal(newVal);
    this.lastNumber = newVal;
    console.log(`result: ${this.currNumber}`);
  };


  constructor() { }

  ngOnInit(): void {
  }


}
