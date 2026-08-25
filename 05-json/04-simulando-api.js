const respostaAPI = `[
    {"id":1, "nome": "Miguel"},
    {"id":2, "nome": "Arthur"}
]`;

const usuarios = JSON.parse(respostaAPI);

usuarios.forEach(aluno => {
    console.log(aluno.nome);
    console.log(aluno.id);
});