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
var Vehicle = /** @class */ (function () {
    function Vehicle() {
        this.wheel = 2;
        this.engine = '';
        this.cc = 0;
    }
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(door, steering, trunk, wheels, engine) {
        var _this = _super.call(this) || this;
        _this.door = door;
        _this.steering = steering;
        _this.trunk = trunk;
        _this.wheels = wheels;
        _this.engine = engine;
        return _this;
    }
    return Car;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(door, steering, wheel, engine, trailer) {
        var _this = _super.call(this) || this;
        _this.door = door;
        _this.steering = steering;
        _this.wheel = wheel;
        _this.engine = engine;
        _this.trailer = trailer;
        return _this;
    }
    return Truck;
}(Vehicle));
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(handlebars, bench, wheel, engine) {
        var _this = _super.call(this) || this;
        _this.handlebars = handlebars;
        _this.bench = bench;
        _this.wheel = wheel;
        _this.engine = engine;
        return _this;
    }
    return Motorcycle;
}(Vehicle));
var Factory = /** @class */ (function () {
    function Factory() {
        this.name = '';
    }
    Factory.prototype.produceCar = function (door, steering, trunk, wheels, engine) {
        console.log("The ".concat(this.name, " produced the car!"));
        var car = new Car(door, steering, trunk, wheels, engine);
        return car;
    };
    Factory.prototype.produceMotorcycle = function (handlebars, bench, wheel, engine) {
        console.log("The ".concat(this.name, " produced the motorcycle!"));
        var moto = new Motorcycle(handlebars, bench, wheel, engine);
        return moto;
    };
    Factory.prototype.produceTruck = function (door, steering, wheel, engine, trailer) {
        console.log("The ".concat(this.name, " produced the truck!"));
        var truck = new Truck(door, steering, wheel, engine, trailer);
        return truck;
    };
    return Factory;
}());
var Mercedes = new Factory();
Mercedes.name = 'Mercedes';
console.log(Mercedes.produceCar(4, true, false, 4, 'V8'));
console.log(Mercedes.produceMotorcycle(true, true, 2, 'Motor 300cc'));
console.log(Mercedes.produceTruck(3, true, 6, 'Motor B6', 2));
