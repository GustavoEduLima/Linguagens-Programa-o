//Escreva uma função que verifique se uma determinada string é um palíndromo 
//(ou seja, pode ser lida da mesma forma tanto da esquerda para a direita quanto da direita para a esquerda).
//Exemplo: arara


function ePalindromo(frase) {
    const fraseLimpa = frase.toLowerCase().replace(/ /g, "");
    const fraseInvertida = fraseLimpa.split("").reverse().join("");
    return fraseLimpa === fraseInvertida;
  }
  
  // Exemplos de uso da função ehPalindromo:
  console.log("arara:", ePalindromo("arara")); // true
  console.log("A mala nada na lama:", ePalindromo("A mala nada na lama")); // true
  console.log("roma:", ePalindromo("roma")); // false