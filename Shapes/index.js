var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shapes = /** @class */ (function () {
    function Shapes() {
        this.name = '';
        this.color = '';
    }
    Shapes.prototype.calculateArea = function () {
        return 0;
    };
    return Shapes;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.radius = 0;
        return _this;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * (this.radius * this.radius);
    };
    return Circle;
}(Shapes));
var Triangle = /** @class */ (function () {
    function Triangle() {
        this.base = 0;
        this.height = 0;
    }
    Triangle.prototype.calculateArea = function () {
        return ((this.base * this.height) / 2);
    };
    return Triangle;
}());
var Retangle = /** @class */ (function () {
    function Retangle() {
        this.base = 0;
        this.height = 0;
    }
    Retangle.prototype.calculateArea = function () {
        return this.base * this.height;
    };
    return Retangle;
}());
var circle = new Circle();
circle.radius = 20;
console.log(circle.calculateArea().toFixed(2));
var retangle = new Retangle();
retangle.base = 10;
retangle.height = 20;
console.log(retangle.calculateArea().toFixed(2));
var triangle = new Triangle();
triangle.base = 10;
triangle.height = 20;
console.log(triangle.calculateArea().toFixed(2));
