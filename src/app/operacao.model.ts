export class cl_operacao{
    public valor1: number;
    public valor2: number;
    public tipo_operacao: number;
    public resultado: number = 0;
    public str_operacao: string = '';

    constructor(){
        this.valor1 = this.GerarValorAleatorio(1,10);
        this.valor2 = this.GerarValorAleatorio(1, 10);
        this.tipo_operacao = this.GerarValorAleatorio(1,4);

        switch(this.tipo_operacao){
            case 1:
                this.str_operacao = this.valor1 + ' + ' + this.valor2 + ' = ';
                this.resultado = this.valor1 + this.valor2;
                break;
            case 2:
                this.str_operacao = this.valor1 + ' - ' + this.valor2 + ' = ';
                this.resultado = this.valor1 - this.valor2;
                break;
            case 3:
                this.str_operacao = this.valor1 + ' x ' + this.valor2 + ' = ';
                this.resultado = this.valor1 * this.valor2;
                break;
            case 4:
                this.str_operacao = this.valor1 + ' : ' + this.valor2 + ' = ';
                this.resultado = this.valor1 / this.valor2;
                break;                        
            default:
                break;
        }
    }

    GerarValorAleatorio(min: number, max: number){
        return Math.floor(Math.random() * (max - min +1) * min);
    }
}