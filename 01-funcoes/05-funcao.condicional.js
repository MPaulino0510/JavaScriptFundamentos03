function verificaNota(media){
    if(media >= 7){
        return "Aprovado"
    }
    return "Reprovado"
}

console.log(verificaNota(8));