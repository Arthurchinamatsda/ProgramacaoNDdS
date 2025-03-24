/*
Funçoe sao bloco de códigos que podem ser reutilizado para realizar tarefas epecificas.
Elas podem receber paramentros e retornar um valor. Funções são uma as principais
ferramentas para organizar o cóigos.
*/
function saudacoe(nome){
    return `Ola, ${nome}` //templete string
}
console.log(saudacoe("maria"))
//funções anonima
const soma = function(a, b){
    return a+b
}
console.log(soma(4,2))
//funções flecha(arrow function)

const multiplicar = (a,b)=> a * b 
console.log(multiplicar(5,6))