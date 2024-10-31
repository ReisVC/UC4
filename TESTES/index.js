var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Veiculo = /** @class */ (function () {
    function Veiculo() {
        this.cor = '';
        this.rodas = 0;
        this.volante = '';
    }
    // ligar(condicao: boolean): void;
    // ligar(condicao?: boolean): void;
    Veiculo.prototype.ligar = function (condicao) {
        if (condicao === undefined || condicao == false) {
            console.log("O carro não ligou");
        }
        if (condicao) {
            console.log("O carro ligou");
        }
    };
    return Veiculo;
}());
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Carro;
}(Veiculo));
var Caminhao = /** @class */ (function (_super) {
    __extends(Caminhao, _super);
    function Caminhao() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.num_eixos = 0;
        return _this;
    }
    return Caminhao;
}(Veiculo));
var veiculo = new Veiculo();
var caminhao = new Caminhao();
veiculo.ligar(true);
caminhao.ligar(false);
