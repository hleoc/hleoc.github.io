//Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], menorValor = 0;

for (let c = 0; c < numbers.length; c++) {
    
    if (menorValor === 0) {
        menorValor = numbers[0];
    } else if (numbers[c] < menorValor) {
        menorValor = numbers[c];
    }
}
console.log("O menor valor contido no array é: " + menorValor);