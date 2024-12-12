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
var Moneylender = /** @class */ (function () {
    function Moneylender() {
        this.name = '';
        this.adress = '';
        this.value = 0;
        this.wallet = 0;
        this.wife_husb = false;
        this.parent = true;
        this.heritage = true;
    }
    Moneylender.prototype.setWallet = function (newValue) {
        this.wallet += newValue;
    };
    Moneylender.prototype.setName = function (newName) {
        this.name = newName;
    };
    Moneylender.prototype.setValue = function (newValue) {
        this.value = newValue;
    };
    Moneylender.prototype.getValue = function () {
        return this.value;
    };
    Moneylender.prototype.getName = function () {
        return this.name;
    };
    Moneylender.prototype.getWallet = function () {
        return this.wallet;
    };
    Moneylender.prototype.lessWallet = function (value) {
        this.wallet -= value;
    };
    return Moneylender;
}());
var Elderly = /** @class */ (function (_super) {
    __extends(Elderly, _super);
    function Elderly() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.children = undefined;
        return _this;
    }
    Elderly.prototype.askmoney = function () {
        if (this.children || this.parent || this.wife_husb || this.heritage) {
            return true;
        }
        else {
            return false;
        }
    };
    return Elderly;
}(Moneylender));
var Young = /** @class */ (function (_super) {
    __extends(Young, _super);
    function Young() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pet = false;
        return _this;
    }
    Young.prototype.askmoney = function () {
        if (this.parent || this.wife_husb || this.pet || this.heritage) {
            return true;
        }
        else {
            return false;
        }
    };
    return Young;
}(Moneylender));
var LoanShark = /** @class */ (function () {
    function LoanShark() {
        this.name = '';
        this.money = 0;
        this.loanList = [];
    }
    LoanShark.prototype.setName = function (newName) {
        this.name = newName;
    };
    LoanShark.prototype.getName = function () {
        return this.name;
    };
    LoanShark.prototype.setLoan = function (loan) {
        this.loanList.push(loan);
    };
    LoanShark.prototype.getLoan = function () {
        return this.loanList;
    };
    LoanShark.prototype.getMoney = function () {
        return this.money;
    };
    LoanShark.prototype.setMoney = function (newValue) {
        this.money += newValue;
    };
    LoanShark.prototype.lessMoney = function (valueToMinus) {
        this.money -= valueToMinus;
    };
    return LoanShark;
}());
function threat(value) {
    switch (value) {
        case 0:
            return "Have I told you that you love your family this week?";
            break;
        case 1:
            return "It's better to take a look at your cars brakes, something might happen!";
            break;
        case 2:
            return "Be careful with that cigarette, smoking it could end up killing you!";
            break;
        case 3:
            return "Are you sure you didn't leave the stove on before leaving the house?";
            break;
        default: return "If you like to walk, it's better pay your debts";
    }
}
var Collector = /** @class */ (function () {
    function Collector() {
        this.nickname = 'The collector';
        this.loanshark = new LoanShark;
    }
    Collector.prototype.setLoanShark = function (newLoan) {
        this.loanshark = newLoan;
    };
    Collector.prototype.collectDebt = function (client) {
        var valueToCollect = client.getValue() * 1.3;
        if (client.getWallet() > valueToCollect) {
            this.loanshark.setMoney(valueToCollect);
            client.lessWallet(valueToCollect);
            return "Your family are safe!";
        }
        else {
            var randomNum = Math.floor(Math.random() * 4);
            return threat(randomNum);
        }
    };
    return Collector;
}());
var Loan = /** @class */ (function () {
    function Loan() {
    }
    Loan.prototype.makeLoan = function (client, loanshark) {
        if (client.askmoney()) {
            var loan_1 = "The ".concat(client.getName(), " asked for ").concat(client.getValue(), " to ").concat(loanshark.getName());
            loanshark.lessMoney(client.getValue());
            loanshark.setLoan(loan_1);
            return "Loan was made succesfully!";
        }
        else {
            return "Insufficient respect! Get a marriage!";
        }
    };
    return Loan;
}());
var young = new Young();
young.setName('Vitor');
young.setValue(3000);
young.setWallet(4000);
var shark = new LoanShark();
shark.setName('Papasito');
shark.setMoney(100000);
var collector = new Collector();
collector.setLoanShark(shark);
var loan = new Loan();
console.log(loan.makeLoan(young, shark));
console.log(shark.getLoan());
console.log(shark.getMoney());
console.log(collector.collectDebt(young));
console.log(shark.getMoney());
