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
var Character = /** @class */ (function () {
    function Character() {
    }
    Character.prototype.attack = function (enemies) {
        return "".concat(this.name, " attacked the zombie ").concat(enemies.name);
    };
    Character.prototype.defend = function (enemies) {
        return "The ".concat(this.name, " defend himself from the zombie ").concat(enemies.name);
    };
    Character.prototype.escape = function () {
        return "The ".concat(this.name, " was escaped from horde of zombies");
    }; // Classe Abstrata
    return Character;
}());
var EliteSniper = /** @class */ (function (_super) {
    __extends(EliteSniper, _super);
    function EliteSniper(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    EliteSniper.prototype.ability = function () {
        return 'The Sniper used the special shoot. One bullet, One Kill!';
    };
    return EliteSniper;
}(Character));
var Medic = /** @class */ (function (_super) {
    __extends(Medic, _super);
    function Medic(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Medic.prototype.ability = function () {
        return 'The Doctor used the healing skill. Merthiolate.';
    };
    return Medic;
}(Character));
var Explorer = /** @class */ (function (_super) {
    __extends(Explorer, _super);
    function Explorer(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Explorer.prototype.ability = function () {
        return 'The Explorer used the recon skill. Look the little airplane.';
    };
    return Explorer;
}(Character));
var Survivalist = /** @class */ (function (_super) {
    __extends(Survivalist, _super);
    function Survivalist(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Survivalist.prototype.ability = function () {
        return 'The Survivalist used the camping skill. He had a tent set up.';
    };
    return Survivalist;
}(Character));
var Cooker = /** @class */ (function (_super) {
    __extends(Cooker, _super);
    function Cooker(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Cooker.prototype.ability = function () {
        return "The Cooker used the eggs skill. Roast lamb testicles.";
    };
    return Cooker;
}(Character));
var Cientist = /** @class */ (function (_super) {
    __extends(Cientist, _super);
    function Cientist(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Cientist.prototype.ability = function () {
        return 'The Cientist used the chemical skill. He creates Trembomb.';
    };
    return Cientist;
}(Character));
var Squad = /** @class */ (function () {
    function Squad(medic, cooker, sniper, survivalist, explorer, cientist) {
        this.listChar = [];
        this.medic = medic;
        this.cooker = cooker;
        this.sniper = sniper;
        this.survivalist = survivalist;
        this.explorer = explorer;
        this.cientist = cientist;
        this.listChar.push(medic, cooker, sniper, survivalist, explorer, cientist);
    }
    Squad.prototype.randChar = function () {
        var rand = Math.floor(Math.random() * this.listChar.length);
        return this.listChar[rand];
    };
    Squad.prototype.removeCharacter = function () {
    };
    return Squad;
}());
var Scenario = /** @class */ (function () {
    function Scenario(biome, description) {
        this.biome = biome;
        this.description = description;
    }
    return Scenario;
}()); // Cenários onde estarão os personagens
var Battlefield = /** @class */ (function () {
    function Battlefield() {
        this.listScene = [];
        this.listZombies = [];
        this.listSquad = [];
    }
    Battlefield.prototype.randScene = function () {
        var rand = Math.floor(Math.random() * this.listScene.length);
        return this.listScene[rand];
    };
    Battlefield.prototype.randZombie = function () {
        var rand = Math.floor(Math.random() * this.listZombies.length);
        return this.listZombies[rand];
    };
    Battlefield.prototype.charSquad = function () {
        var rand = Math.floor(Math.random() * this.listSquad.length);
        var squad = this.listSquad[rand];
        return squad.randChar();
    };
    Battlefield.prototype.round = function () {
        var _this = this;
        var scene = this.randScene();
        console.log(scene);
        for (var i = 0; i < 10; i++) {
            setTimeout(function () {
                var randChar = Math.floor(Math.random() * 2);
                var randAttack = Math.floor(Math.random() * 5);
                if (randChar == 0) {
                    if (randAttack <= 2) {
                        console.log(_this.randZombie().attack(_this.charSquad()));
                    }
                    else {
                        console.log(_this.randZombie().ability());
                    }
                }
                else {
                    if (randAttack <= 2) {
                        console.log(_this.charSquad().attack(_this.randZombie()));
                    }
                    else if (randAttack == 3) {
                        console.log(_this.charSquad().ability());
                    }
                    else {
                        var charSelected = _this.charSquad();
                        console.log(charSelected.escape());
                        _this.listSquad;
                    }
                }
            }, 500 * i);
        }
    };
    return Battlefield;
}());
var Zombie = /** @class */ (function () {
    function Zombie() {
    }
    Zombie.prototype.attack = function (char) {
        return "The Zombie ".concat(this.name, " attacked ").concat(char.name);
    };
    return Zombie;
}());
var Normal = /** @class */ (function (_super) {
    __extends(Normal, _super);
    function Normal(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Normal.prototype.ability = function () {
        return "The zombie ".concat(this.name, " scratches.");
    };
    return Normal;
}(Zombie));
var Runner = /** @class */ (function (_super) {
    __extends(Runner, _super);
    function Runner(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Runner.prototype.ability = function () {
        return "The Runner ".concat(this.name, " does \"Katchau\" for the battlefield.");
    };
    return Runner;
}(Zombie));
var Tank = /** @class */ (function (_super) {
    __extends(Tank, _super);
    function Tank(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Tank.prototype.ability = function () {
        return "The Tank Zombie defends his territory";
    };
    return Tank;
}(Zombie));
var Explosive = /** @class */ (function (_super) {
    __extends(Explosive, _super);
    function Explosive(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Explosive.prototype.ability = function () {
        return "Instead of him doing \"Katchau\" he does \"kaboom\"";
    };
    return Explosive;
}(Zombie));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Dog.prototype.ability = function () {
        return "The Dog Zombie was bite.";
    };
    return Dog;
}(Zombie));
var Acid = /** @class */ (function (_super) {
    __extends(Acid, _super);
    function Acid(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Acid.prototype.ability = function () {
        return "The Acid Zombie gets high.";
    };
    return Acid;
}(Zombie));
var cooker = new Cooker('Sponge Bob');
var medic = new Medic('Desmond Doss');
var sniper = new EliteSniper('John Wick');
var survivalist = new Survivalist('Rambo');
var explorer = new Explorer('Bear Grills');
var cientist = new Cientist('Heisemberg');
var zombie = new Normal('Michael Jackson');
var runner = new Runner('Thunder Marquinhos');
var tank = new Tank('Scherman');
var explosive = new Explosive('Kamikaze');
var dog = new Dog('Marley');
var acid = new Acid('Ilon Mãsk');
var city = new Scenario("Urban", "City Center");
var forest = new Scenario("Forest", "Large Dense Forest");
var farm = new Scenario("Farm Berry", "Rural Territory");
var squad = new Squad(medic, cooker, sniper, survivalist, explorer, cientist);
var battle = new Battlefield();
battle.listScene.push(city, forest, farm);
battle.listZombies.push(zombie, runner, tank, explosive, dog, acid);
battle.listSquad.push(squad);
// console.log(battle.round())
// console.log(battle.randZombie())
// console.log(battle.randScene())
// console.log(battle.randSquad())
battle.round();
