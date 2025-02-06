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
        return `The ${this.name} was escaped from horde of zombies`;
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

    removeCharacter(): void {

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

    charSquad(): Character {
        let rand = Math.floor(Math.random()*this.listSquad.length)
        let squad = this.listSquad[rand]
        return squad.randChar()
    }

    compareChars(element2: Array<Character>) {
        let rand = this.charSquad()
        let confirmation = true

        while(confirmation) {
            for(let i = 0; i <= element2.length; i++) {
                if(rand === element2[i]) {
                    rand = this.charSquad()
                } else {  
                    confirmation = false;
                    
                }
            }
        }
        confirmation = true
        return rand
    }

  
    round() {
        let scene = this.randScene()
        console.log(scene)
        let escapedChars: Array<Character> = []
        
        for(let i = 0; i < 20; i++) {
                            
            setTimeout(()=> { 
            let randChar = Math.floor(Math.random()*2)
            let randAttack = Math.floor(Math.random()*5)

            let randomChar: Character = this.compareChars(escapedChars)
            let randomZombie = this.randZombie()

            if(randChar == 0) {
                if(randAttack <= 2) {
                    console.log(randomZombie.attack(randomChar))
                } else {
                    console.log(randomZombie.ability())
                } 
            } else {
                if(randAttack <= 2) {

                    console.log(randomChar.attack(randomZombie))
                } else if (randAttack == 3){
                    console.log(randomChar.ability())
                } else {
                    console.log(randomChar.escape())
                    escapedChars.push(randomChar)
                }                
            }}, 500*i)
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
let farm = new Scenario("Farm Berry", "Rural Territory")

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