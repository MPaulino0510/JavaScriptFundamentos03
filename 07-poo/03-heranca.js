class Pessoa{
    constructor (nome){
        this.nome = nome;
    }
}

class Aluno extends Pessoa{
    constructor(nome, curso){
        super(nome);
        this.curso = curso;
    }
}

const aluno = new Aluno("Miguel", "Desenvolvimento de sistemas");
console.log(aluno);