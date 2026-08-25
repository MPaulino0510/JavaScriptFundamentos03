const alunos = [
    {nome: "Ana", nota: 10},
    {nome: "Alice", nota: 8},
];

alunos.forEach((a)=> console.log(`A aluna ${a.nome} a nota: ${a.nota}`));

for(let i = 0; i < alunos.length; i++){
    console.log(`A aluna ${alunos[i].nome} a nota: ${alunos[i].nota}`)
}

const json = JSON.stringify(alunos);
console.log(json);