//10- Escreva um programa que, dado o custo de um produto e seu valor de venda,
//calcule quanto de lucro (em números absolutos) a empresa terá ao vender mil
//desses produtos.

let custoProduto = 70, valorVenda = 100, lucro;

if (custoProduto >= 0 && valorVenda >= 0) {
    lucro = ((valorVenda) - (custoProduto + custoProduto * 0.20)) * 1000;
    console.log(lucro);
} else {
    console.log("Erro! O valor de entrada igual a zero");
}

