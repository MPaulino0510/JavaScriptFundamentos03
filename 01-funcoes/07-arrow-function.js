function somarTradicional(a, b){
    return a + b;
}
const somarAnonima = function(a, b) {
    return a + b;
}
const somarArrowFunction = (a,b) =>{
    return a + b;
}

console.log(somarTradicional(10, 5))
console.log(somarAnonima(10, 5))
console.log(somarArrowFunction(10, 5))