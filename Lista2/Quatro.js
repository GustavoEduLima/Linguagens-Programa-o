//4. Dado o array numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10), 
// escreva uma função que receba um array e retorne um array de números ímpares.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let impares = function(numeros){
    let impares = [];
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 != 0){
            impares.push(numeros[i]);
        }
    }
    return impares;
}

console.log(impares(numeros));