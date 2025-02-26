//9. Dado o objeto endereco com propriedades como rua, numero, bairro e cidade. 
// Faça um loop que mostre todas as propriedades e seus valores de forma genérica.

let endereco = {
    rua : "Avenida professor Fabio Colombini",
    numero : 24,
    bairro : "Jardim Constantino Matucci",
    cidade : "Sorocaba"
}   

for(let local in endereco){
    console.log(local + ": " + endereco[local]);
}
