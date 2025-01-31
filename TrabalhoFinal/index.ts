// Nomes: Vitor Reis & Lucas Willian

// Trabalho Avaliativo Final 

interface ICharacter{
    attack(enemies:Zombie): string
    defend(enemies:Zombie): string
    escape(): string

}

abstract class Character implements ICharacter{
    abstract name: string

    attack(enemies:Zombie): string {
        return `${this.name} attacked the zombie ${enemies.name}`;
    }
    defend(enemies:Zombie): string {
        return `The ${this.name} defend himself from the zombie ${enemies.name}`;
    }
    escape(): string {
        return `The ${this.name} was escaped from the zombies`;
    } // Classe Abstrata
    
    abstract ability(): string
}   

class EliteSniper extends Character{
    name: string

    constructor(name: string) {
        super()
        this.name = name
    }

    ability(): string {
        return 'The Sniper used the special shoot. One bullet, One Kill!';
    }
}
class Medic extends Character{
    name: string

    constructor(name: string) {
        super()
        this.name = name
    }

    ability(): string {
        return 'The Doctor used the healing skill. Merthiolate.';
    }
}
class Explorer extends Character{
    name: string

    constructor(name: string) {
        super()
        this.name = name
    }
    ability(): string {
        return 'The Explorer used the recon skill. Look the little airplane.'
    }
}
class Survivalist extends Character{
    name: string

    constructor(name: string) {
        super()
        this.name = name
    }
    ability(): string {
        return 'The Survivalist used the camping skill. He had a tent set up.'
    }
}
class Cooker extends Character{
    name: string

    constructor(name: string) {
        super()
        this.name = name
    }

    ability(): string {
        return `The Cooker used the eggs skill. Roast lamb testicles.`
    }
    
}
class Cientist extends Character{
    name: string

    constructor(name: string) {
        super()
        this.name = name
    }

    ability(): string {
        return 'The Cientist used the chemical skill. He creates Trembomb.'
    }
}

interface ISquad{
    medic: Medic;
    cooker: Cooker;
    sniper : EliteSniper;
    survivalist: Survivalist;
    explorer: Explorer;
    cientist: Cientist;
}

class Squad implements ISquad{
    medic: Medic;
    cooker: Cooker;
    sniper: EliteSniper;
    survivalist: Survivalist;
    explorer: Explorer;
    cientist: Cientist;
    listChar:Array<Character> = []

    constructor(medic: Medic, cooker: Cooker, sniper: EliteSniper, survivalist: Survivalist, explorer: Explorer, cientist: Cientist) {
        this.medic = medic
        this.cooker = cooker
        this.sniper = sniper
        this.survivalist = survivalist
        this.explorer = explorer
        this.cientist = cientist
        this.listChar.push(medic, cooker, sniper, survivalist, explorer, cientist)

    }

    randChar(): Character {
        let rand = Math.floor(Math.random()*this.listChar.length)
        return this.listChar[rand]
    }
}

class Scenario{
    biome: string
    description: string

    constructor(biome: string, description: string) {
        this.biome = biome
        this.description = description
    }

} // Cenários onde estarão os personagens

class Battlefield {
    listScene:Array<Scenario> = []
    listZombies: Array<Zombie> = []
    listSquad: Array<Squad> = []

    randScene(): Scenario {
        let rand = Math.floor(Math.random()*this.listScene.length)
        return this.listScene[rand]
    }

    randZombie(): Zombie {
        let rand = Math.floor(Math.random()*this.listZombies.length)
        return this.listZombies[rand]
    }

    randSquad(): Character {
        let rand = Math.floor(Math.random()*this.listSquad.length)
        let squad = this.listSquad[rand]
        return squad.randChar()
    }

    round() {
        let scene = this.randScene()
        console.log(scene)

        for(let i = 0; i < 6; i++) {
            let randChar = Math.floor(Math.random()*2)
            let randAttack = Math.floor(Math.random()*2)


            if(randChar == 0) {
                if(randAttack == 0) {
                    console.log(this.randZombie().attack(this.randSquad()))
                } else {
                    console.log(this.randZombie().ability())
                }
            } else {
                if(randAttack == 0) {
                    console.log(this.randSquad().attack(this.randZombie()))
                } else {
                    console.log(this.randSquad().ability())
                }
                
            }
        }
    }

}

abstract class Zombie{
    abstract name: string

    attack(char: Character): string {
        return `The Zombie ${this.name} attacked ${char.name}`
    }

    abstract ability(scene?: Scenario): string
}

class Normal extends Zombie{
    name: string
    
    constructor(name: string) {
        super()
        this.name = name
    }

    ability(): string {
        return `The zombie ${this.name} scratches.`
    }
}
class Runner extends Zombie{
    name: string
    
    constructor(name: string) {
        super()
        this.name = name
    }

    ability(): string {
        return `The Runner ${this.name} does "Katchau" for the battlefield.`
    }
}
class Tank extends Zombie{
    name: string
    
    constructor(name: string) {
        super()
        this.name = name
    }

    ability(): string {
        return `The Tank Zombie defends his territory`
    }
}
class Explosive extends Zombie{
    name: string
    
    constructor(name: string) {
        super()
        this.name = name
    }

    ability(): string {
        return `Instead of him doing "Katchau" he does "kaboom"`
    }
}
class Dog extends Zombie{
    name: string
    
    constructor(name: string) {
        super()
        this.name = name
    }

    ability(): string {
        return `The Dog Zombie was bite.`
    }
}
class Acid extends Zombie{
    name: string
    
    constructor(name: string) {
        super()
        this.name = name
    }

    ability(): string {
        return `The Acid Zombie gets high.`
    }
}


let cooker = new Cooker('Sponge Bob')
let medic = new Medic('Desmond Doss')
let sniper = new EliteSniper('John Wick')
let survivalist = new Survivalist('Rambo')
let explorer = new Explorer('Bear Grills')
let cientist = new Cientist('Heisemberg')

let zombie = new Normal('Michael Jackson')
let runner = new Runner('Thunder Marquinhos')
let tank = new Tank('Scherman')
let explosive = new Explosive('Kamikaze')
let dog = new Dog('Marley')
let acid = new Acid('Ilon Mãsk')

let city = new Scenario("Urban", "City Center")
let forest = new Scenario("Forest", "Large Dense Forest")
let farm = new Scenario("Farm Berry", "Rural Territoy")

let squad = new Squad(medic, cooker, sniper, survivalist, explorer, cientist)

let battle = new Battlefield()
battle.listScene.push(city, forest, farm)
battle.listZombies.push(zombie, runner, tank, explosive, dog, acid)
battle.listSquad.push(squad)
// console.log(battle.round())
// console.log(battle.randZombie())
// console.log(battle.randScene())
// console.log(battle.randSquad())
battle.round()