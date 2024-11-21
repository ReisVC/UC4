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
var Income = /** @class */ (function () {
    function Income() {
        this.interest = 0;
    }
    Income.prototype.calculateInterestPerMonth = function (user, month) {
        var finalInterest = user.money * Math.pow((1 + (this.interest / 100)), month);
        return "The client ".concat(user.name, " will have the total of ").concat(finalInterest.toFixed(2), " at the end of ").concat(month, " month(s) ");
    };
    return Income;
}());
var Risk;
(function (Risk) {
    Risk[Risk["High"] = 0] = "High";
    Risk[Risk["Medium"] = 1] = "Medium";
    Risk[Risk["Low"] = 2] = "Low";
})(Risk || (Risk = {}));
var FixedIncome = /** @class */ (function (_super) {
    __extends(FixedIncome, _super);
    function FixedIncome() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.interest = 1;
        _this.risk = Risk.Low;
        return _this;
    }
    return FixedIncome;
}(Income));
var VariableIncome = /** @class */ (function (_super) {
    __extends(VariableIncome, _super);
    function VariableIncome() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.interest = 1.5;
        _this.risk = Risk.Medium;
        return _this;
    }
    return VariableIncome;
}(Income));
var Multimarket = /** @class */ (function (_super) {
    __extends(Multimarket, _super);
    function Multimarket() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.interest = 2.5;
        _this.risk = Risk.High;
        return _this;
    }
    return Multimarket;
}(Income));
var User = /** @class */ (function () {
    function User() {
        this.name = '';
        this.money = 0;
    }
    return User;
}());
var fixed = new FixedIncome();
var variable = new VariableIncome();
var multimarket = new Multimarket();
var user1 = new User();
user1.name = 'Vitor';
user1.money = 1482;
console.log((fixed.calculateInterestPerMonth(user1, 5)));
console.log(variable.calculateInterestPerMonth(user1, 15));
console.log(multimarket.calculateInterestPerMonth(user1, 12));
