//6- Escreva um programa que receba o nome de uma peça de xadrez e retorne os
// movimentos que ela faz.
let pecaDeXadrez = "TORRE";
let movimento = pecaDeXadrez.toLowerCase();
//String.toLowerCase();

switch (movimento){
    case 'peão':
        console.log("Movimenta-se apenas uma casa para frente.");
        break;
    case 'torre':
        console.log("Movimenta-se pela vertical ou horizontal.");
        break;
    case 'bispo':
        console.log("Move-se ao longo da diagonal.");
        break;
    case 'cavalo':
        console.log("O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
        break;
    case 'rainha':
        console.log("A rainha move-se ao longo da horizontal, vertical e diagonais");
        break;
    case 'rei':
        console.log("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");
        break;
    default:
        console.log("bishop -> diagonals")

}

    

