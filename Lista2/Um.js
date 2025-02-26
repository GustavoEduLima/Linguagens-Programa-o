//1. Crie uma função anônima que receba nome e sobrenome e retorne 
// o nome completo. Atribua essa função a uma variável. 
// Chame essa variável passando "Fabio", "Colombini" e mostra o resultado no console.

let nomeCompleto = function(nome, sobrenome){
    return nome + " " + sobrenome;
}

console.log(nomeCompleto("Fabio", "Colombini"));
