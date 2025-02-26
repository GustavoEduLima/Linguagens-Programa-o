//5. Crie um array chamado cidades = ["Sorocaba", "Piedade", "Votorantim"]. 
// Em seguida, usando métodos de array, adicione uma nova cidade 
// no início do array e remova a última cidade.

let cidades = ["Sorocaba", "Piedade", "Votorantim"];
cidades.unshift("Bauru");   
cidades.pop();
console.log(cidades);