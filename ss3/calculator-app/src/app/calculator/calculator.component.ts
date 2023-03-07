import {Component, OnInit} from '@angular/core';

import {Calculator} from "./calculator";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  number1: number;
  number2: number;
  choose: string;
  result: number;

  resultCalculator() {
    switch (this.choose) {
      case "add":
        this.result = this.number1 + this.number2
        break;
      case "subtraction":
        this.result = this.number1 - this.number2
        break;
        case "multiplication":
        this.result = this.number1 * this.number2
        break;
        case "division":
          if(this.number2==0){
            break;
          }
          this.result=this.number1 / this.number2
          break;
      default:
        this.result=0;
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}

