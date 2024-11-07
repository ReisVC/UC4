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
var Animal = /** @class */ (function () {
    function Animal() {
        this.name = '';
        this.species = '';
    }
    Animal.prototype.makeSound = function (sound) {
    };
    return Animal;
}());
var Type;
(function (Type) {
    Type[Type["flying"] = 0] = "flying";
    Type[Type["terrestrial"] = 1] = "terrestrial";
    Type[Type["aquatic"] = 2] = "aquatic";
})(Type || (Type = {}));
var Mammal = /** @class */ (function (_super) {
    __extends(Mammal, _super);
    function Mammal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.habits = '';
        _this.member = 0;
        _this.breastfeeds = true;
        _this.type = Type.terrestrial;
        return _this;
    }
    Mammal.prototype.makeSound = function (sound) {
        console.log("The animal ".concat(this.name, " make the sound ").concat(sound));
    };
    Mammal.prototype.getInfo = function () {
        return "Name: ".concat(this.name, " \nSpecie: ").concat(this.species, " \nMembers name: ").concat(this.member);
    };
    Mammal.prototype.toRun = function () {
        if (this.type == Type.aquatic) {
            return "The ".concat(this.name, " is swimming a lot!");
        }
        else if (this.type == Type.terrestrial) {
            return "The ".concat(this.name, " is running a lot!");
        }
        else {
            return "The ".concat(this.name, " is flying in everywhere!");
        }
    };
    return Mammal;
}(Animal));
var mammal = new Mammal;
mammal.name = 'Bat';
mammal.type = Type.aquatic;
console.log(mammal.toRun());
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.beakType = '';
        _this.wingspan = 0;
        return _this;
    }
    Bird.prototype.makeSound = function (sound) {
        console.log("The bird ".concat(this.name, " make the sound ").concat(sound));
    };
    Bird.prototype.fly = function () {
        return "The bird ".concat(this.name, " is flying!");
    };
    Bird.prototype.getInfo = function () {
        return "Bird name: ".concat(this.name, " \nSpecie: ").concat(this.species, " \nWingspan: ").concat(this.wingspan);
    };
    return Bird;
}(Animal));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.feedingType = '';
        _this.aquariumType = 0;
        return _this;
    }
    Fish.prototype.makeSound = function (sound) {
        console.log("The fish ".concat(this.name, " make the sound ").concat(sound));
    };
    Fish.prototype.toPlay = function () {
        return "The ".concat(this.name, " is playing a lot!");
    };
    return Fish;
}(Animal));
