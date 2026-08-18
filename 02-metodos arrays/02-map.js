const numeros = [1, 2, 3, 4, 5];

const dobrado = numeros.map((num) =>{
    return num * 2;
});

console.log(dobrado);

let nomes = ["Brenda", "Carlos", "Miguel", "Felipe"];

let mensagem = nomes.map((nome) => `Olá, ${nome.toLocaleUpperCase()}`);

console.log(mensagem);