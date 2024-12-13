
interface IPayment
{
    paymentWithPix(): string
    paymentWithCard(): string
    paymentWithBill(): string
}

class Pay implements IPayment
{
    client: User
    product: Product

    constructor(client: User, product: Product) {
        this.client = client;
        this.product = product;
    }

    paymentWithPix(): string {
        client.setList(new Invoice(this.client.getList().length+1, this.client, this.product, 'Pix'))
        return `Product Name: ${this.product.getName()} \nProduct Price: ${this.product.getValue()} \nThe ${this.client.getName()} was paid with Pix!`;
    }
    paymentWithCard(): string {
        client.setList(new Invoice(this.client.getList().length+1, this.client, this.product, 'Card'))
        return `Product Name: ${this.product.getName()} \nProduct Price: ${this.product.getValue()} \nThe ${this.client.getName()} was paid with Card!`;
    }
    paymentWithBill(): string {
        client.setList(new Invoice(this.client.getList().length+1, this.client, this.product, 'Bill'))
        return `Product Name: ${this.product.getName()} \nProduct Price: ${this.product.getValue()} \nThe ${this.client.getName()} was paid with Bill!`;
    }    
}

class Product 
{
    private name: string = ''
    private value: number = 0

    constructor(name: string, value: number) {
        this.name = name;
        this.value = value;
    }

    getName(): string {
        return this.name;
    }

    getValue(): number {
        return this.value;
    }
}

class Invoice 
{
    id: number = 0
    client: User 
    product: Product
    date: Date = new Date()
    paymentMethod: string

    constructor(id: number, client: User, product: Product, payment: string) {
        this.id = id
        this.client = client;
        this.product = product;
        this.paymentMethod = payment;
    }
}

class User
{
    private name: string = ''
    private cpf: string = ''
    private invoiceList: Array<Invoice> = []

    constructor(name: string, cpf: string) {
        this.name = name;
        this.cpf = cpf;
    }

    setList(invoice:Invoice):void {
        this.invoiceList.push(invoice)
    }
    getList(): Array<Invoice> {
        return this.invoiceList;
    }

    getName(): string {
        return this.name;
    }
}

let client = new User('Vitor', '123.123.123-12')
let product = new Product('Christmas Chester', 120)
let product2 = new Product('Vinho Pinot Noir', 130)

let payment = new Pay(client, product)
let payment2 = new Pay(client, product2)

payment.paymentWithPix()
payment2.paymentWithCard()

console.log(client)