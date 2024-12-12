abstract class Moneylender
{
    protected name: string = ''
    protected adress: string = ''
    protected value: number = 0
    protected wallet: number = 0
    protected wife_husb: boolean|undefined = false
    protected parent: boolean|undefined = true
    protected heritage: boolean = true;

    public setWallet(newValue: number): void {
        this.wallet += newValue;
    }

    public setName(newName: string): void {
        this.name = newName;
    }

    public setValue(newValue: number): void {
        this.value = newValue;
    }

    public getValue():number {
        return this.value;
    }

    public getName(): string {
        return this.name;
    }

    public getWallet():number {
        return this.wallet;
    }

    public lessWallet(value: number): void {
        this.wallet -= value
    }

    abstract askmoney():boolean;
}

class Elderly extends Moneylender
{
    private children: boolean|undefined = undefined

    askmoney(): boolean {
        if(this.children || this.parent || this.wife_husb || this.heritage) {
            return true;
        } else {
            return false;
        }
    }
}

class Young extends Moneylender
{
    private pet: boolean = false;

    askmoney(): boolean {
        if(this.parent || this.wife_husb||this.pet || this.heritage) {
            return true;
        } else {
            return false;
        }
    }
}

class LoanShark
{
    private name: string = ''
    private money: number = 0
    private loanList: Array<string> = []

    public setName(newName: string): void {
        this.name = newName;
    }

    public getName(): string {
        return this.name;
    }

    public setLoan(loan: string): void {
        this.loanList.push(loan);
    }

    public getLoan(): Array<string> {
        return this.loanList;
    }

    public getMoney(): number {
        return this.money;
    }

    public setMoney(newValue: number): void {
        this.money += newValue
    }

    public lessMoney(valueToMinus: number): void {
        this.money -= valueToMinus;
    }
}

function threat(value: number): string {
    switch(value) {
            case 0: return `Have I told you that you love your family this week?`;
        break;
            case 1: return `It's better to take a look at your cars brakes, something might happen!`;
        break;
            case 2: return `Be careful with that cigarette, smoking it could end up killing you!`;
        break;
            case 3: return `Are you sure you didn't leave the stove on before leaving the house?`;
        break;
        default: return `If you like to walk, it's better pay your debts`;
    }
}

class Collector
{
    private nickname: string = 'The collector'
    private loanshark: LoanShark = new LoanShark

    public setLoanShark(newLoan: LoanShark): void {
        this.loanshark = newLoan;
    }

    public collectDebt(client: Moneylender) {

        let valueToCollect: number = client.getValue()*1.3;

        if(client.getWallet() > valueToCollect) {
            this.loanshark.setMoney(valueToCollect);
            client.lessWallet(valueToCollect);
            return `Your family are safe!`
        } else {
            let randomNum = Math.floor(Math.random() * 4);
            return threat(randomNum)
        }
    }
}

class Loan
{

    makeLoan(client: Moneylender, loanshark: LoanShark) {
        if(client.askmoney()) {
            let loan = `The ${client.getName()} asked for ${client.getValue()} to ${loanshark.getName()}`;
            loanshark.lessMoney(client.getValue());
            loanshark.setLoan(loan);
            return `Loan was made succesfully!`;
        } else {
            return `Insufficient respect! Get a marriage!`;
        }
    }
}

let young = new Young()
young.setName('Vitor')
young.setValue(3000)
young.setWallet(4000)

let shark = new LoanShark()
shark.setName('Papasito')
shark.setMoney(100000)

let collector = new Collector()
collector.setLoanShark(shark)

let loan = new Loan()
console.log(loan.makeLoan(young, shark))
console.log(shark.getLoan())
console.log(shark.getMoney())

console.log(collector.collectDebt(young))
console.log(shark.getMoney())