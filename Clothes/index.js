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
var Season;
(function (Season) {
    Season[Season["winter"] = 0.15] = "winter";
    Season[Season["summer"] = 0.3] = "summer";
    Season[Season["autumn"] = 0.1] = "autumn";
    Season[Season["spring"] = 0.1] = "spring";
})(Season || (Season = {}));
var Clothing = /** @class */ (function () {
    function Clothing() {
        this.price = 0;
        this.season = Season.summer;
    }
    Clothing.prototype.withDiscount = function () {
        var discount = this.price * this.season;
        return this.price - discount;
    };
    return Clothing;
}());
var Shirt = /** @class */ (function (_super) {
    __extends(Shirt, _super);
    function Shirt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.size = '';
        _this.color = '';
        _this.material = '';
        return _this;
    }
    return Shirt;
}(Clothing));
var Pant = /** @class */ (function (_super) {
    __extends(Pant, _super);
    function Pant() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.size = 0;
        _this.type = '';
        return _this;
    }
    return Pant;
}(Clothing));
var Dress = /** @class */ (function (_super) {
    __extends(Dress, _super);
    function Dress() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.size = '';
        _this.type = '';
        return _this;
    }
    return Dress;
}(Clothing));
var shirt = new Shirt();
shirt.price = 200;
shirt.season = Season.autumn;
var pant = new Pant();
pant.price = 150;
pant.season = Season.winter;
var dress = new Dress();
dress.price = 250;
dress.season = Season.summer;
console.log("The price with discount is $".concat(shirt.withDiscount().toFixed(2)));
console.log("The price with discount is $".concat(pant.withDiscount().toFixed(2)));
console.log("The price with discount is $".concat(dress.withDiscount().toFixed(2)));
