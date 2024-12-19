// Nomes: Vitor Reis & Lucas Willian
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
// Trabalho Avaliativo Final POO
var Character = /** @class */ (function () {
    function Character() {
    }
    return Character;
}()); // Classe Abstrata
var EliteSniper = /** @class */ (function (_super) {
    __extends(EliteSniper, _super);
    function EliteSniper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EliteSniper;
}(Character));
var Medic = /** @class */ (function (_super) {
    __extends(Medic, _super);
    function Medic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Medic;
}(Character));
var Explorer = /** @class */ (function (_super) {
    __extends(Explorer, _super);
    function Explorer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Explorer;
}(Character));
var Survivalist = /** @class */ (function (_super) {
    __extends(Survivalist, _super);
    function Survivalist() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Survivalist;
}(Character));
var Cooker = /** @class */ (function (_super) {
    __extends(Cooker, _super);
    function Cooker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cooker;
}(Character));
var Cientist = /** @class */ (function (_super) {
    __extends(Cientist, _super);
    function Cientist() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cientist;
}(Character));
var Inventory = /** @class */ (function () {
    function Inventory() {
    }
    return Inventory;
}()); // Lista de Itens e Equipamentos
var Equipment = /** @class */ (function () {
    function Equipment() {
    }
    return Equipment;
}());
var Items = /** @class */ (function () {
    function Items() {
    }
    return Items;
}());
var Consumables = /** @class */ (function (_super) {
    __extends(Consumables, _super);
    function Consumables() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Consumables;
}(Items)); // Especialização dos Itens em acessórios e armas
var Accessories = /** @class */ (function (_super) {
    __extends(Accessories, _super);
    function Accessories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Accessories;
}(Items));
var Weapons = /** @class */ (function (_super) {
    __extends(Weapons, _super);
    function Weapons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Weapons;
}(Items));
var Scenarios = /** @class */ (function () {
    function Scenarios() {
    }
    return Scenarios;
}()); // Cenários onde estarão os personagens
var Zombie = /** @class */ (function () {
    function Zombie() {
    }
    return Zombie;
}());
var Normal = /** @class */ (function (_super) {
    __extends(Normal, _super);
    function Normal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Normal;
}(Zombie));
var Runner = /** @class */ (function (_super) {
    __extends(Runner, _super);
    function Runner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Runner;
}(Zombie));
var Tank = /** @class */ (function (_super) {
    __extends(Tank, _super);
    function Tank() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tank;
}(Zombie));
var Explosive = /** @class */ (function (_super) {
    __extends(Explosive, _super);
    function Explosive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Explosive;
}(Zombie));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Zombie));
var Acid = /** @class */ (function (_super) {
    __extends(Acid, _super);
    function Acid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Acid;
}(Zombie));
