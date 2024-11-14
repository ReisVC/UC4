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
var Account = /** @class */ (function () {
    function Account() {
        this.user = '';
        this.totalAccount = 1000;
    }
    Account.prototype.Withdraw = function (value) {
        return '';
    };
    return Account;
}());
var Saving_Account = /** @class */ (function (_super) {
    __extends(Saving_Account, _super);
    function Saving_Account() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.interestMonth = 0.05;
        _this.withdrawalLimit = 600;
        return _this;
    }
    Saving_Account.prototype.Withdraw = function (value) {
        if (value < this.totalAccount && value < this.withdrawalLimit) {
            this.totalAccount -= value;
            return "The value of ".concat(value, " was withdrawn of your account!");
        }
        else {
            return "Operation denied, insufficient balance or withdrawal limit reached, try later!";
        }
    };
    Saving_Account.prototype.calculateInterestMonth = function () {
        var accountWithInterest = this.totalAccount + (this.totalAccount * this.interestMonth);
        return "The value of account with interest on month is ".concat(accountWithInterest);
    };
    Saving_Account.prototype.transferMoney = function (value, account) {
        if (value < this.totalAccount) {
            return "Operation denied";
        }
        else {
            account.totalAccount += value;
            this.totalAccount -= value;
            console.log("Value of $".concat(value, " transferred to ").concat(account.user));
        }
    };
    return Saving_Account;
}(Account));
var Current_Account = /** @class */ (function (_super) {
    __extends(Current_Account, _super);
    function Current_Account() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.withdrawalLimit = 1500;
        return _this;
    }
    Current_Account.prototype.Withdraw = function (value) {
        if (value < this.totalAccount && value < this.withdrawalLimit) {
            this.totalAccount -= value;
            return "The value of ".concat(value, " was withdrawn of your account!");
        }
        else {
            return "Operation denied, insufficient balance or withdrawal limit reached, try later!";
        }
    };
    Current_Account.prototype.transferMoney = function (value, account) {
        if (value > this.totalAccount) {
            return "Operation denied";
        }
        else {
            account.totalAccount += value;
            this.totalAccount -= value;
            console.log("Value of $".concat(value, " transferred to ").concat(account.user));
        }
    };
    return Current_Account;
}(Account));
var Investment_Account = /** @class */ (function (_super) {
    __extends(Investment_Account, _super);
    function Investment_Account() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.interestMonth = 0.15;
        return _this;
    }
    Investment_Account.prototype.Withdraw = function (value) {
        if (value <= this.totalAccount) {
            this.totalAccount -= value;
            return "The value of ".concat(value, " was withdrawn of your account!");
        }
        else {
            return "Operation denied, insufficient balance or withdrawal limit reached, try later!";
        }
    };
    Investment_Account.prototype.calculateInterestMonth = function () {
        var accountWithInterest = this.totalAccount + (this.totalAccount * this.interestMonth);
        return "The value of account with interest on month is ".concat(accountWithInterest);
    };
    return Investment_Account;
}(Account));
var vitorAccount1 = new Saving_Account();
vitorAccount1.user = 'Vitor';
console.log(vitorAccount1.calculateInterestMonth());
var vitorAccount2 = new Current_Account();
vitorAccount2.user = 'Vitor';
var vitorAccount3 = new Investment_Account();
vitorAccount3.user = 'Vitor';
console.log(vitorAccount3);
vitorAccount2.transferMoney(200, vitorAccount3);
console.log(vitorAccount3);
