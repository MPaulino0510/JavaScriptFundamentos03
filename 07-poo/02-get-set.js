class Pessoa{
    #nome;

    constructor(nome){
    this.#nome = nome;
    }

    get nome(){
        return this.#nome;
    }

    set nome(valor){
        if(valor.lenght >= 2)
             this.#nome = valor;
            
    }
}


const pessoa = new Pessoa("Miguel");
console.log(pessoa.nome);
pessoa.nome = "Victória";
console.log(pessoa.nome);