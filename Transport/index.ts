class Transport 
{
    classname: string = ''
    ticketPrice: number = 0 
    capacity: number = 0
}

class Bus extends Transport
{
    classname: string = 'bus'
    ticketPrice: number = 5
    capacity: number = 50

    validatePassenger(passenger: Passenger) {
        let validate = false
        passenger.ticketList.forEach(element => {
            if(element.classname === 'bus') {
                validate = true
            }
        });

        if(validate) {
            return `The passenger ${passenger.name} can embark on the ${this.classname}`
        }
    }
}

class Train extends Transport
{
    classname: string = 'train'
    ticketPrice: number = 7
    capacity: number = 200

    validatePassenger(passenger: Passenger) {
        let validate = false
        passenger.ticketList.forEach(element => {
            if(element.classname === 'train') {
                validate = true
            }
        });

        if(validate) {
            return `The passenger ${passenger.name} can embark on the ${this.classname}`
        }
    }
}

class Airplane extends Transport 
{
    classname: string = 'airplane'
    ticketPrice: number = 300
    capacity: number = 450

    validatePassenger(passenger: Passenger) {
        let validate = false
        passenger.ticketList.forEach(element => {
            if(element.classname === 'airplane') {
                validate = true
            }
        });

        if(validate) {
            return `The passenger ${passenger.name} can embark on the ${this.classname}`
        }
    }
}

class Passenger 
{
    name: string = ''
    ticketList: Array<Transport> = []

    calculatePrice(): string {
        let totalPrice = 0

        this.ticketList.forEach(element => {
            totalPrice += element.ticketPrice
        });
        
        return `The ${this.name} spent the total ${totalPrice}`
    }

    buyTicket(ticket: Transport): string {
        this.ticketList.push(ticket)
        return `The ${this.name} bought the ${ticket.classname} ticket`;
    }
}

let passenger: Passenger = new Passenger();
passenger.name = 'Vitor';

let airplane: Airplane = new Airplane();

console.log(passenger.buyTicket(airplane));