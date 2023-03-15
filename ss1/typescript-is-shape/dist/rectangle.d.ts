import { Shape } from "./shape";
export declare class Rectangle extends Shape implements IArea {
    private _wight;
    private _height;
    constructor(x: number, y: number, _wight: number, _height: number);
    area(): number;
    get wight(): number;
    set wight(value: number);
    get height(): number;
    set height(value: number);
}
