//Para o segundo exercício, você deve somar todos os valores contidos no 
//array e imprimir o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], soma = 0;

for (let c = 0; c < numbers.length; c++) {
    soma += numbers[c];
    
}

console.log("O resultado da soma do array é: " + soma);