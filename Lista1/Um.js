// 1. Escreva um programa que declare duas variaveis numericas e realize as
// quadros operaçoes matemáticas básicas (soma, subtração, multiplicação e
// divisão). Imprima os resultados no console.

function soma( a, b){
    let resultadoSoma = a + b;
    return resultadoSoma;
}

function subtracao( a, b){
    let resultadoSubtracao = a - b;
    return resultadoSubtracao;
}

function multiplicação( a, b){
    let resultadoMultiplicacao = a * b;
    return resultadoMultiplicacao;
}

function divisao( a, b){
    let resultadoDivisao = a / b;
    return resultadoDivisao;
}

let resultadoSoma = soma(10, 2);
let resultadoSubtracao = subtracao(10, 2);
let resultadoMultiplicacao = multiplicação(10, 2);
let resultadoDivisao = divisao(10, 2);

// Chamando as funções
console.log("O resultado da soma é: ", resultadoSoma);
console.log("O resultado da subtração é: ", resultadoSubtracao);
console.log("O resultado da multiplicação é: ", resultadoMultiplicacao);
console.log("o resultado da divisão é: ", resultadoDivisao);

// A resposta correta seria a seguinte:
// A soma de 10 e 2 é igual a 12
// A subtração de 10 e 2 é igual a 8
// A multiplicação de 10 e 2 é igual a 20
// A divisão de 10 e 2 é igual a 5
