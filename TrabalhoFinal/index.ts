// Nomes: Vitor Reis & Lucas Willian

// Trabalho Avaliativo Final 

// Interface do personagem
interface ICharacter{
    attack(enemies:Zombie): string
    escape(): string
}

// Classe abstrata de personagem que implementa interface ICharacter
abstract class Character implements ICharacter{
    abstract name: string

    // Todo personagem terá ataque, fuga e habilidade
    public attack(enemies:Zombie): string {
        return `${this.name} attacked the zombie ${enemies.name}`;
    }
    public escape(): string {
        return `The ${this.name} was escaped from horde of zombies`;
    } // Classe Abstrata
    
    abstract ability(): string
}   

// Classe do atirador que herda de personagem
class EliteSniper extends Character{
    public name: string

    public constructor(name: string) {
        super()
        this.name = name
    }

    public ability(): string {
        return 'The Sniper used the special shoot. One bullet, One Kill!';
    }
}

// Classe de médico que herda de personagem
class Medic extends Character{
    public name: string

    public constructor(name: string) {
        super()
        this.name = name
    }

    public ability(): string {
        return 'The Doctor used the healing skill. Merthiolate.';
    }
}

// Classe de explorador que herda de personagem
class Explorer extends Character{
    public name: string

    public constructor(name: string) {
        super()
        this.name = name
    }
    public ability(): string {
        return 'The Explorer used the recon skill. Look the little airplane.'
    }
}

// Classe de sobrevivencialista que herda de personagem
class Survivalist extends Character{
    public name: string

    public constructor(name: string) {
        super()
        this.name = name
    }
    public ability(): string {
        return 'The Survivalist used the camping skill. He had a tent set up.'
    }
}

// Classe de cozinheiro que herda de personagem
class Cooker extends Character{
    public name: string

    public constructor(name: string) {
        super()
        this.name = name
    }

    public ability(): string {
        return `The Cooker used the eggs skill. Roast lamb testicles.`
    }
    
}

// Classe de cientista que herda de personagem
class Cientist extends Character{
    public name: string

    public constructor(name: string) {
        super()
        this.name = name
    }

    public ability(): string {
        return 'The Cientist used the chemical skill. He creates Trembomb.'
    }
}

// Interface do Esquadrão
interface ISquad{
    medic: Medic;
    cooker: Cooker;
    sniper : EliteSniper;
    survivalist: Survivalist;
    explorer: Explorer;
    cientist: Cientist;
}

// Classe do esquadrão que implementa interface ISquad
class Squad implements ISquad{
    medic: Medic;
    cooker: Cooker;
    sniper: EliteSniper;
    survivalist: Survivalist;
    explorer: Explorer;
    cientist: Cientist;
    listChar:Array<Character> = []

    public constructor(medic: Medic, cooker: Cooker, sniper: EliteSniper, survivalist: Survivalist, explorer: Explorer, cientist: Cientist) {
        this.medic = medic
        this.cooker = cooker
        this.sniper = sniper
        this.survivalist = survivalist
        this.explorer = explorer
        this.cientist = cientist
        this.listChar.push(medic, cooker, sniper, survivalist, explorer, cientist)

    }

    // Método que seleciona um personagem aleatório da lista
    public randChar(): Character {
        let rand = Math.floor(Math.random()*this.listChar.length)
        return this.listChar[rand]
    }

    // Método que remove personagem da lista
    public removeCharacter(element: Character): void {
        for(let i = 0; i < this.listChar.length; i++) {
            if(element.name == this.listChar[i].name) {
                this.listChar.splice(i, 1)
            }
        }
    }
}

// Classe de cenários
class Scenario {
    private biome: string
    private description: string

    public constructor(biome: string, description: string) {
        this.biome = biome
        this.description = description
    }
}

// Classe do campo de batalha
class Battlefield {
    private listScene:Array<Scenario> = []
    private listZombies: Array<Zombie> = []
    private listSquad: Array<Squad> = []

    // Método para adicionar cena ao campo de batalha
    public addScene(scene: Scenario): void {
        this.listScene.push(scene)
    }

    // Método para adicionar zumbi ao campo de batalha
    public addZombie(zombie: Zombie): void {
        this.listZombies.push(zombie)
    }

    // Método para adicionar esquadrão ao campo de batalha
    public addSquad(squad: Squad): void {
        this.listSquad.push(squad)
    }

