class Vehicle
{
    wheel: number = 2
    engine: string = ''
    cc: number = 0
}

class Car extends Vehicle
{
    constructor(public door: number, public steering: boolean, public trunk: boolean, public wheels: number, public engine: string) {
        super()
    }
}

class Truck extends Vehicle
{

    constructor(public door: number, public steering: boolean, public wheel: number, public engine: string, public trailer: number) {
        super()
    }
}

class Motorcycle extends Vehicle
{
    constructor(public handlebars: boolean, public bench: boolean, public wheel: number, public engine: string) {
        super()
    }
}


class Factory 
{
    name: string = ''

    produceCar(door: number, steering: boolean, trunk: boolean, wheels: number, engine: string) {
        console.log(`The ${this.name} produced the car!`)
        let car: Car = new Car(door, steering, trunk, wheels, engine)
        return car
    }

    produceMotorcycle(handlebars: boolean, bench: boolean, wheel: number, engine: string) {
        console.log(`The ${this.name} produced the motorcycle!`)
        let moto: Motorcycle = new Motorcycle(handlebars, bench, wheel, engine);
        return moto;
    }

    produceTruck(door: number, steering: boolean, wheel: number, engine: string, trailer: number) {
        console.log(`The ${this.name} produced the truck!`)
        let truck: Truck = new Truck(door, steering, wheel, engine, trailer);
        return truck;
    }
}

let Mercedes: Factory = new Factory()
Mercedes.name = 'Mercedes'

console.log(Mercedes.produceCar(4, true, false, 4, 'V8'))
console.log(Mercedes.produceMotorcycle(true, true, 2, 'Motor 300cc'))
console.log(Mercedes.produceTruck(3, true, 6, 'Motor B6', 2))