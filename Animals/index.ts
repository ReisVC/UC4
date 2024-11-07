class Animal {
    name: string = ''
    species: string = ''

    makeSound(sound: string):void {

    }
}

enum Type {
    flying,
    terrestrial,
    aquatic
}

class Mammal extends Animal{
    habits: string = ''
    member: number = 0
    breastfeeds: boolean = true
    type: Type = Type.terrestrial

    
    makeSound(sound: string): void {
        console.log(`The animal ${this.name} make the sound ${sound}`)
    }

    getInfo(): string {
        return `Name: ${this.name} \nSpecie: ${this.species} \nMembers name: ${this.member}`;
    }

    toRun() {
        if(this.type == Type.aquatic) {
         return `The ${this.name} is swimming a lot!`   
        } else if(this.type == Type.terrestrial) {
            return `The ${this.name} is running a lot!`
        } else {
            return `The ${this.name} is flying in everywhere!`
        }
    }
}

let mammal: Mammal = new Mammal
mammal.name = 'Bat'
mammal.type = Type.flying
console.log(mammal.toRun())

class Bird extends Animal {
    beakType: string = ''
    wingspan: number = 0


    makeSound(sound: string): void {
        console.log(`The bird ${this.name} make the sound ${sound}`)
    }

    fly():string {
        return `The bird ${this.name} is flying!`
    }

    getInfo(): string {
        return `Bird name: ${this.name} \nSpecie: ${this.species} \nWingspan: ${this.wingspan}`;
    }
}

class Fish extends Animal {
    feedingType: string = ''
    aquariumType: number = 0

    makeSound(sound: string): void {
        console.log(`The fish ${this.name} make the sound ${sound}`)
    }

    toPlay(): string {
        return `The ${this.name} is playing a lot!`
    }
}


