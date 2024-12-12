class Veiculo 
{
    cor: string = ''
    rodas: number = 0
    volante: string = ''

    // ligar(condicao: boolean): void;
    // ligar(condicao?: boolean): void;

    ligar(condicao?: boolean) {
        if(condicao === undefined || condicao == false) {
            console.log("O carro não ligou")
        }
        if(condicao) {
            console.log("O carro ligou")
        }
    } 
}

class Carro extends Veiculo{

}

class Caminhao extends Veiculo{
    num_eixos: number = 0
}

let veiculo = new Veiculo()
let caminhao: Caminhao = new Caminhao()

veiculo.ligar(true)
caminhao.ligar(false)


abstract class Pessoa 
{
    protected name: string = ''
    protected cpf: string = ''

    public falar():void {

    }
        
    abstract andar(): void
}


abstract class Guri extends Pessoa
{

    abstract andar(): void
}
