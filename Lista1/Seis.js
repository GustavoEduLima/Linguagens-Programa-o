//Faça uma função que mostre o dobro do número passado. Caso o número seja menor ou igual a zero deve 
// mostrar a mensagem "Só é aceito números positivos maiores que zero".

function calcularDobro(numero){
    if(numero <= 0){
        return "numero deve ser maior que 0";
    }else{
        return numero * 2;
    }
}
console.log(calcularDobro(5));
console.log(calcularDobro(0));
console.log(calcularDobro(-1));
console.log(calcularDobro(10));