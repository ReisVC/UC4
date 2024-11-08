enum Season {
    winter = 0.15,
    summer = 0.30,
    autumn = 0.10,
    spring = 0.10
}

class Clothing
{
    price: number = 0
    season: Season = Season.summer

    withDiscount() {
        let discount: number = this.price*this.season
        return this.price-discount;
    }
}

class Shirt extends Clothing
{
    size: string = ''
    color: string = ''
    material: string = ''

}

class Pant extends Clothing
{
    size: number = 0
    type: string = ''

}

class Dress extends Clothing
{
    size: string = ''
    type: string = ''

}

let shirt: Shirt = new Shirt()
shirt.price = 200
shirt.season = Season.autumn
let pant: Pant = new Pant()
pant.price = 150
pant.season = Season.winter
let dress: Dress = new Dress()
dress.price = 250
dress.season = Season.summer

console.log(`The price with discount is $${shirt.withDiscount().toFixed(2)}`)
console.log(`The price with discount is $${pant.withDiscount().toFixed(2)}`)
console.log(`The price with discount is $${dress.withDiscount().toFixed(2)}`)

