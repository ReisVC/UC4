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
        this.name = '';
        this.cnpj = '';
        this.adress = '';
        this.invoiceList = [];
    }
    Client.prototype.setName = function (newName) {
        this.name = newName;
    };
    Client.prototype.getName = function () {
        console.log(this.name);
    };
    Client.prototype.setCnpj = function (newCnpj) {
        this.cnpj = newCnpj;
    };
    Client.prototype.getCnpj = function () {
        console.log(this.cnpj);
    };
    Client.prototype.pushInvoice = function (invoice) {
        this.invoiceList.push(invoice);
    };
    Client.prototype.getInvoiceList = function () {
        return this.invoiceList;
    };
    return Client;
}());
var Card = /** @class */ (function () {
    function Card(flag, cardNumber, expiration, cvv) {
        this.flag = flag;
        this.cardNumber = cardNumber;
        this.expiration = expiration;
        this.cvv = cvv;
    }
    Card.prototype.getCard = function () {
        return "Number: ".concat(this.cardNumber, " \nFlag: ").concat(this.flag, " \nExpiration Date: ").concat(this.expiration, " \nCVV: ").concat(this.cvv);
    };
    return Card;
}());
var ContractorClient = /** @class */ (function (_super) {
    __extends(ContractorClient, _super);
    function ContractorClient() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredCard = null;
        _this.discount = 5;
        return _this;
    }
    return ContractorClient;
}(Client));
var SporadicClient = /** @class */ (function (_super) {
    __extends(SporadicClient, _super);
    function SporadicClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SporadicClient;
}(Client));
var TypeLoad;
(function (TypeLoad) {
    TypeLoad[TypeLoad["Dry"] = 0] = "Dry";
    TypeLoad[TypeLoad["Refrigerated"] = 1] = "Refrigerated";
    TypeLoad[TypeLoad["Dangerous"] = 2] = "Dangerous";
})(TypeLoad || (TypeLoad = {}));
var Status;
(function (Status) {
    Status[Status["Available"] = 0] = "Available";
    Status[Status["Ocuppied"] = 1] = "Ocuppied";
    Status[Status["Maintenance"] = 2] = "Maintenance";
})(Status || (Status = {}));
var Load = /** @class */ (function () {
    function Load() {
        this.type = null;
        this.weight = 0;
        this.bulk = 0;
    }
    Load.prototype.registerLoad = function (type, weight, bulk) {
        this.type = type;
        this.weight = weight;
        this.bulk = bulk;
    };
    return Load;
}());
var Vehicle = /** @class */ (function () {
    function Vehicle() {
        this.load = null;
        this.status = null;
        this.plate = '';
        this.model = '';
    }
    Vehicle.prototype.setVehicle = function (load, status, plate, model) {
        this.load = load;
        this.status = status;
        this.plate = plate;
        this.model = model;
    };
    return Vehicle;
}());
var Driver = /** @class */ (function () {
    function Driver() {
        this.name = '';
        this.cnh = '';
        this.vehicle = null;
    }
    Driver.prototype.getName = function () {
        return this.name;
    };
    Driver.prototype.setName = function (newName) {
        this.name = newName;
    };
    Driver.prototype.setCnh = function (newCnh) {
        this.cnh = newCnh;
    };
    Driver.prototype.getCnh = function () {
        return this.cnh;
    };
    Driver.prototype.setVehicle = function (vehicle) {
        this.vehicle = vehicle;
    };
    return Driver;
}());
var Route = /** @class */ (function () {
    function Route(origin, destiny, distanceKm) {
        this.vehiclesList = [];
        this.origin = '';
        this.destiny = '';
        this.distanceKm = 0;
        this.estimatedTime = new Date();
        this.origin = origin;
        this.destiny = destiny;
        this.distanceKm = distanceKm;
    }
    Route.prototype.insertList = function (vehicle) {
        this.vehiclesList.push(vehicle);
    };
    Route.prototype.getVehicles = function (i) {
        if (i == undefined) {
            console.log(this.vehiclesList);
        }
        else {
            console.log(this.vehiclesList[i]);
        }
    };
    return Route;
}());
var DeliveryStatus;
(function (DeliveryStatus) {
    DeliveryStatus[DeliveryStatus["pending"] = 0] = "pending";
    DeliveryStatus[DeliveryStatus["delivered"] = 1] = "delivered";
    DeliveryStatus[DeliveryStatus["progress"] = 2] = "progress";
})(DeliveryStatus || (DeliveryStatus = {}));
var Delivery = /** @class */ (function () {
    function Delivery(date, client, load, vehicle, driver, deliveryStatus) {
        this.date = date;
        this.client = client;
        this.load = load;
        this.vehicle = vehicle;
        this.driver = driver;
        this.deliveryStatus = deliveryStatus;
    }
    return Delivery;
}());
var Invoice // Foi o nome que eu achei pra Nota Fiscal
 = /** @class */ (function () {
    function Invoice(saleNumber, client, totalValue, payment) {
        this.saleNumber = saleNumber;
        this.client = client;
        this.totalValue = totalValue;
        this.payment = payment;
        this.issueDate = new Date();
        this.listInvoices = [];
    }
    return Invoice;
}());
var Order = /** @class */ (function () {
    function Order(client, load) {
        this.client = client,
            this.load = load;
    }
    Order.prototype.makeDelivery = function (vehicle, driver, deliveryStatus) {
        console.log('Request was done!');
        return new Delivery(new Date(), this.client, this.load, vehicle, driver, deliveryStatus);
    };
    Order.prototype.sendInvoice = function (saleNumber, totalValue, payment) {
        var invoice = new Invoice(saleNumber, this.client, totalValue, payment);
        return invoice;
    };
    Order.prototype.toListInvoice = function (invoiceList, invoice) {
        invoiceList.listInvoices.push(invoice);
    };
    return Order;
}());
var client = new Client();
var load = new Load();
load.registerLoad(TypeLoad.Dangerous, 4000, 3000);
var vehicle = new Vehicle();
vehicle.setVehicle(load, Status.Available, 'ABC-1234', 'VW Gol');
var vehicle2 = new Vehicle();
vehicle2.setVehicle(load, Status.Maintenance, 'ABC-1523', 'Fiat Uno');
var driver = new Driver();
driver.setName('Antônio Virgulinni');
driver.setCnh('1122311233');
driver.setVehicle(vehicle2);
var bradesco = new Card('Bradesco', '1111 2222 3333 44', new Date('2030-05-20'), '258');
var route = new Route('Brasil', 'Paraguai', 755);
route.insertList(vehicle);
route.insertList(vehicle2);
route.getVehicles();
client.setName('Vitor');
client.getName();
client.setCnpj('00101101101001');
client.getCnpj();
var order = new Order(client, load);
console.log(order.makeDelivery(vehicle2, driver, DeliveryStatus.progress));
var invoice = order.sendInvoice(3213, 3200, bradesco);
client.pushInvoice(invoice);
console.log(client.getInvoiceList());
