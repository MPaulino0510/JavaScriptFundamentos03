class Pessoa{
    apresentar(){
        console.log("Sou uma pessoa");
    }
}

class Professor extends Pessoa{
    apresentar(){
        console.log("Sou um professor");
    }
}

class Aluno extends Pessoa{
    apresentar(){
        console.log("Sou um aluhno");
    }
}

new Pessoa().apresentar();
new Professor().apresentar();
