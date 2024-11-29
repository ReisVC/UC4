class Client
{
    protected name: string = ''
    protected contact: string = ''
    protected invoiceList: Array<Invoice> = []

    public setName(newName: string) {
        this.name = newName;
    }

    public getName(): string {
        return this.name;
    }

    public setContact(newContact: string): void {
        this.contact = newContact
    }

    public getContact(): string {
        return this.contact;
    }
}

class Vehicle
{
    private model: string 
    private plate: string
    private year: number 
    private color: string

    public constructor(model: string, plate: string, year: number, color: string) {
        this.model = model;
        this.color = color;
        this.plate = plate;
        this.year = year;
    }
}

class CommomClient extends Client
{
    private vehicle: Vehicle|null = null

    public setVehicle(newVehicle: Vehicle) {
        this.vehicle = newVehicle
    }
}

class FleetClient extends Client
{
    private vehicleList: Array<Vehicle> = []

    public setVehicle(vehicles: Array<Vehicle>) {
        vehicles.forEach((vehicle)=>{
            this.vehicleList.push(vehicle)
        })
    }
}

class Invoice
{
    private id: number = 0
    private issueDate: Date = new Date()

    public sendInvoice(client: Client) {

    }
}

let vehicle1 = new Vehicle('Gol', 'ABC-1763', 2003, 'Red')
let vehicle2 = new Vehicle('Fiat Palio Attractive', 'IUM-5H54', 2013, 'Silver')
let vehicle = new Vehicle('Honda Fit', 'ICJ-4445', 2007, 'Gray')

let invoice = new Invoice()


