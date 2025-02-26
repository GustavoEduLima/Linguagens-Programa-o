//10. Escreva uma função chamada alunos Maior que recebe um array de 
// objetos Alunos (criado acima) como entrada e retorna um novo array 
// com apenas os alunos com idade acima de 18 anos.


let Alunos = [
    {
        nome : "Gustavo",
        idade : 19
    },
    {
        nome : "Eduardo",
        idade : 19
    },
    {
        nome : "Lima",
        idade : 20
    },
    {
        nome : "Murilo",
        idade : 16
    }
]

let AlunosMaiores = function(Alunos){
    for(let i = 0; i < Alunos.length; i++){
        if(Alunos[i].idade >= 18){
            console.log(Alunos[i].nome+ " é maior de idade");
        }else{
            console.log(Alunos[i].nome+ " é menor de idade");
        }
    }
}

console.log(AlunosMaiores(Alunos));