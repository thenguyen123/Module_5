import {Shape} from "./shape";
export class Rectangle extends Shape implements IArea{

    constructor(x: number, y: number,private _wight:number,private _height:number) {
        super(x, y);
    }
    area(): number {
        return this._wight*this._height;
    }

    get wight(): number {
        return this._wight;
    }

    set wight(value: number) {
        this._wight = value;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }
}