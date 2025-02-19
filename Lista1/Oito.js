//Escreva uma função que recebe uma string como argumento e 
// retorna o número de vogais presentes nessa string. 
// Considere apenas vogais minúsculas (a, e, i, o, u).

function ContarVogal(frase) {
    let contarVogal = 0;
    for (let i = 0; i < frase.length; i++) {
        let frase =  "";
        if (frase == "a" || frase == "e" || frase == "i" || frase == "o" || frase == "u") {
        contarVogal++;
        }
    }
    return contarVogal;
  }
  let frase = "Essa frase é só um teste para contar as vogais";
    let QuantidadeVogal = contarVogal(frase);
    console.log("Frase:x " + frase);
    console.log("Quantidade de vogais: " + QuantidadeVogal);    