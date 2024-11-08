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
var Employees = /** @class */ (function () {
    function Employees() {
        this.salary = 1400;
        this.name = '';
        this.contact = '';
        this.paymentSalary = [];
    }
    return Employees;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.subject = '';
        _this.registration = '';
        return _this;
    }
    return Teacher;
}(Employees));
var Coordinator = /** @class */ (function (_super) {
    __extends(Coordinator, _super);
    function Coordinator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.section = '';
        return _this;
    }
    return Coordinator;
}(Employees));
var Director = /** @class */ (function (_super) {
    __extends(Director, _super);
    function Director() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registration = '';
        _this.departament = '';
        return _this;
    }
    return Director;
}(Employees));
var Payment = /** @class */ (function () {
    function Payment() {
    }
    Payment.prototype.makePayment = function (employee) {
        console.log("The payment of ".concat(employee.salary, " was made for the ").concat(employee.name));
        employee.paymentSalary.push("Payment ".concat(employee.salary, " on the date ").concat(new Date()));
    };
    return Payment;
}());
var teacher = new Teacher();
teacher.salary = 3000;
var director = new Director();
director.name = 'Agnaldo Timóteo';
director.salary = 4500;
var coordinator = new Coordinator();
coordinator.salary = 4000;
var payment = new Payment();
payment.makePayment(director);
console.log(director);
