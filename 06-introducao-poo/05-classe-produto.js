class Produto {
    constructor(nome, preco){
        this.nome = nome,
        this.preco = preco
    };
    aplicarDesconto(percentual){
        this.preco -= this.preco * (percentual / 100);
    }
}

const produto = new Produto("Teclado", 1000);

console.log(produto);
produto.aplicarDesconto(10);
console.log(produto);
const produto1 = new Produto("Mouse", 100);
console.log(produto1);
produto1.aplicarDesconto(10);
console.log(produto1);