//Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], maiorNumero = 0;

for (let c = 0; c < numbers.length; c++) {
    
    if (numbers[c] > maiorNumero) {
        maiorNumero = numbers[c];
    }

}

console.log("O maior valor contido no array é: " + maiorNumero);