class Income 
{
    interest: number = 0

    calculateInterestPerMonth(user: User, month: number): string {
        let finalInterest: number = user.money * (1 + (this.interest/100))**month
        return `The client ${user.name} will have the total of ${finalInterest.toFixed(2)} at the end of ${month} month(s) `;
    }
}

enum Risk 
{
    High,
    Medium,
    Low
}

class FixedIncome extends Income
{ 
    interest: number = 1
    risk: Risk = Risk.Low
}

class VariableIncome extends Income
{
    interest: number = 1.5
    risk: Risk = Risk.Medium
}

class Multimarket extends Income
{
    interest: number = 2.5
    risk: Risk = Risk.High
}

class User 
{
    name: string = ''
    money: number = 0

}

let fixed: FixedIncome = new FixedIncome()
let variable: VariableIncome = new VariableIncome()
let multimarket: Multimarket = new Multimarket()

let user1: User = new User()
user1.name = 'Vitor'
user1.money = 1482

console.log(fixed.calculateInterestPerMonth(user1, 5))

console.log(variable.calculateInterestPerMonth(user1, 15))

console.log(multimarket.calculateInterestPerMonth(user1, 12))
