//3. Dado o array numeros = [10, 20, 30, 40, 50], 
// escreva uma função que receba um array e retorne a soma de todos os elementos desse array

let numeros = [10, 20, 30, 40, 50];
let soma = 0;
let somar = function(numeros){
    for(let i = 0; i < numeros.length; i++){
        soma += numeros[i];
    }
    return soma;
}
console.log(somar(numeros));