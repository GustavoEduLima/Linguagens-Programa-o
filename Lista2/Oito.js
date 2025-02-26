// 8. Crie um objeto chamado produto com as propriedades nome, preco, quantidade e calcular Total.
// O método calcular Total deve retornar o preço total do produto (preço multiplicado pela quantidade).

let Produto = {
    nome : "Diclofenato de Potássio",
    preco : 25,
    quantidade : 100,
    
    calcularTotal : function(){
        return this.preco * this.quantidade;
    }
}

console.log(Produto.calcularTotal());