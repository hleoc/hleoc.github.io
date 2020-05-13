//Para o terceiro exercício, calcule e imprima a média aritmética dos valores 
//contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], soma = 0, media;

for (let c = 0; c < numbers.length; c++) {
 soma += numbers[c];
 media = soma/(numbers.length);
    
}

console.log("A média da soma dos elementos do array é:" + media);