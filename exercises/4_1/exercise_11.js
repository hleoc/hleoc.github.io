let salarioBruto = 3000, inss, ir, salarioBase, salarioLiquido;

if (salarioBruto >= 0 && salarioBruto <= 1556.94){
    inss = salarioBruto * 0.08;
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92){
    inss = salarioBruto * 0.09;
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    inss = salarioBruto * 0.11;
} else if (salarioBruto > 5189.82) {
    inss = salarioBruto - 570.88;
} else {
    console.log("ERRO! O salário não pode ser menor que R$0,00");
}

salarioBase = salarioBruto - inss;

if (salarioBase <= 1903.98){
    ir = salarioBase * 0;
} else if (salarioBase > 1903.98 && salarioBase <= 2826.65){
    ir = (salarioBase * 0.075) - 142.80;
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
    ir = (salarioBase * 0.15) - 354.80;
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
    ir = (salarioBase * 0.225) - 636.13;
} else {
    ir = (salarioBase * 0.275) - 869.36;
}

salarioLiquido = salarioBase - ir;

console.log("RESULTADO:",salarioLiquido);
