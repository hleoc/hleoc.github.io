//Descubra quantos valores ímpares existem no array e imprima o resultado. 
//Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], quantidadeImpares = 0;


for (let c = 0; c < numbers.length; c++) {
    if (numbers[c] % 2 !== 0) {
        quantidadeImpares++
    }    
}

if (quantidadeImpares > 0){
    console.log("A quantidade de números impares é: " + quantidadeImpares);
} else {
    console.log("Nenhum valor ímpar encontrado.");
}
