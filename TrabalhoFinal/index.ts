// Nomes: Vitor Reis & Lucas Willian

// Trabalho Avaliativo Final POO

abstract class Character{ // Classe Abstrata
    name: string = ''
    hp: number = 0
    strength: number = 0
    defense: number = 0

    abstract attack(): string
    abstract defend(): string
    abstract escape(): string
}   

class EliteSniper extends Character{
    attack(): string {
        throw new Error("Method not implemented.")
    }
    defend(): string {
        throw new Error("Method not implemented.")
    }
    escape(): string {
        throw new Error("Method not implemented.")
    }
    shoot(): string {
        return 'One bullet, One Kill!';
    }
}
class Medic extends Character{
    attack(): string {
        throw new Error("Method not implemented.")
    }
    defend(): string {
        throw new Error("Method not implemented.")
    }
    escape(): string {
        throw new Error("Method not implemented.")
    }
    heal(): string {
        return ''
    }
}
class Explorer extends Character{
    attack(): string {
        throw new Error("Method not implemented.")
    }
    defend(): string {
        throw new Error("Method not implemented.")
    }
    escape(): string {
        throw new Error("Method not implemented.")
    }
    toRun(): string {
        return ''
    }
}
class Survivalist extends Character{
    attack(): string {
        throw new Error("Method not implemented.")
    }
    defend(): string {
        throw new Error("Method not implemented.")
    }
    escape(): string {
        throw new Error("Method not implemented.")
    }
    makeEquipment(): string {
        return ''
    }
}
class Cooker extends Character{
    attack(): string {
        throw new Error("Method not implemented.")
    }
    defend(): string {
        throw new Error("Method not implemented.")
    }
    escape(): string {
        throw new Error("Method not implemented.")
    }
    toCook(): string {
        return `Oh, beautiful rabbit, it's better with some potatos and carrots`
    }
}
class Cientist extends Character{
    attack(): string {
        throw new Error("Method not implemented.")
    }
    defend(): string {
        throw new Error("Method not implemented.")
    }
    escape(): string {
        throw new Error("Method not implemented.")
    }
    makeCigarretes(): string {
        return 'Today smoke will save lives'
    }
}

class Inventory{} // Lista de Itens e Equipamentos

class Equipment{}

class Items{} 

class Consumables extends Items{} // Especialização dos Itens em acessórios e armas
class Accessories extends Items{}
class Weapons extends Items{}

class Scenarios{} // Cenários onde estarão os personagens

abstract class Zombie{
    name: string = ''
    damage: number = 0
    hp: number = 0

    abstract attack(): string
    abstract hability(): string
}

class Normal extends Zombie{
    attack(): string {
        throw new Error("Method not implemented.")
    }
    hability(): string {
        throw new Error("Method not implemented.")
    }
    bite(): string {
        return 'Nham Nham Nham'
    }
}
class Runner extends Zombie{
    attack(): string {
        throw new Error("Method not implemented.")
    }
    hability(): string {
        throw new Error("Method not implemented.")
    }
    runForest(): string {
        return 'Vrum Vrum Vrum'
    }
}
class Tank extends Zombie{
    attack(): string {
        throw new Error("Method not implemented.")
    }
    hability(): string {
        throw new Error("Method not implemented.")
    }
}
class Explosive extends Zombie{
    attack(): string {
        throw new Error("Method not implemented.")
    }
    hability(): string {
        throw new Error("Method not implemented.")
    }
    explode(): string {
        return 'KABOOM'
    }
}
class Dog extends Zombie{
    attack(): string {
        throw new Error("Method not implemented.")
    }
    hability(): string {
        throw new Error("Method not implemented.")
    }
}
class Acid extends Zombie{
    attack(): string {
        throw new Error("Method not implemented.")
    }
    hability(): string {
        throw new Error("Method not implemented.")
    }
    throwAcid(): string {
        return 'Tzzzz'
    }
}