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
var Client = /** @class */ (function () {
    function Client() {
        this.name = "";
        this.contact = "";
        this.invoiceList = [];
    }
    Client.prototype.setName = function (newName) {
        this.name = newName;
    };
    Client.prototype.getName = function () {
        return this.name;
    };
    Client.prototype.setContact = function (newContact) {
        this.contact = newContact;
    };
    Client.prototype.getContact = function () {
        return this.contact;
    };
    Client.prototype.addInvoice = function (invoice) {
        this.invoiceList.push(invoice);
    };
    Client.prototype.getInvoice = function () {
        return this.invoiceList;
    };
    return Client;
}());
var Vehicle = /** @class */ (function () {
    function Vehicle(model, plate, year, color) {
        this.model = model;
        this.color = color;
        this.plate = plate;
        this.year = year;
    }
    return Vehicle;
}());
var CommomClient = /** @class */ (function (_super) {
    __extends(CommomClient, _super);
    function CommomClient(vehicle) {
        var _this = _super.call(this) || this;
        _this.vehicle = vehicle;
        return _this;
    }
    CommomClient.prototype.getVehicle = function () {
        return this.vehicle;
    };
    CommomClient.prototype.setVehicle = function (newVehicle) {
        this.vehicle = newVehicle;
    };
    return CommomClient;
}(Client));
var FleetClient = /** @class */ (function (_super) {
    __extends(FleetClient, _super);
    function FleetClient() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.vehicleList = [];
        return _this;
    }
    FleetClient.prototype.setVehicle = function (vehicles) {
        var _this = this;
        vehicles.forEach(function (vehicle) {
            _this.vehicleList.push(vehicle);
        });
    };
    FleetClient.prototype.getVehicle = function (i) {
        return this.vehicleList[i];
    };
    return FleetClient;
}(Client));
var Type;
(function (Type) {
    Type[Type["regular"] = 0] = "regular";
    Type[Type["added"] = 1] = "added";
    Type[Type["alcohol"] = 2] = "alcohol";
})(Type || (Type = {}));
var Fuel = /** @class */ (function () {
    function Fuel(type, quantity) {
        this.type = null;
        this.price = 0;
        this.quantity = 0;
        this.type = type;
        this.quantity = quantity;
    }
    Fuel.prototype.getType = function () {
        if (this.type === Type.regular) {
            return "regular gasoline";
        }
        else if (this.type === Type.added) {
            return "added gasoline";
        }
        else {
            return "alcohol";
        }
    };
    Fuel.prototype.getPrice = function () {
        if (this.type === Type.regular) {
            this.price = 5.5;
            return this.price;
        }
        else if (this.type === Type.added) {
            this.price = 6;
            return this.price;
        }
        else {
            this.price = 4.5;
            return this.price;
        }
    };
    Fuel.prototype.reduceGas = function (quantity) {
        this.quantity -= quantity;
    };
    Fuel.prototype.getQuantity = function () {
        return this.quantity;
    };
    return Fuel;
}());
var Invoice = /** @class */ (function () {
    function Invoice(id, value, client, vehicle) {
        this.id = 0;
        this.issueDate = new Date();
        this.value = 0;
        this.id = id;
        this.value = value;
        this.client = client;
        this.vehicle = vehicle;
    }
    return Invoice;
}());
var Suplly = /** @class */ (function () {
    function Suplly(client, fuel, vehicle, quantity) {
        this.client = client;
        this.fuel = fuel;
        this.quantity = quantity;
        this.vehicle = vehicle;
    }
    Suplly.prototype.calculatePrice = function () {
        return this.fuel.getPrice() * this.quantity;
    };
    Suplly.prototype.paymentFuel = function (id) {
        var invoice = new Invoice(id, this.fuel.getPrice(), this.client, this.vehicle);
        this.client.addInvoice(invoice);
        this.fuel.reduceGas(this.quantity);
        return "The ".concat(this.client.getName(), " filled up the vehicle and paid ").concat(this.calculatePrice(), " for ").concat(this.quantity, " liters for ").concat(this.fuel.getType());
    };
    return Suplly;
}());
var vehicle1 = new Vehicle("VW Gol", "ABC-1763", 2003, "Red");
var vehicle2 = new Vehicle("Fiat Palio Attractive", "IUM-5H54", 2013, "Silver");
var vehicle3 = new Vehicle("Honda Fit", "ICJ-4445", 2007, "Gray");
var vehicle4 = new Vehicle("Ford Fiesta", "MJS-2349", 1998, "White");
var client1 = new CommomClient(vehicle1);
client1.setName('Vitor');
client1.setVehicle(vehicle1);
var client2 = new FleetClient();
client2.setName('Vitória');
client2.setVehicle([vehicle2, vehicle3, vehicle4]);
var gas = new Fuel(Type.regular, 600);
var alcohol = new Fuel(Type.added, 400);
var added = new Fuel(Type.added, 500);
var suplly = new Suplly(client1, gas, client1.getVehicle(), 10);
var supply2 = new Suplly(client2, added, client2.getVehicle(2), 250);
console.log(supply2.paymentFuel(23141));
console.log(added.getQuantity());
console.log(suplly.paymentFuel(143134));
console.log(client1.getInvoice());