    // Método para selecionar uma cena aleatória na lista
    private randScene(): Scenario {
        let rand = Math.floor(Math.random()*this.listScene.length)
        return this.listScene[rand]
    }

    // Método para selecionar um zumbi aleatório da lista
    private randZombie(): Zombie {
        let rand = Math.floor(Math.random()*this.listZombies.length)
        return this.listZombies[rand]
    }

    // Método para selecionar um esquadrão aleatório e retorna um personagem
    private charSquad(): Character {
        let rand = Math.floor(Math.random()*this.listSquad.length)
        let squad = this.listSquad[rand]
        return squad.randChar()
    }

    // Método que faz as rodadas da batalha
    public round() {
        let squad = this.listSquad[Math.floor(Math.random()*this.listSquad.length)]
        let scene = this.randScene()
        console.log(scene)
        
        for(let i = 0; i < 10; i++) {
                            
            setTimeout(()=> { 
            let randChar = Math.floor(Math.random()*2)
            let randAttack = Math.floor(Math.random()*5)

            let randomChar = this.charSquad()
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
                    squad.removeCharacter(randomChar)
                }                
            }}, 1000*i)
        }
    }

}

// Classe abstrata para os zumbis
abstract class Zombie{
    abstract name: string

    // Todo zumbi tem ataque e habilidade
    public attack(char: Character): string {
        return `The Zombie ${this.name} attacked ${char.name}`
    }

    abstract ability(scene?: Scenario): string
}

// Classe do zumbi comum que herda de Zombie
class Normal extends Zombie{
    public name: string
    
    public constructor(name: string) {
        super()
        this.name = name
    }

    public ability(): string {
        return `The zombie ${this.name} scratches.`
    }
}

// Classe do zumbi corredor que herda de Zombie
class Runner extends Zombie{
    public name: string
    
    public constructor(name: string) {
        super()
        this.name = name
    }

    public ability(): string {
        return `The Runner ${this.name} does "Katchau" for the battlefield.`
    }
}

// Classe do zumbi tanque que herda de Zombie
class Tank extends Zombie{
    public name: string
    
    public constructor(name: string) {
        super()
        this.name = name
    }

    public ability(): string {
        return `The Tank Zombie defends his territory`
    }
}

// Classe do zumbi explosivo que herda de Zombie
class Explosive extends Zombie{
    public name: string
    
    public constructor(name: string) {
        super()
        this.name = name
    }

    public ability(): string {
        return `Instead of him doing "Katchau" he does "kaboom"`
    }
}

// Classe do cachorro zumbi que herda de Zombie
class Dog extends Zombie{
    public name: string
    
    public constructor(name: string) {
        super()
        this.name = name
    }

    public ability(): string {
        return `The Dog Zombie was bite.`
    }
}

// Classe do zumbi ácido que herda de Zombie
class Acid extends Zombie{
    public name: string
    
    public constructor(name: string) {
        super()
        this.name = name
    }

    public ability(): string {
        return `The Acid Zombie gets high.`
    }
}

// Instanciando os personagens
let cooker = new Cooker('Sponge Bob')
let medic = new Medic('Desmond Doss')
let sniper = new EliteSniper('John Wick')
let survivalist = new Survivalist('Rambo')
let explorer = new Explorer('Bear Grills')
let cientist = new Cientist('Heisemberg')

// Instanciando os Zumbis
let zombie = new Normal('Michael Jackson')
let runner = new Runner('Thunder Marquinhos')
let tank = new Tank('Scherman')
let explosive = new Explosive('Kamikaze')
let dog = new Dog('Marley')
let acid = new Acid('Ilon Mãsk')

// Instanciando os cenários
let city = new Scenario("Urban", "City Center")
let forest = new Scenario("Forest", "Large Dense Forest")
let farm = new Scenario("Farm Berry", "Rural Territory")

// Instanciando o esquadrão
let squad = new Squad(medic, cooker, sniper, survivalist, explorer, cientist)

// Instanciando o Campo de Batalha
let battle = new Battlefield()

// Adicionando os cenários à batalha
battle.addScene(city)
battle.addScene(forest)
battle.addScene(farm)

// Adicionando os zumbis à batalha
battle.addZombie(zombie)
battle.addZombie(runner)
battle.addZombie(tank)
battle.addZombie(explosive)
battle.addZombie(dog)
battle.addZombie(acid)

// Adicionando o esquadrão à batalha 
battle.addSquad(squad)

battle.round()