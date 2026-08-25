class Funcionario{
    constructor(nome, salario){
        this.nome = nome;
        this.salario = salario;
    }
}

class Professor extends Funcionario{
    constructor(nome, salario, disciplina){
        super(nome, salario);
        this.disciplina = disciplina;
    }
}

const professor = new Professor("Marcos", 5000, "T.I")

console.log(professor);