class Employees
{
    salary: number = 1400
    name: string = ''
    contact: string = ''
    paymentSalary: Array<string> = []
}

class Teacher extends Employees
{
    subject: string = ''
    registration: string = ''

}

class Coordinator extends Employees
{
    section: string = ''

}

class Director extends Employees
{
    registration: string = ''
    departament: string = ''
}

class Payment 
{
    makePayment(employee: Employees): void {
        console.log(`The payment of ${employee.salary} was made for the ${employee.name}`)
        employee.paymentSalary.push(`Payment ${employee.salary} on the date ${new Date()}`)
    }

}

let teacher = new Teacher()
teacher.salary = 3000

let director: Director = new Director()
director.name = 'Agnaldo Timóteo'
director.salary = 4500

let coordinator: Coordinator = new Coordinator()
coordinator.salary = 4000

let payment: Payment = new Payment()
payment.makePayment(director)
console.log(director)