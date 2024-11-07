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
var Character = /** @class */ (function () {
    function Character() {
        this.name = '';
        this.hp = 0;
        this.strenght = 0;
        this.defense = 0;
    }
    Character.prototype.attack = function () {
        console.log("The character ".concat(this.name, " attacked!"));
    };
    Character.prototype.defend = function () {
        console.log("The character ".concat(this.name, " defended!"));
    };
    Character.prototype.escape = function () {
        console.log("The character ".concat(this.name, " ran away!"));
    };
    Character.prototype.useItem = function () {
        console.log("The character ".concat(this.name, " used the item!"));
    };
    Character.prototype.upLevel = function () {
        console.log("The character ".concat(this.name, " leveled up!"));
    };
    Character.prototype.castSkill = function () {
        console.log("The character ".concat(this.name, " conjured the skill!"));
    };
    return Character;
}());
var Bard = /** @class */ (function (_super) {
    __extends(Bard, _super);
    function Bard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bard.prototype.castSkill = function () {
        console.log("The ".concat(this.name, " played the berimbau"));
    };
    Bard.prototype.playEletricGuitar = function () {
        console.log("The ".concat(this.name, " played the greatest guitar solo of the world!"));
    };
    return Bard;
}(Character));
var Paladin = /** @class */ (function (_super) {
    __extends(Paladin, _super);
    function Paladin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Paladin.prototype.castSkill = function () {
        console.log("The ".concat(this.name, " used the divine light"));
    };
    return Paladin;
}(Character));
var Doppelganger = /** @class */ (function (_super) {
    __extends(Doppelganger, _super);
    function Doppelganger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Doppelganger.prototype.castSkill = function () {
        console.log("The ".concat(this.name, " played the berimbau"));
    };
    Doppelganger.prototype.transform = function (character) {
        if (character == undefined) {
            console.log("The ".concat(this.name, " transforms in Silvio Santos tad\u00E1\u00E1\u00E1\u00E1\u00E1\u00E1!"));
        }
        else {
            console.log("The character ".concat(this.name, " transforms in ").concat(character, " tad\u00E1\u00E1\u00E1\u00E1\u00E1\u00E1"));
        }
    };
    return Doppelganger;
}(Character));
var bard = new Bard();
bard.name = 'Jimmy Hendrix';
bard.castSkill();
bard.playEletricGuitar();
bard.defend();
var paladin = new Paladin();
paladin.name = 'Leroy Jenckens';
paladin.castSkill();
var doppelganger = new Doppelganger();
doppelganger.name = 'Ney Matogrosso';
doppelganger.castSkill();
doppelganger.transform('P. Diddy');
