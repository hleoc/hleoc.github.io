//3- Faça um programa que retorne o maior de três números. 
//Defina no começo do programa três variáveis com os valores que serão comparados.

let n1 = 9, n2 = 1, n3 = 15;

if (n1 > n2 && n1 > n3){
    console.log("O maior número é o:",n1);
} else if (n2 > n1 && n2 > n3){
    console.log("O maior número é o:",n2);
} else {
    console.log("O maior número é o:",n3)
}
