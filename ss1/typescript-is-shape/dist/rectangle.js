"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const shape_1 = require("./shape");
class Rectangle extends shape_1.Shape {
    constructor(x, y, _wight, _height) {
        super(x, y);
        this._wight = _wight;
        this._height = _height;
    }
    area() {
        return this._wight * this._height;
    }
    get wight() {
        return this._wight;
    }
    set wight(value) {
        this._wight = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
}
exports.Rectangle = Rectangle;
//# sourceMappingURL=rectangle.js.map