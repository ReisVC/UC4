class Character 
{
    name: string = ''
    hp: number = 0
    strenght: number = 0
    defense: number = 0
    
    attack() {
        console.log(`The character ${this.name} attacked!`)
    }

    defend() {
        console.log(`The character ${this.name} defended!`)
    }

    escape() {
        console.log(`The character ${this.name} ran away!`)
    }

    useItem() {
        console.log(`The character ${this.name} used the item!`)
    }

    upLevel() {
        console.log(`The character ${this.name} leveled up!`)

    }

    castSkill() {
        console.log(`The character ${this.name} conjured the skill!`)

    }
}

class Bard extends Character 
{
    castSkill(): void {
        console.log(`The ${this.name} played the berimbau`)
    }
}

class Paladin extends Character
{
    castSkill(): void {
        console.log(`The ${this.name} used the divine light`)
    }
}

class Doppelganger extends Character
{
    castSkill(): void {
        console.log(`The ${this.name} played the berimbau`)
    }

    transform(character?:string): void;
    transform(character?:string) {
        if(character== undefined) {
            console.log(`The ${this.name} transforms in Silvio Santos tadáááááá!`)
        } else {
            console.log(`The character ${this.name} transforms in ${character} tadáááááá`)
        }
    }
}



let bard: Bard = new Bard()
bard.name = 'Jimmy Hendrix'
bard.castSkill()

let paladin: Paladin = new Paladin()
paladin.name = 'Leroy Jenckens'
paladin.castSkill()

let doppelganger: Doppelganger = new Doppelganger()
doppelganger.name = 'Ney Matogrosso'
doppelganger.castSkill()
doppelganger.transform('P. Diddy')