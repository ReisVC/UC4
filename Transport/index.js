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
var Transport = /** @class */ (function () {
    function Transport() {
        this.classname = '';
        this.ticketPrice = 0;
        this.capacity = 0;
    }
    return Transport;
}());
var Bus = /** @class */ (function (_super) {
    __extends(Bus, _super);
    function Bus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.classname = 'bus';
        _this.ticketPrice = 5;
        _this.capacity = 50;
        return _this;
    }
    Bus.prototype.validatePassenger = function (passenger) {
        var validate = false;
        passenger.ticketList.forEach(function (element) {
            if (element.classname === 'bus') {
                validate = true;
            }
        });
        if (validate) {
            return "The passenger ".concat(passenger.name, " can embark on the ").concat(this.classname);
        }
    };
    return Bus;
}(Transport));
var Train = /** @class */ (function (_super) {
    __extends(Train, _super);
    function Train() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.classname = 'train';
        _this.ticketPrice = 7;
        _this.capacity = 200;
        return _this;
    }
    Train.prototype.validatePassenger = function (passenger) {
        var validate = false;
        passenger.ticketList.forEach(function (element) {
            if (element.classname === 'train') {
                validate = true;
            }
        });
        if (validate) {
            return "The passenger ".concat(passenger.name, " can embark on the ").concat(this.classname);
        }
    };
    return Train;
}(Transport));
var Airplane = /** @class */ (function (_super) {
    __extends(Airplane, _super);
    function Airplane() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.classname = 'airplane';
        _this.ticketPrice = 300;
        _this.capacity = 450;
        return _this;
    }
    Airplane.prototype.validatePassenger = function (passenger) {
        var validate = false;
        passenger.ticketList.forEach(function (element) {
            if (element.classname === 'airplane') {
                validate = true;
            }
        });
        if (validate) {
            return "The passenger ".concat(passenger.name, " can embark on the ").concat(this.classname);
        }
    };
    return Airplane;
}(Transport));
var Passenger = /** @class */ (function () {
    function Passenger() {
        this.name = '';
        this.ticketList = [];
    }
    Passenger.prototype.calculatePrice = function () {
        var totalPrice = 0;
        this.ticketList.forEach(function (element) {
            totalPrice += element.ticketPrice;
        });
        return "The ".concat(this.name, " spent the total ").concat(totalPrice);
    };
    Passenger.prototype.buyTicket = function (ticket) {
        this.ticketList.push(ticket);
        return "The ".concat(this.name, " bought the ").concat(ticket.classname, " ticket");
    };
    return Passenger;
}());
var passenger = new Passenger();
passenger.name = 'Vitor';
var airplane = new Airplane();
console.log(passenger.buyTicket(airplane));
