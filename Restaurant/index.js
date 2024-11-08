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
var Food = /** @class */ (function () {
    function Food() {
        this.price = 0;
        this.ingredients = [];
    }
    return Food;
}());
var Yakisoba = /** @class */ (function (_super) {
    __extends(Yakisoba, _super);
    function Yakisoba() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = '';
        return _this;
    }
    return Yakisoba;
}(Food));
var Pizza = /** @class */ (function (_super) {
    __extends(Pizza, _super);
    function Pizza() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.flavor = '';
        return _this;
    }
    return Pizza;
}(Food));
var Size;
(function (Size) {
    Size[Size["medium"] = 0] = "medium";
    Size[Size["large"] = 1] = "large";
})(Size || (Size = {}));
var Parmegiana = /** @class */ (function (_super) {
    __extends(Parmegiana, _super);
    function Parmegiana() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = '';
        _this.size = Size.medium;
        return _this;
    }
    return Parmegiana;
}(Food));
var Client = /** @class */ (function () {
    function Client() {
        this.order = [];
        this.name = '';
        this.totalAcount = 0;
    }
    Client.prototype.placeOrder = function (foods) {
        for (var _i = 0, foods_1 = foods; _i < foods_1.length; _i++) {
            var item = foods_1[_i];
            this.totalAcount += item.price;
            this.order = foods;
        }
    };
    Client.prototype.payment = function () {
        console.log("The ".concat(this.name, " made payment of $").concat(this.totalAcount, "!"));
        this.totalAcount = 0;
        this.order = [];
    };
    return Client;
}());
var parmegiana = new Parmegiana();
parmegiana.price = 50;
parmegiana.description = 'fried meat—typically chicken or veal—topped with marinara sauce and melted mozzarella cheese, then baked until golden and bubbling.';
parmegiana.ingredients = ['Parme', 'Giana'];
var yakisoba = new Yakisoba();
yakisoba.price = 80;
yakisoba.ingredients = ['pasta', 'sauce', 'vegetables'];
yakisoba.description = 'Pasta with vegetables, shoyu and more and more thing to the plate look better';
var pizza = new Pizza();
pizza.price = 100;
pizza.flavor = 'pepperoni';
pizza.ingredients = ['pasta', 'pepperoni', 'sauce', 'cheese a lot'];
var foods = [
    parmegiana, yakisoba, pizza
];
var client = new Client();
client.name = 'DOUGRAS';
client.placeOrder(foods);
console.log(client);
client.payment();
console.log(client.order, client.totalAcount);
