//7. Escreva uma função chamada encontra MaiorNumero 
// que recebe um array de números como entrada e retorna 
// o maior número encontrado no array.

let numeros = [25, 48, 9, 68, 31, 2, 7, 14, 5, 10];

let encontraMaiorNumero = function(numeros){
    let maior = 0;

    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] > maior){
            maior = numeros[i];
        }
    }
    
    return maior;
}   

console.log(encontraMaiorNumero(numeros));