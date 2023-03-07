// @ts-ignore
export class Calculator implements IResult{
 private _number1:number;
 private _number2:number;
 private _choose?:string;


  get number1(): number {
    return this._number1;
  }

  set number1(value: number) {
    this._number1 = value;
  }

  get number2(): number {
    return this._number2;
  }

  set number2(value: number) {
    this._number2 = value;
  }

  get choose(): string {
    return this._choose;
  }

  set choose(value: string) {
    this._choose = value;
  }

  constructor(number1: number, number2: number, choose: string) {
    this._number1 = number1;
    this._number2 = number2;
    this._choose = choose;
  }
  result(): number {
    switch (this.choose) {
      case "add":
        return this.number1+this.number2
    }
  }
}
