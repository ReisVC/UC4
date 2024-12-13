var Pay = /** @class */ (function () {
    function Pay(client, product) {
        this.client = client;
        this.product = product;
    }
    Pay.prototype.paymentWithPix = function () {
        client.setList(new Invoice(this.client.getList().length + 1, this.client, this.product, 'Pix'));
        return "Product Name: ".concat(this.product.getName(), " \nProduct Price: ").concat(this.product.getValue(), " \nThe ").concat(this.client.getName(), " was paid with Pix!");
    };
    Pay.prototype.paymentWithCard = function () {
        client.setList(new Invoice(this.client.getList().length + 1, this.client, this.product, 'Card'));
        return "Product Name: ".concat(this.product.getName(), " \nProduct Price: ").concat(this.product.getValue(), " \nThe ").concat(this.client.getName(), " was paid with Card!");
    };
    Pay.prototype.paymentWithBill = function () {
        client.setList(new Invoice(this.client.getList().length + 1, this.client, this.product, 'Bill'));
        return "Product Name: ".concat(this.product.getName(), " \nProduct Price: ").concat(this.product.getValue(), " \nThe ").concat(this.client.getName(), " was paid with Bill!");
    };
    return Pay;
}());
var Product = /** @class */ (function () {
    function Product(name, value) {
        this.name = '';
        this.value = 0;
        this.name = name;
        this.value = value;
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getValue = function () {
        return this.value;
    };
    return Product;
}());
var Invoice = /** @class */ (function () {
    function Invoice(id, client, product, payment) {
        this.id = 0;
        this.date = new Date();
        this.id = id;
        this.client = client;
        this.product = product;
        this.paymentMethod = payment;
    }
    return Invoice;
}());
var User = /** @class */ (function () {
    function User(name, cpf) {
        this.name = '';
        this.cpf = '';
        this.invoiceList = [];
        this.name = name;
        this.cpf = cpf;
    }
    User.prototype.setList = function (invoice) {
        this.invoiceList.push(invoice);
    };
    User.prototype.getList = function () {
        return this.invoiceList;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
var client = new User('Vitor', '123.123.123-12');
var product = new Product('Christmas Chester', 120);
var product2 = new Product('Vinho Pinot Noir', 130);
var payment = new Pay(client, product);
var payment2 = new Pay(client, product2);
payment.paymentWithPix();
payment2.paymentWithCard();
console.log(client);
