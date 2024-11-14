class Account 
{
    user: string = ''
    totalAccount: number = 1000

    Withdraw(value: number): string {
        return '';
    }
}

class Saving_Account extends Account
{
    interestMonth: number = 0.05
    withdrawalLimit: number = 600

    Withdraw(value: number): string {
        if(value < this.totalAccount && value < this.withdrawalLimit) {
            this.totalAccount -= value
            return `The value of ${value} was withdrawn of your account!`
        } else {
            return `Operation denied, insufficient balance or withdrawal limit reached, try later!`
        }
    }

    calculateInterestMonth(): string {
        let accountWithInterest: number = this.totalAccount + (this.totalAccount * this.interestMonth);
        return `The value of account with interest on month is ${accountWithInterest}`;
    }

    transferMoney(value: number, account: Account) {
        if(value > this.totalAccount) {
            return `Operation denied`
        } else {
            account.totalAccount += value
            this.totalAccount -= value
            console.log(`Value of $${value} transferred to ${account.user}`)
        }
    }
}

class Current_Account extends Account 
{
    withdrawalLimit: number = 1500

    Withdraw(value: number): string {
        if(value < this.totalAccount && value < this.withdrawalLimit) {
            this.totalAccount -= value
            return `The value of ${value} was withdrawn of your account!`
        } else {
            return `Operation denied, insufficient balance or withdrawal limit reached, try later!`
        }
    }

    transferMoney(value: number, account: Account) {
        if(value > this.totalAccount) {
            return `Operation denied`
        } else {
            account.totalAccount += value
            this.totalAccount -= value
            console.log(`Value of $${value} transferred to ${account.user}`)
        }
    }
}

class Investment_Account extends Account 
{
    interestMonth: number = 0.15

    Withdraw(value: number): string {
        if(value <= this.totalAccount) {
            this.totalAccount -= value
            return `The value of ${value} was withdrawn of your account!`
        } else {
            return `Operation denied, insufficient balance or withdrawal limit reached, try later!`
        }
    }

    calculateInterestMonth(): string {
        let accountWithInterest: number = this.totalAccount + (this.totalAccount * this.interestMonth);
        return `The value of account with interest on month is ${accountWithInterest}`;
    }
}

let vitorAccount1: Saving_Account = new Saving_Account()
vitorAccount1.user = 'Vitor'
console.log(vitorAccount1.calculateInterestMonth())

let vitorAccount2: Current_Account = new Current_Account()
vitorAccount2.user = 'Vitor'

let vitorAccount3: Investment_Account = new Investment_Account()
vitorAccount3.user = 'Vitor'

console.log(vitorAccount3)
vitorAccount2.transferMoney(200, vitorAccount3)
console.log(vitorAccount3)

