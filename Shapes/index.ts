class Shapes {
    name: string = ''
    color: string = ''

    calculateArea(): number {
        return 0;
 }
}

class Circle extends Shapes {
    radius: number = 0

    calculateArea(): number {
        return Math.PI*(this.radius*this.radius)
    }
}

class Triangle {
    base: number = 0
    height: number = 0

    calculateArea(): number {
        return ((this.base*this.height)/2);
    }
}

class Retangle {
    base: number = 0
    height: number = 0

    calculateArea(): number {
        return this.base*this.height
    }
}

let circle: Circle = new Circle()
circle.radius = 20
console.log(circle.calculateArea().toFixed(2))

let retangle: Retangle = new Retangle()
retangle.base = 10
retangle.height = 20
console.log(retangle.calculateArea().toFixed(2))

let triangle: Triangle = new Triangle()
triangle.base = 10
triangle.height = 20
console.log(triangle.calculateArea().toFixed(2))
