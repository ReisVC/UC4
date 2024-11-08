class Food
{
    price: number = 0
    ingredients: Array<string> = []
}

class Yakisoba extends Food
{
    description: string = ''
}

class Pizza extends Food
{
    flavor: string  = ''
} 

enum Size {
    medium,
    large,
}

class Parmegiana extends Food
{
    description: string = ''
    size: Size = Size.medium
}


class Client 
{
    order: Array<Food> = []
    name: string = ''
    totalAcount: number = 0

    placeOrder(foods: Array<Food>) {
        for(let item of foods) {
            this.totalAcount += item.price
            this.order = foods
        }
    }

    payment() {
        console.log(`The ${this.name} made payment of $${this.totalAcount}!`)
        this.totalAcount = 0
        this.order = []
    }
}


let parmegiana: Parmegiana = new Parmegiana()
parmegiana.price = 50
parmegiana.description = 'fried meat—typically chicken or veal—topped with marinara sauce and melted mozzarella cheese, then baked until golden and bubbling.'
parmegiana.ingredients = ['Parme', 'Giana']

let yakisoba: Yakisoba = new Yakisoba()
yakisoba.price = 80
yakisoba.ingredients = ['pasta', 'sauce', 'vegetables']
yakisoba.description = 'Pasta with vegetables, shoyu and more and more thing to the plate look better'

let pizza: Pizza = new Pizza()
pizza.price = 100
pizza.flavor = 'pepperoni'
pizza.ingredients = ['pasta', 'pepperoni', 'sauce', 'cheese a lot']



let foods = [
    parmegiana, yakisoba, pizza
]
let client = new Client()
client.name = 'DOUGRAS'
client.placeOrder(foods)
console.log(client)
client.payment()
console.log(client.order, client.totalAcount)
