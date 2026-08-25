class Aluno {
    constructor(nome, idade){
        this.nome = nome,
        this.idade = idade
    };
    apresentar(){
        console.log(`${this.nome} - Nota: ${this.idade}`)
    }
}

const aluno = new Aluno("Miguel", 16);
console.log(aluno);
const aluno2 = new Aluno("Arthur", 17);
console.log(aluno);
aluno.apresentar();